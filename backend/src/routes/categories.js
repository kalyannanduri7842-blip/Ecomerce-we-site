const express = require('express');
const { getDb } = require('../data/store');

const router = express.Router();

router.get('/', (req, res) => {
  const db = getDb();
  const cats = db.categories.map(c => {
    const count = db.products.filter(p => p.categoryId === c.id && p.status === 'active').length;
    return { ...c, productCount: count };
  });
  res.json({ categories: cats });
});

router.get('/:slug', (req, res) => {
  const db = getDb();
  const cat = db.categories.find(c => c.slug === req.params.slug || String(c.id) === req.params.slug);
  if (!cat) return res.status(404).json({ error: 'Category not found' });
  res.json(cat);
});

module.exports = router;
