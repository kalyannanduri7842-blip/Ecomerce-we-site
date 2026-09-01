const express = require('express');
const { getDb, saveDb } = require('../data/store');
const { auth } = require('../middleware/auth');

const router = express.Router();

function getCartKey(userId) {
  return String(userId);
}

function enrichCartItems(items, products) {
  return items.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return null;
    const available = Math.max(0, (product.stock || 0) - (product.reservedStock || 0));
    const price = product.discountPrice != null ? product.discountPrice : product.price;
    return {
      productId: product.id,
      name: product.name,
      slug: product.slug,
      image: (product.images && product.images[0]) || '',
      price,
      originalPrice: product.price,
      quantity: item.quantity,
      size: item.size || null,
      color: item.color || null,
      availableStock: available,
      lineTotal: price * item.quantity
    };
  }).filter(Boolean);
}

// Get cart
router.get('/', auth(true), (req, res) => {
  const db = getDb();
  const key = getCartKey(req.user.id);
  const cart = db.carts[key] || { items: [] };
  const items = enrichCartItems(cart.items, db.products);
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0);
  res.json({ items, subtotal, itemCount: items.reduce((s, i) => s + i.quantity, 0) });
});

// Add / update item
router.post('/items', auth(true), (req, res) => {
  const { productId, quantity = 1, size, color } = req.body;
  if (!productId || quantity < 1) {
    return res.status(400).json({ error: 'productId and quantity >= 1 required' });
  }
  const db = getDb();
  const product = db.products.find(p => p.id === Number(productId));
  if (!product || product.status !== 'active') {
    return res.status(404).json({ error: 'Product not found or unavailable' });
  }
  if (product.expiryDate && new Date(product.expiryDate) < new Date()) {
    return res.status(400).json({ error: 'Product has expired' });
  }
  const available = Math.max(0, (product.stock || 0) - (product.reservedStock || 0));
  if (quantity > available) {
    return res.status(400).json({ error: `Only ${available} units available` });
  }

  const key = getCartKey(req.user.id);
  if (!db.carts[key]) db.carts[key] = { items: [] };
  const cart = db.carts[key];
  const existing = cart.items.find(i =>
    i.productId === Number(productId) &&
    (i.size || null) === (size || null) &&
    (i.color || null) === (color || null)
  );
  if (existing) {
    const newQty = existing.quantity + quantity;
    if (newQty > available) {
      return res.status(400).json({ error: `Only ${available} units available` });
    }
    existing.quantity = newQty;
  } else {
    cart.items.push({
      productId: Number(productId),
      quantity: Number(quantity),
      size: size || null,
      color: color || null
    });
  }
  saveDb();
  const items = enrichCartItems(cart.items, db.products);
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0);
  res.json({ items, subtotal, itemCount: items.reduce((s, i) => s + i.quantity, 0) });
});

// Update quantity
router.put('/items/:productId', auth(true), (req, res) => {
  const productId = Number(req.params.productId);
  const { quantity, size, color } = req.body;
  if (quantity == null || quantity < 0) {
    return res.status(400).json({ error: 'quantity required' });
  }
  const db = getDb();
  const key = getCartKey(req.user.id);
  const cart = db.carts[key];
  if (!cart) return res.status(404).json({ error: 'Cart empty' });

  const idx = cart.items.findIndex(i =>
    i.productId === productId &&
    (i.size || null) === (size || null) &&
    (i.color || null) === (color || null)
  );
  if (idx === -1) return res.status(404).json({ error: 'Item not in cart' });

  if (quantity === 0) {
    cart.items.splice(idx, 1);
  } else {
    const product = db.products.find(p => p.id === productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    const available = Math.max(0, (product.stock || 0) - (product.reservedStock || 0));
    if (quantity > available) {
      return res.status(400).json({ error: `Only ${available} units available` });
    }
    cart.items[idx].quantity = quantity;
  }
  saveDb();
  const items = enrichCartItems(cart.items, db.products);
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0);
  res.json({ items, subtotal, itemCount: items.reduce((s, i) => s + i.quantity, 0) });
});

// Remove item
router.delete('/items/:productId', auth(true), (req, res) => {
  const productId = Number(req.params.productId);
  const { size, color } = req.query;
  const db = getDb();
  const key = getCartKey(req.user.id);
  const cart = db.carts[key];
  if (!cart) return res.json({ items: [], subtotal: 0, itemCount: 0 });
  cart.items = cart.items.filter(i =>
    !(i.productId === productId &&
      (i.size || null) === (size || null) &&
      (i.color || null) === (color || null))
  );
  saveDb();
  const items = enrichCartItems(cart.items, db.products);
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0);
  res.json({ items, subtotal, itemCount: items.reduce((s, i) => s + i.quantity, 0) });
});

// Clear cart
router.delete('/', auth(true), (req, res) => {
  const db = getDb();
  const key = getCartKey(req.user.id);
  db.carts[key] = { items: [] };
  saveDb();
  res.json({ items: [], subtotal: 0, itemCount: 0 });
});

module.exports = router;
