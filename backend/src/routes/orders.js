const express = require('express');
const { getDb, saveDb } = require('../data/store');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Create order (checkout)
router.post('/', auth(true), (req, res) => {
  const { address, paymentMethod = 'mock' } = req.body;
  if (!address || !address.fullName || !address.phone || !address.addressLine || !address.city || !address.state || !address.postalCode) {
    return res.status(400).json({ error: 'Complete delivery address is required' });
  }

  const db = getDb();
  const key = String(req.user.id);
  const cart = db.carts[key];
  if (!cart || !cart.items || cart.items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  // Validate stock and build items
  const orderItems = [];
  let subtotal = 0;
  for (const item of cart.items) {
    const product = db.products.find(p => p.id === item.productId);
    if (!product || product.status !== 'active') {
      return res.status(400).json({ error: `Product ${item.productId} is no longer available` });
    }
    if (product.expiryDate && new Date(product.expiryDate) < new Date()) {
      return res.status(400).json({ error: `${product.name} has expired` });
    }
    const available = Math.max(0, (product.stock || 0) - (product.reservedStock || 0));
    if (item.quantity > available) {
      return res.status(400).json({ error: `Insufficient stock for ${product.name}. Available: ${available}` });
    }
    const price = product.discountPrice != null ? product.discountPrice : product.price;
    orderItems.push({
      productId: product.id,
      name: product.name,
      sku: product.sku,
      image: (product.images && product.images[0]) || '',
      price,
      quantity: item.quantity,
      size: item.size || null,
      color: item.color || null,
      lineTotal: price * item.quantity
    });
    subtotal += price * item.quantity;
  }

  // Deduct stock (simple, no true concurrency control for this MVP)
  for (const item of cart.items) {
    const product = db.products.find(p => p.id === item.productId);
    const prev = product.stock;
    product.stock = Math.max(0, product.stock - item.quantity);
    product.updatedAt = new Date().toISOString();
    db.stockMovements.push({
      id: db.nextIds.movement++,
      productId: product.id,
      productName: product.name,
      previousQuantity: prev,
      change: -item.quantity,
      newQuantity: product.stock,
      reason: 'Order sale',
      adminId: null,
      adminName: 'System',
      orderId: null, // will set after
      timestamp: new Date().toISOString()
    });
  }

  const shipping = subtotal >= 999 ? 0 : 49;
  const total = subtotal + shipping;

  const order = {
    id: db.nextIds.order++,
    userId: req.user.id,
    customerName: address.fullName,
    customerEmail: req.user.email,
    items: orderItems,
    address: {
      fullName: address.fullName,
      phone: address.phone,
      addressLine: address.addressLine,
      city: address.city,
      state: address.state,
      postalCode: address.postalCode,
      country: address.country || 'India'
    },
    subtotal,
    shipping,
    total,
    paymentMethod: paymentMethod === 'mock' ? 'Test Payment (Mock)' : paymentMethod,
    paymentStatus: 'paid', // mock payment always succeeds for demo
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Link movement to order
  db.stockMovements.forEach(m => {
    if (m.orderId === null && m.reason === 'Order sale') m.orderId = order.id;
  });

  db.orders.push(order);
  // Clear cart
  db.carts[key] = { items: [] };
  saveDb();

  res.status(201).json({
    message: 'Order placed successfully',
    order: {
      id: order.id,
      total: order.total,
      status: order.status,
      paymentStatus: order.paymentStatus,
      createdAt: order.createdAt,
      items: order.items,
      address: order.address
    }
  });
});

// Customer: my orders
router.get('/my', auth(true), (req, res) => {
  const db = getDb();
  const orders = db.orders
    .filter(o => o.userId === req.user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(o => ({
      id: o.id,
      total: o.total,
      status: o.status,
      paymentStatus: o.paymentStatus,
      itemCount: o.items.reduce((s, i) => s + i.quantity, 0),
      createdAt: o.createdAt
    }));
  res.json({ orders });
});

// Customer: order detail
router.get('/my/:id', auth(true), (req, res) => {
  const db = getDb();
  const order = db.orders.find(o => o.id === Number(req.params.id) && o.userId === req.user.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// Admin: list all orders
router.get('/', auth(true), adminOnly, (req, res) => {
  const db = getDb();
  const { status } = req.query;
  let orders = [...db.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (status) orders = orders.filter(o => o.status === status);
  res.json({
    orders: orders.map(o => ({
      id: o.id,
      customerName: o.customerName,
      customerEmail: o.customerEmail,
      total: o.total,
      status: o.status,
      paymentStatus: o.paymentStatus,
      itemCount: o.items.reduce((s, i) => s + i.quantity, 0),
      createdAt: o.createdAt
    })),
    total: orders.length
  });
});

// Admin: order detail
router.get('/:id', auth(true), adminOnly, (req, res) => {
  const db = getDb();
  const order = db.orders.find(o => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// Admin: update status
router.patch('/:id/status', auth(true), adminOnly, (req, res) => {
  const { status } = req.body;
  const allowed = ['confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: `Status must be one of: ${allowed.join(', ')}` });
  }
  const db = getDb();
  const order = db.orders.find(o => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });

  // Simple transition rules
  if (order.status === 'delivered' || order.status === 'cancelled') {
    return res.status(400).json({ error: `Cannot change status from ${order.status}` });
  }
  if (status === 'cancelled' && order.status === 'shipped') {
    return res.status(400).json({ error: 'Cannot cancel a shipped order' });
  }

  order.status = status;
  order.updatedAt = new Date().toISOString();
  saveDb();
  res.json({ message: 'Status updated', order });
});

module.exports = router;
