const express = require('express');
const { getDb, saveDb } = require('../data/store');
const { auth } = require('../middleware/auth');

const router = express.Router();

function getKey(userId) {
  return String(userId);
}

// Get wishlist
router.get('/', auth(true), (req, res) => {
  const db = getDb();
  const key = getKey(req.user.id);
  const ids = db.wishlists[key] || [];
  const products = ids
    .map(id => {
      const p = db.products.find(x => x.id === id && x.status === 'active');
      if (!p) return null;
      const available = Math.max(0, (p.stock || 0) - (p.reservedStock || 0));
      return {
        id: p.id,
        name: p.name,
        slug: p.slug,
        price: p.price,
        discountPrice: p.discountPrice,
        image: (p.images && p.images[0]) || '',
        availableStock: available,
        isOutOfStock: available <= 0
      };
    })
    .filter(Boolean);
  res.json({ items: products, count: products.length });
});

// Add to wishlist
router.post('/:productId', auth(true), (req, res) => {
  const productId = Number(req.params.productId);
  const db = getDb();
  const product = db.products.find(p => p.id === productId && p.status === 'active');
  if (!product) return res.status(404).json({ error: 'Product not found' });
  const key = getKey(req.user.id);
  if (!db.wishlists[key]) db.wishlists[key] = [];
  if (!db.wishlists[key].includes(productId)) {
    db.wishlists[key].push(productId);
    saveDb();
  }
  res.json({ message: 'Added to wishlist', count: db.wishlists[key].length });
});

// Remove from wishlist
router.delete('/:productId', auth(true), (req, res) => {
  const productId = Number(req.params.productId);
  const db = getDb();
  const key = getKey(req.user.id);
  if (db.wishlists[key]) {
    db.wishlists[key] = db.wishlists[key].filter(id => id !== productId);
    saveDb();
  }
  res.json({ message: 'Removed from wishlist', count: (db.wishlists[key] || []).length });
});

module.exports = router;
