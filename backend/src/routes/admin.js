const express = require('express');
const { getDb, saveDb } = require('../data/store');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

router.use(auth(true), adminOnly);

// Dashboard stats
router.get('/dashboard', (req, res) => {
  const db = getDb();
  const products = db.products;
  const orders = db.orders;
  const users = db.users.filter(u => u.role === 'customer');

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  let totalStock = 0;
  let lowStock = 0;
  let outOfStock = 0;
  let expired = 0;

  products.forEach(p => {
    const avail = Math.max(0, (p.stock || 0) - (p.reservedStock || 0));
    totalStock += avail;
    if (avail <= 0) outOfStock++;
    else if (avail <= (p.lowStockThreshold || 10)) lowStock++;
    if (p.expiryDate && new Date(p.expiryDate) < now) expired++;
  });

  const todayOrders = orders.filter(o => o.createdAt >= todayStart);
  const monthOrders = orders.filter(o => o.createdAt >= monthStart);

  const todaySales = todayOrders.reduce((s, o) => s + (o.total || 0), 0);
  const monthSales = monthOrders.reduce((s, o) => s + (o.total || 0), 0);
  const totalSales = orders.reduce((s, o) => s + (o.total || 0), 0);

  res.json({
    totalProducts: products.filter(p => p.status === 'active').length,
    totalStock,
    lowStock,
    outOfStock,
    expiredProducts: expired,
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => ['confirmed', 'processing'].includes(o.status)).length,
    completedOrders: orders.filter(o => o.status === 'delivered').length,
    totalCustomers: users.length,
    todaySales,
    monthlySales: monthSales,
    totalSales
  });
});

// Inventory list
router.get('/inventory', (req, res) => {
  const db = getDb();
  const { filter } = req.query;
  const now = new Date();

  let list = db.products.map(p => {
    const available = Math.max(0, (p.stock || 0) - (p.reservedStock || 0));
    const isExpired = p.expiryDate ? new Date(p.expiryDate) < now : false;
    let statusLabel = 'Active';
    if (p.status !== 'active') statusLabel = p.status;
    else if (isExpired) statusLabel = 'Expired';
    else if (available <= 0) statusLabel = 'Out of Stock';
    else if (available <= (p.lowStockThreshold || 10)) statusLabel = 'Low Stock';

    const cat = db.categories.find(c => c.id === p.categoryId);
    return {
      id: p.id,
      name: p.name,
      sku: p.sku,
      category: cat ? cat.name : '',
      stock: p.stock,
      reservedStock: p.reservedStock || 0,
      availableStock: available,
      lowStockThreshold: p.lowStockThreshold || 10,
      expiryDate: p.expiryDate,
      status: statusLabel,
      productStatus: p.status
    };
  });

  if (filter === 'low_stock') list = list.filter(i => i.status === 'Low Stock');
  if (filter === 'out_of_stock') list = list.filter(i => i.status === 'Out of Stock');
  if (filter === 'expired') list = list.filter(i => i.status === 'Expired');
  if (filter === 'expiring_soon') {
    const soon = new Date();
    soon.setDate(soon.getDate() + 30);
    list = list.filter(i => i.expiryDate && new Date(i.expiryDate) <= soon && new Date(i.expiryDate) >= now);
  }
  if (filter === 'active') list = list.filter(i => i.productStatus === 'active' && i.status !== 'Expired');
  if (filter === 'inactive') list = list.filter(i => i.productStatus !== 'active');

  res.json({ inventory: list, total: list.length });
});

// Increase / Decrease stock
router.post('/inventory/:id/adjust', (req, res) => {
  const { quantity, reason, type } = req.body; // type: 'increase' | 'decrease'
  const qty = Number(quantity);
  if (!qty || qty <= 0 || !reason || !['increase', 'decrease'].includes(type)) {
    return res.status(400).json({ error: 'Valid quantity (>0), reason and type (increase/decrease) required' });
  }
  const db = getDb();
  const product = db.products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });

  const prev = product.stock;
  if (type === 'decrease') {
    if (qty > product.stock) {
      return res.status(400).json({ error: `Cannot decrease by ${qty}. Current stock is ${product.stock}` });
    }
    product.stock -= qty;
  } else {
    product.stock += qty;
  }
  product.updatedAt = new Date().toISOString();

  db.stockMovements.push({
    id: db.nextIds.movement++,
    productId: product.id,
    productName: product.name,
    previousQuantity: prev,
    change: type === 'increase' ? qty : -qty,
    newQuantity: product.stock,
    reason,
    adminId: req.user.id,
    adminName: req.user.name,
    orderId: null,
    timestamp: new Date().toISOString()
  });
  saveDb();
  res.json({
    message: `Stock ${type}d successfully`,
    product: { id: product.id, name: product.name, stock: product.stock },
    movement: db.stockMovements[db.stockMovements.length - 1]
  });
});

// Stock movement history
router.get('/inventory/movements', (req, res) => {
  const db = getDb();
  const { productId } = req.query;
  let movements = [...db.stockMovements].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  if (productId) movements = movements.filter(m => m.productId === Number(productId));
  res.json({ movements: movements.slice(0, 100) });
});

// Customers
router.get('/customers', (req, res) => {
  const db = getDb();
  const customers = db.users
    .filter(u => u.role === 'customer')
    .map(u => {
      const userOrders = db.orders.filter(o => o.userId === u.id);
      const totalSpent = userOrders.reduce((s, o) => s + (o.total || 0), 0);
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone || '',
        status: u.status,
        orderCount: userOrders.length,
        totalSpent,
        registeredAt: u.createdAt
      };
    })
    .sort((a, b) => new Date(b.registeredAt) - new Date(a.registeredAt));
  res.json({ customers, total: customers.length });
});

// Sales analytics
router.get('/sales', (req, res) => {
  const db = getDb();
  const orders = db.orders.filter(o => o.paymentStatus === 'paid');
  const now = new Date();

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekStart = new Date(todayStart);
  weekStart.setDate(weekStart.getDate() - 7);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const sum = (list) => list.reduce((s, o) => s + (o.total || 0), 0);

  const todayOrders = orders.filter(o => new Date(o.createdAt) >= todayStart);
  const weekOrders = orders.filter(o => new Date(o.createdAt) >= weekStart);
  const monthOrders = orders.filter(o => new Date(o.createdAt) >= monthStart);

  // Top products
  const productSales = {};
  orders.forEach(o => {
    o.items.forEach(i => {
      if (!productSales[i.productId]) {
        productSales[i.productId] = { productId: i.productId, name: i.name, quantity: 0, revenue: 0 };
      }
      productSales[i.productId].quantity += i.quantity;
      productSales[i.productId].revenue += i.lineTotal;
    });
  });
  const topProducts = Object.values(productSales)
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);

  // Monthly breakdown (last 6 months)
  const monthly = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const next = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
    const mOrders = orders.filter(o => {
      const t = new Date(o.createdAt);
      return t >= d && t < next;
    });
    monthly.push({
      month: d.toLocaleString('default', { month: 'short', year: 'numeric' }),
      sales: sum(mOrders),
      orders: mOrders.length
    });
  }

  res.json({
    todaySales: sum(todayOrders),
    todayOrders: todayOrders.length,
    weekSales: sum(weekOrders),
    weekOrders: weekOrders.length,
    monthSales: sum(monthOrders),
    monthOrders: monthOrders.length,
    totalSales: sum(orders),
    totalOrders: orders.length,
    averageOrderValue: orders.length ? Math.round(sum(orders) / orders.length) : 0,
    topProducts,
    monthlySales: monthly
  });
});

module.exports = router;
