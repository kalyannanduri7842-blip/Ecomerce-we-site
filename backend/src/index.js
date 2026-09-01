const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Ensure data dir exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const { seed } = require('./data/seed');
const { getDb } = require('./data/store');

// Seed if empty
const db = getDb();
if (!db.products || db.products.length === 0) {
  console.log('Seeding database...');
  seed();
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/wishlist', require('./routes/wishlist'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/admin', require('./routes/admin'));

// Health
app.get('/api/health', (req, res) => {
  const d = getDb();
  res.json({
    status: 'ok',
    products: d.products.length,
    orders: d.orders.length,
    users: d.users.length
  });
});

// Serve frontend static if built (optional)
const frontendDist = path.join(__dirname, '../../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(frontendDist, 'index.html'));
    }
  });
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 NexMart Backend running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Admin login: admin@nexmart.com / admin123`);
  console.log(`   Customer: customer@nexmart.com / customer123\n`);
});
