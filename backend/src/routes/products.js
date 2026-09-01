const express = require('express');
const { getDb, saveDb } = require('../data/store');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

function isExpired(product) {
  if (!product.expiryDate) return false;
  return new Date(product.expiryDate) < new Date();
}

function enrichProduct(p) {
  const available = Math.max(0, (p.stock || 0) - (p.reservedStock || 0));
  const expired = isExpired(p);
  return {
    ...p,
    availableStock: available,
    isExpired: expired,
    isOutOfStock: available <= 0 || expired,
    isLowStock: available > 0 && available <= (p.lowStockThreshold || 10)
  };
}

// Public list
router.get('/', (req, res) => {
  const db = getDb();
  let products = db.products.map(enrichProduct);

  const { category, search, status, minPrice, maxPrice, sort } = req.query;

  if (category) {
    const cat = db.categories.find(c => c.slug === category || c.id === Number(category));
    if (cat) products = products.filter(p => p.categoryId === cat.id);
  }

  if (search) {
    const q = search.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.sku && p.sku.toLowerCase().includes(q))
    );
  }

  // For customers hide inactive & expired by default
  if (req.query.admin !== '1') {
    products = products.filter(p => p.status === 'active' && !p.isExpired);
  }

  if (status === 'active') products = products.filter(p => p.status === 'active');
  if (status === 'inactive') products = products.filter(p => p.status !== 'active');
  if (status === 'expired') products = products.filter(p => p.isExpired);
  if (status === 'out_of_stock') products = products.filter(p => p.isOutOfStock);
  if (status === 'low_stock') products = products.filter(p => p.isLowStock);

  if (minPrice) products = products.filter(p => (p.discountPrice || p.price) >= Number(minPrice));
  if (maxPrice) products = products.filter(p => (p.discountPrice || p.price) <= Number(maxPrice));

  if (sort === 'price_asc') products.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
  if (sort === 'price_desc') products.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
  if (sort === 'newest') products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (sort === 'name') products.sort((a, b) => a.name.localeCompare(b.name));

  res.json({ products, total: products.length });
});

// Single product by slug or id
router.get('/:slugOrId', (req, res) => {
  const db = getDb();
  const key = req.params.slugOrId;
  let product = db.products.find(p => p.slug === key || String(p.id) === key);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  product = enrichProduct(product);
  const category = db.categories.find(c => c.id === product.categoryId);
  res.json({ ...product, category });
});

// Admin create
router.post('/', auth(true), adminOnly, (req, res) => {
  const db = getDb();
  const body = req.body;
  if (!body.name || !body.price || !body.categoryId) {
    return res.status(400).json({ error: 'Name, price and categoryId are required' });
  }
  const slug = (body.slug || body.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (db.products.find(p => p.slug === slug)) {
    return res.status(400).json({ error: 'Slug already exists' });
  }
  const product = {
    id: db.nextIds.product++,
    name: body.name,
    slug,
    sku: body.sku || `SKU-${Date.now()}`,
    categoryId: Number(body.categoryId),
    description: body.description || '',
    price: Number(body.price),
    discountPrice: body.discountPrice != null ? Number(body.discountPrice) : null,
    stock: Number(body.stock) || 0,
    reservedStock: 0,
    lowStockThreshold: Number(body.lowStockThreshold) || 10,
    images: Array.isArray(body.images) && body.images.length ? body.images : [`https://picsum.photos/seed/${slug}/600/600`],
    status: body.status || 'active',
    gender: body.gender || null,
    material: body.material || null,
    sizes: body.sizes || [],
    colors: body.colors || [],
    brand: body.brand || null,
    weight: body.weight || null,
    expiryDate: body.expiryDate || null,
    rating: '4.0',
    reviewCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  db.products.push(product);
  saveDb();
  res.status(201).json(enrichProduct(product));
});

// Admin update
router.put('/:id', auth(true), adminOnly, (req, res) => {
  const db = getDb();
  const id = Number(req.params.id);
  const idx = db.products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Product not found' });
  const body = req.body;
  const p = db.products[idx];
  const fields = ['name', 'description', 'price', 'discountPrice', 'stock', 'lowStockThreshold',
    'images', 'status', 'gender', 'material', 'sizes', 'colors', 'brand', 'weight', 'expiryDate', 'categoryId', 'sku'];
  fields.forEach(f => {
    if (body[f] !== undefined) p[f] = body[f];
  });
  if (body.slug) p.slug = body.slug;
  p.updatedAt = new Date().toISOString();
  saveDb();
  res.json(enrichProduct(p));
});

// Admin delete / archive
router.delete('/:id', auth(true), adminOnly, (req, res) => {
  const db = getDb();
  const id = Number(req.params.id);
  const p = db.products.find(p => p.id === id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  p.status = 'archived';
  p.updatedAt = new Date().toISOString();
  saveDb();
  res.json({ message: 'Product archived', product: enrichProduct(p) });
});

module.exports = router;
