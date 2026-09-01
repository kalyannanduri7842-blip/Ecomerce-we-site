/**
 * NexMart Backend - Pure Node.js (no external deps)
 * Runs on port 4000
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

const PORT = process.env.PORT || 4000;
const JWT_SECRET = 'nexmart-dev-secret-key-change-in-production';
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// ---------- Simple JSON DB ----------
function loadDb() {
  try {
    if (fs.existsSync(DB_FILE)) return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {}
  return null;
}

function saveDb(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

let db = loadDb();

// ---------- Password helpers (scrypt) ----------
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':');
  const hashVerify = crypto.scryptSync(password, salt, 64).toString('hex');
  return hash === hashVerify;
}

// ---------- Tiny JWT (HS256) ----------
function base64url(data) {
  return Buffer.from(data).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function signToken(payload) {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64url(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 7 * 24 * 3600 }));
  const sig = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${header}.${body}.${sig}`;
}

function verifyToken(token) {
  try {
    const [header, body, sig] = token.split('.');
    const expected = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64')
      .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    if (sig !== expected) return null;
    const payload = JSON.parse(Buffer.from(body.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

// ---------- Seed ----------
function seed() {
  const categories = [
    { id: 1, name: 'Men', slug: 'men', description: "Men's Fashion" },
    { id: 2, name: 'Women', slug: 'women', description: "Women's Fashion" },
    { id: 3, name: 'Kids', slug: 'kids', description: 'Kids Fashion' },
    { id: 4, name: 'Groceries', slug: 'groceries', description: 'Daily Groceries' }
  ];

  const templates = [
    { name: 'Classic Black Cotton T-Shirt', categoryId: 1, price: 599, discountPrice: 449, stock: 45, sku: 'MEN-TS-001', gender: 'men', material: 'Cotton', sizes: ['S','M','L','XL'], colors: ['Black'], description: 'Premium soft cotton t-shirt with classic fit. Perfect for everyday wear.', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop' },
    { name: 'Blue Slim Fit Jeans', categoryId: 1, price: 1499, discountPrice: 1199, stock: 32, sku: 'MEN-JN-002', gender: 'men', material: 'Denim', sizes: ['30','32','34','36'], colors: ['Blue'], description: 'Comfortable slim fit jeans with stretch denim.', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop' },
    { name: 'White Formal Shirt', categoryId: 1, price: 999, discountPrice: 799, stock: 28, sku: 'MEN-SH-003', gender: 'men', material: 'Cotton Blend', sizes: ['S','M','L','XL'], colors: ['White'], description: 'Crisp formal shirt ideal for office and meetings.', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b85?w=600&h=600&fit=crop' },
    { name: 'Grey Hooded Sweatshirt', categoryId: 1, price: 1299, discountPrice: 999, stock: 40, sku: 'MEN-HD-004', gender: 'men', material: 'Fleece', sizes: ['M','L','XL'], colors: ['Grey'], description: 'Warm and soft hoodie with front pocket.', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop' },
    { name: 'Black Casual Sneakers', categoryId: 1, price: 1999, discountPrice: 1599, stock: 22, sku: 'MEN-SN-005', gender: 'men', material: 'Synthetic', sizes: ['8','9','10','11'], colors: ['Black'], description: 'Lightweight casual sneakers with cushioned sole.', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop' },
    { name: 'Olive Cargo Pants', categoryId: 1, price: 1199, discountPrice: 899, stock: 18, sku: 'MEN-CP-006', gender: 'men', material: 'Cotton', sizes: ['30','32','34'], colors: ['Olive'], description: 'Utility cargo pants with multiple pockets.', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop' },
    { name: 'Navy Polo T-Shirt', categoryId: 1, price: 699, discountPrice: 549, stock: 50, sku: 'MEN-PL-007', gender: 'men', material: 'Cotton Pique', sizes: ['S','M','L','XL'], colors: ['Navy'], description: 'Classic polo with breathable fabric.', img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop' },
    { name: 'Brown Leather Belt', categoryId: 1, price: 499, discountPrice: 399, stock: 60, sku: 'MEN-BL-008', gender: 'men', material: 'Genuine Leather', sizes: ['32','34','36','38'], colors: ['Brown'], description: 'Genuine leather belt with classic buckle.', img: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=600&h=600&fit=crop' },
    { name: 'Floral Summer Dress', categoryId: 2, price: 1299, discountPrice: 999, stock: 35, sku: 'WOM-DR-001', gender: 'women', material: 'Rayon', sizes: ['S','M','L'], colors: ['Floral'], description: 'Light and breezy floral dress perfect for summer.', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop' },
    { name: 'High Waist Skinny Jeans', categoryId: 2, price: 1399, discountPrice: 1099, stock: 27, sku: 'WOM-JN-002', gender: 'women', material: 'Stretch Denim', sizes: ['26','28','30','32'], colors: ['Dark Blue'], description: 'Flattering high-waist skinny jeans with stretch.', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop' },
    { name: 'Pink Crop Top', categoryId: 2, price: 499, discountPrice: 399, stock: 42, sku: 'WOM-CT-003', gender: 'women', material: 'Cotton', sizes: ['S','M','L'], colors: ['Pink'], description: 'Trendy crop top for casual and party wear.', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=600&fit=crop' },
    { name: 'Black Maxi Skirt', categoryId: 2, price: 899, discountPrice: 699, stock: 25, sku: 'WOM-SK-004', gender: 'women', material: 'Georgette', sizes: ['S','M','L'], colors: ['Black'], description: 'Elegant flowing maxi skirt.', img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=600&fit=crop' },
    { name: 'White Sneakers for Women', categoryId: 2, price: 1799, discountPrice: 1499, stock: 30, sku: 'WOM-SN-005', gender: 'women', material: 'Canvas', sizes: ['5','6','7','8'], colors: ['White'], description: 'Clean white sneakers that go with everything.', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop' },
    { name: 'Red Kurti', categoryId: 2, price: 799, discountPrice: 599, stock: 38, sku: 'WOM-KU-006', gender: 'women', material: 'Cotton', sizes: ['S','M','L','XL'], colors: ['Red'], description: 'Traditional yet modern kurti with elegant embroidery.', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=600&fit=crop' },
    { name: 'Beige Cardigan', categoryId: 2, price: 1099, discountPrice: 849, stock: 20, sku: 'WOM-CD-007', gender: 'women', material: 'Wool Blend', sizes: ['S','M','L'], colors: ['Beige'], description: 'Soft cardigan for layering.', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop' },
    { name: 'Silver Hoop Earrings', categoryId: 2, price: 399, discountPrice: 299, stock: 80, sku: 'WOM-ER-008', gender: 'women', material: 'Alloy', sizes: ['One Size'], colors: ['Silver'], description: 'Classic silver hoop earrings.', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop' },
    { name: 'Kids Cartoon T-Shirt', categoryId: 3, price: 399, discountPrice: 299, stock: 55, sku: 'KID-TS-001', gender: 'unisex', material: 'Cotton', sizes: ['2-3Y','4-5Y','6-7Y'], colors: ['Blue'], description: 'Fun cartoon printed t-shirt for kids.', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad2?w=600&h=600&fit=crop' },
    { name: 'Boys Denim Shorts', categoryId: 3, price: 599, discountPrice: 449, stock: 33, sku: 'KID-SH-002', gender: 'boys', material: 'Denim', sizes: ['4-5Y','6-7Y','8-9Y'], colors: ['Blue'], description: 'Comfortable denim shorts for active boys.', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=600&fit=crop' },
    { name: 'Girls Frock Dress', categoryId: 3, price: 699, discountPrice: 549, stock: 28, sku: 'KID-DR-003', gender: 'girls', material: 'Cotton', sizes: ['2-3Y','4-5Y','6-7Y'], colors: ['Pink'], description: 'Pretty frock with soft fabric.', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=600&fit=crop' },
    { name: 'Kids School Shoes', categoryId: 3, price: 899, discountPrice: 699, stock: 40, sku: 'KID-SH-004', gender: 'unisex', material: 'Synthetic', sizes: ['10','11','12','13'], colors: ['Black'], description: 'Durable school shoes with good grip.', img: 'https://images.unsplash.com/photo-1514989940723-40d130a25d6e?w=600&h=600&fit=crop' },
    { name: 'Kids Winter Jacket', categoryId: 3, price: 1299, discountPrice: 999, stock: 15, sku: 'KID-JK-005', gender: 'unisex', material: 'Polyester', sizes: ['4-5Y','6-7Y','8-9Y'], colors: ['Navy'], description: 'Warm padded jacket for cold weather.', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad2?w=600&h=600&fit=crop' },
    { name: 'Boys Track Pants', categoryId: 3, price: 499, discountPrice: 399, stock: 45, sku: 'KID-TP-006', gender: 'boys', material: 'Cotton Blend', sizes: ['4-5Y','6-7Y','8-9Y'], colors: ['Grey'], description: 'Stretchy track pants for sports and casual wear.', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad2?w=600&h=600&fit=crop' },
    { name: 'Basmati Rice 5kg', categoryId: 4, price: 450, discountPrice: 399, stock: 120, sku: 'GRC-RC-001', brand: 'India Gate', weight: '5kg', expiryDays: 365, description: 'Premium long grain basmati rice.', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop' },
    { name: 'Tata Salt 1kg', categoryId: 4, price: 30, discountPrice: 28, stock: 200, sku: 'GRC-SL-002', brand: 'Tata', weight: '1kg', expiryDays: 730, description: 'Iodized salt for everyday cooking.', img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop' },
    { name: 'Fortune Sunflower Oil 1L', categoryId: 4, price: 160, discountPrice: 145, stock: 85, sku: 'GRC-OL-003', brand: 'Fortune', weight: '1L', expiryDays: 365, description: 'Light and healthy sunflower oil.', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop' },
    { name: 'Amul Butter 500g', categoryId: 4, price: 275, discountPrice: 265, stock: 60, sku: 'GRC-BT-004', brand: 'Amul', weight: '500g', expiryDays: 90, description: 'Fresh Amul butter.', img: 'https://images.unsplash.com/photo-1589985270826-4b7bb1337a52?w=600&h=600&fit=crop' },
    { name: 'Maggi Noodles Pack of 12', categoryId: 4, price: 144, discountPrice: 132, stock: 150, sku: 'GRC-MG-005', brand: 'Maggi', weight: '12 x 70g', expiryDays: 270, description: 'Instant noodles ready in 2 minutes.', img: 'https://images.unsplash.com/photo-1612929632978-63d95b65d5d5?w=600&h=600&fit=crop' },
    { name: 'Britannia Marie Gold Biscuits 1kg', categoryId: 4, price: 120, discountPrice: 110, stock: 90, sku: 'GRC-BS-006', brand: 'Britannia', weight: '1kg', expiryDays: 180, description: 'Light and crispy Marie biscuits.', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop' },
    { name: 'Toor Dal 1kg', categoryId: 4, price: 160, discountPrice: 145, stock: 110, sku: 'GRC-DL-007', brand: 'Organic', weight: '1kg', expiryDays: 365, description: 'High quality toor dal (arhar).', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop' },
    { name: 'Nestle Everyday Dairy Whitener 400g', categoryId: 4, price: 210, discountPrice: 195, stock: 70, sku: 'GRC-DW-008', brand: 'Nestle', weight: '400g', expiryDays: 365, description: 'Dairy whitener for rich tea and coffee.', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop' }
  ];

  function slugify(t) {
    return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  const now = new Date();
  const products = templates.map((p, idx) => {
    let expiryDate = null;
    if (p.expiryDays) {
      const d = new Date(now);
      d.setDate(d.getDate() + p.expiryDays);
      expiryDate = d.toISOString().split('T')[0];
    }
    return {
      id: idx + 1,
      name: p.name,
      slug: slugify(p.name),
      sku: p.sku,
      categoryId: p.categoryId,
      description: p.description,
      price: p.price,
      discountPrice: p.discountPrice,
      stock: p.stock,
      reservedStock: 0,
      lowStockThreshold: 10,
      images: [p.img],
      status: 'active',
      gender: p.gender || null,
      material: p.material || null,
      sizes: p.sizes || [],
      colors: p.colors || [],
      brand: p.brand || null,
      weight: p.weight || null,
      expiryDate,
      rating: (4 + Math.random() * 0.9).toFixed(1),
      reviewCount: Math.floor(Math.random() * 180) + 20,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString()
    };
  });

  db = {
    users: [
      { id: 1, name: 'Admin User', email: 'admin@nexmart.com', password: hashPassword('admin123'), role: 'admin', phone: '9999999999', status: 'active', createdAt: now.toISOString() },
      { id: 2, name: 'Demo Customer', email: 'customer@nexmart.com', password: hashPassword('customer123'), role: 'customer', phone: '9876543210', status: 'active', createdAt: now.toISOString() }
    ],
    products,
    categories,
    carts: {},
    wishlists: {},
    orders: [],
    stockMovements: [],
    nextIds: { user: 3, product: products.length + 1, order: 1001, movement: 1 }
  };
  saveDb(db);
  console.log('✅ Database seeded');
  console.log('   Admin: admin@nexmart.com / admin123');
  console.log('   Customer: customer@nexmart.com / customer123');
  console.log('   Products:', products.length);
}

if (!db || !db.products || db.products.length === 0) {
  seed();
} else {
  // ensure passwords use new hash format if old bcrypt was used
  let changed = false;
  db.users.forEach(u => {
    if (!u.password.includes(':')) {
      if (u.email === 'admin@nexmart.com') u.password = hashPassword('admin123');
      if (u.email === 'customer@nexmart.com') u.password = hashPassword('customer123');
      changed = true;
    }
  });
  if (changed) saveDb(db);
}

// ---------- Helpers ----------
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; if (data.length > 1e6) req.destroy(); });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { resolve({}); }
    });
    req.on('error', reject);
  });
}

function send(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  });
  res.end(body);
}

function getUser(req) {
  const auth = req.headers.authorization || '';
  if (!auth.startsWith('Bearer ')) return null;
  const payload = verifyToken(auth.slice(7));
  if (!payload) return null;
  const user = db.users.find(u => u.id === payload.userId && u.status === 'active');
  if (!user) return null;
  return { id: user.id, email: user.email, name: user.name, role: user.role };
}

function enrichProduct(p) {
  const available = Math.max(0, (p.stock || 0) - (p.reservedStock || 0));
  const expired = p.expiryDate ? new Date(p.expiryDate) < new Date() : false;
  return {
    ...p,
    availableStock: available,
    isExpired: expired,
    isOutOfStock: available <= 0 || expired,
    isLowStock: available > 0 && available <= (p.lowStockThreshold || 10)
  };
}

// ---------- Router ----------
async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS'
    });
    return res.end();
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;
  const method = req.method;
  const q = Object.fromEntries(url.searchParams);

  try {
    // Health
    if (pathname === '/api/health' && method === 'GET') {
      return send(res, 200, { status: 'ok', products: db.products.length, orders: db.orders.length, users: db.users.length });
    }

    // ---- AUTH ----
    if (pathname === '/api/auth/register' && method === 'POST') {
      const body = await parseBody(req);
      if (!body.name || !body.email || !body.password) return send(res, 400, { error: 'Name, email and password required' });
      if (body.password.length < 6) return send(res, 400, { error: 'Password must be at least 6 characters' });
      if (db.users.find(u => u.email.toLowerCase() === body.email.toLowerCase())) return send(res, 400, { error: 'Email already registered' });
      const user = {
        id: db.nextIds.user++,
        name: body.name.trim(),
        email: body.email.toLowerCase().trim(),
        password: hashPassword(body.password),
        role: 'customer',
        phone: body.phone || '',
        status: 'active',
        createdAt: new Date().toISOString()
      };
      db.users.push(user);
      saveDb(db);
      const token = signToken({ userId: user.id, role: user.role });
      return send(res, 201, { token, user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone } });
    }

    if (pathname === '/api/auth/login' && method === 'POST') {
      const body = await parseBody(req);
      const user = db.users.find(u => u.email.toLowerCase() === (body.email || '').toLowerCase());
      if (!user || !verifyPassword(body.password || '', user.password)) return send(res, 401, { error: 'Invalid email or password' });
      if (user.status !== 'active') return send(res, 403, { error: 'Account inactive' });
      const token = signToken({ userId: user.id, role: user.role });
      return send(res, 200, { token, user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone } });
    }

    if (pathname === '/api/auth/me' && method === 'GET') {
      const user = getUser(req);
      if (!user) return send(res, 401, { error: 'Authentication required' });
      return send(res, 200, user);
    }

    // ---- CATEGORIES ----
    if (pathname === '/api/categories' && method === 'GET') {
      const cats = db.categories.map(c => ({
        ...c,
        productCount: db.products.filter(p => p.categoryId === c.id && p.status === 'active').length
      }));
      return send(res, 200, { categories: cats });
    }

    // ---- PRODUCTS ----
    if (pathname === '/api/products' && method === 'GET') {
      let products = db.products.map(enrichProduct);
      if (q.category) {
        const cat = db.categories.find(c => c.slug === q.category || String(c.id) === q.category);
        if (cat) products = products.filter(p => p.categoryId === cat.id);
      }
      if (q.search) {
        const s = q.search.toLowerCase();
        products = products.filter(p => p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
      }
      if (q.admin !== '1') products = products.filter(p => p.status === 'active' && !p.isExpired);
      if (q.status === 'low_stock') products = products.filter(p => p.isLowStock);
      if (q.status === 'out_of_stock') products = products.filter(p => p.isOutOfStock);
      if (q.status === 'expired') products = products.filter(p => p.isExpired);
      if (q.sort === 'price_asc') products.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
      if (q.sort === 'price_desc') products.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
      return send(res, 200, { products, total: products.length });
    }

    const productMatch = pathname.match(/^\/api\/products\/([^/]+)$/);
    if (productMatch && method === 'GET') {
      const key = productMatch[1];
      let product = db.products.find(p => p.slug === key || String(p.id) === key);
      if (!product) return send(res, 404, { error: 'Product not found' });
      product = enrichProduct(product);
      const category = db.categories.find(c => c.id === product.categoryId);
      return send(res, 200, { ...product, category });
    }

    // Admin create product
    if (pathname === '/api/products' && method === 'POST') {
      const user = getUser(req);
      if (!user || user.role !== 'admin') return send(res, 403, { error: 'Admin required' });
      const body = await parseBody(req);
      if (!body.name || !body.price || !body.categoryId) return send(res, 400, { error: 'Name, price, categoryId required' });
      const slug = (body.slug || body.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
        lowStockThreshold: 10,
        images: body.images && body.images.length ? body.images : [`https://picsum.photos/seed/${slug}/600/600`],
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
      saveDb(db);
      return send(res, 201, enrichProduct(product));
    }

    // Admin update product
    const productIdMatch = pathname.match(/^\/api\/products\/(\d+)$/);
    if (productIdMatch && method === 'PUT') {
      const user = getUser(req);
      if (!user || user.role !== 'admin') return send(res, 403, { error: 'Admin required' });
      const id = Number(productIdMatch[1]);
      const p = db.products.find(x => x.id === id);
      if (!p) return send(res, 404, { error: 'Product not found' });
      const body = await parseBody(req);
      ['name','description','price','discountPrice','stock','images','status','gender','material','sizes','colors','brand','weight','expiryDate','categoryId','sku','lowStockThreshold'].forEach(f => {
        if (body[f] !== undefined) p[f] = body[f];
      });
      p.updatedAt = new Date().toISOString();
      saveDb(db);
      return send(res, 200, enrichProduct(p));
    }

    // ---- CART ----
    if (pathname.startsWith('/api/cart')) {
      const user = getUser(req);
      if (!user) return send(res, 401, { error: 'Authentication required' });
      const key = String(user.id);
      if (!db.carts[key]) db.carts[key] = { items: [] };

      const enrichItems = (items) => items.map(item => {
        const product = db.products.find(p => p.id === item.productId);
        if (!product) return null;
        const available = Math.max(0, (product.stock || 0) - (product.reservedStock || 0));
        const price = product.discountPrice != null ? product.discountPrice : product.price;
        return {
          productId: product.id, name: product.name, slug: product.slug,
          image: (product.images && product.images[0]) || '',
          price, originalPrice: product.price, quantity: item.quantity,
          size: item.size || null, color: item.color || null,
          availableStock: available, lineTotal: price * item.quantity
        };
      }).filter(Boolean);

      if (pathname === '/api/cart' && method === 'GET') {
        const items = enrichItems(db.carts[key].items);
        const subtotal = items.reduce((s, i) => s + i.lineTotal, 0);
        return send(res, 200, { items, subtotal, itemCount: items.reduce((s, i) => s + i.quantity, 0) });
      }

      if (pathname === '/api/cart/items' && method === 'POST') {
        const body = await parseBody(req);
        const productId = Number(body.productId);
        const quantity = Number(body.quantity) || 1;
        const product = db.products.find(p => p.id === productId && p.status === 'active');
        if (!product) return send(res, 404, { error: 'Product not found' });
        if (product.expiryDate && new Date(product.expiryDate) < new Date()) return send(res, 400, { error: 'Product expired' });
        const available = Math.max(0, product.stock - (product.reservedStock || 0));
        if (quantity > available) return send(res, 400, { error: `Only ${available} available` });
        const cart = db.carts[key];
        const existing = cart.items.find(i => i.productId === productId && (i.size || null) === (body.size || null) && (i.color || null) === (body.color || null));
        if (existing) {
          if (existing.quantity + quantity > available) return send(res, 400, { error: `Only ${available} available` });
          existing.quantity += quantity;
        } else {
          cart.items.push({ productId, quantity, size: body.size || null, color: body.color || null });
        }
        saveDb(db);
        const items = enrichItems(cart.items);
        return send(res, 200, { items, subtotal: items.reduce((s, i) => s + i.lineTotal, 0), itemCount: items.reduce((s, i) => s + i.quantity, 0) });
      }

      const cartItemMatch = pathname.match(/^\/api\/cart\/items\/(\d+)$/);
      if (cartItemMatch && method === 'PUT') {
        const productId = Number(cartItemMatch[1]);
        const body = await parseBody(req);
        const cart = db.carts[key];
        const idx = cart.items.findIndex(i => i.productId === productId);
        if (idx === -1) return send(res, 404, { error: 'Item not in cart' });
        if (body.quantity === 0) cart.items.splice(idx, 1);
        else {
          const product = db.products.find(p => p.id === productId);
          const available = Math.max(0, product.stock - (product.reservedStock || 0));
          if (body.quantity > available) return send(res, 400, { error: `Only ${available} available` });
          cart.items[idx].quantity = body.quantity;
        }
        saveDb(db);
        const items = enrichItems(cart.items);
        return send(res, 200, { items, subtotal: items.reduce((s, i) => s + i.lineTotal, 0), itemCount: items.reduce((s, i) => s + i.quantity, 0) });
      }

      if (cartItemMatch && method === 'DELETE') {
        const productId = Number(cartItemMatch[1]);
        db.carts[key].items = db.carts[key].items.filter(i => i.productId !== productId);
        saveDb(db);
        const items = enrichItems(db.carts[key].items);
        return send(res, 200, { items, subtotal: items.reduce((s, i) => s + i.lineTotal, 0), itemCount: items.reduce((s, i) => s + i.quantity, 0) });
      }

      if (pathname === '/api/cart' && method === 'DELETE') {
        db.carts[key] = { items: [] };
        saveDb(db);
        return send(res, 200, { items: [], subtotal: 0, itemCount: 0 });
      }
    }

    // ---- WISHLIST ----
    if (pathname.startsWith('/api/wishlist')) {
      const user = getUser(req);
      if (!user) return send(res, 401, { error: 'Authentication required' });
      const key = String(user.id);
      if (!db.wishlists[key]) db.wishlists[key] = [];

      if (pathname === '/api/wishlist' && method === 'GET') {
        const products = db.wishlists[key].map(id => {
          const p = db.products.find(x => x.id === id && x.status === 'active');
          if (!p) return null;
          const available = Math.max(0, p.stock - (p.reservedStock || 0));
          return { id: p.id, name: p.name, slug: p.slug, price: p.price, discountPrice: p.discountPrice, image: (p.images && p.images[0]) || '', availableStock: available, isOutOfStock: available <= 0 };
        }).filter(Boolean);
        return send(res, 200, { items: products, count: products.length });
      }

      const wlMatch = pathname.match(/^\/api\/wishlist\/(\d+)$/);
      if (wlMatch && method === 'POST') {
        const productId = Number(wlMatch[1]);
        if (!db.products.find(p => p.id === productId)) return send(res, 404, { error: 'Product not found' });
        if (!db.wishlists[key].includes(productId)) db.wishlists[key].push(productId);
        saveDb(db);
        return send(res, 200, { message: 'Added', count: db.wishlists[key].length });
      }
      if (wlMatch && method === 'DELETE') {
        db.wishlists[key] = db.wishlists[key].filter(id => id !== Number(wlMatch[1]));
        saveDb(db);
        return send(res, 200, { message: 'Removed', count: db.wishlists[key].length });
      }
    }

    // ---- ORDERS ----
    if (pathname === '/api/orders' && method === 'POST') {
      const user = getUser(req);
      if (!user) return send(res, 401, { error: 'Authentication required' });
      const body = await parseBody(req);
      const address = body.address;
      if (!address || !address.fullName || !address.phone || !address.addressLine || !address.city || !address.state || !address.postalCode) {
        return send(res, 400, { error: 'Complete delivery address required' });
      }
      const key = String(user.id);
      const cart = db.carts[key];
      if (!cart || !cart.items.length) return send(res, 400, { error: 'Cart is empty' });

      const orderItems = [];
      let subtotal = 0;
      for (const item of cart.items) {
        const product = db.products.find(p => p.id === item.productId);
        if (!product || product.status !== 'active') return send(res, 400, { error: `Product unavailable` });
        if (product.expiryDate && new Date(product.expiryDate) < new Date()) return send(res, 400, { error: `${product.name} expired` });
        const available = Math.max(0, product.stock - (product.reservedStock || 0));
        if (item.quantity > available) return send(res, 400, { error: `Insufficient stock for ${product.name}` });
        const price = product.discountPrice != null ? product.discountPrice : product.price;
        orderItems.push({ productId: product.id, name: product.name, sku: product.sku, image: (product.images && product.images[0]) || '', price, quantity: item.quantity, size: item.size, color: item.color, lineTotal: price * item.quantity });
        subtotal += price * item.quantity;
      }

      // Deduct stock
      for (const item of cart.items) {
        const product = db.products.find(p => p.id === item.productId);
        const prev = product.stock;
        product.stock = Math.max(0, product.stock - item.quantity);
        product.updatedAt = new Date().toISOString();
        db.stockMovements.push({
          id: db.nextIds.movement++, productId: product.id, productName: product.name,
          previousQuantity: prev, change: -item.quantity, newQuantity: product.stock,
          reason: 'Order sale', adminId: null, adminName: 'System', orderId: null, timestamp: new Date().toISOString()
        });
      }

      const shipping = subtotal >= 999 ? 0 : 49;
      const total = subtotal + shipping;
      const order = {
        id: db.nextIds.order++,
        userId: user.id,
        customerName: address.fullName,
        customerEmail: user.email,
        items: orderItems,
        address: { ...address, country: address.country || 'India' },
        subtotal, shipping, total,
        paymentMethod: 'Test Payment (Mock)',
        paymentStatus: 'paid',
        status: 'confirmed',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      db.stockMovements.forEach(m => { if (m.orderId === null && m.reason === 'Order sale') m.orderId = order.id; });
      db.orders.push(order);
      db.carts[key] = { items: [] };
      saveDb(db);
      return send(res, 201, { message: 'Order placed successfully', order: { id: order.id, total: order.total, status: order.status, paymentStatus: order.paymentStatus, createdAt: order.createdAt, items: order.items, address: order.address } });
    }

    if (pathname === '/api/orders/my' && method === 'GET') {
      const user = getUser(req);
      if (!user) return send(res, 401, { error: 'Authentication required' });
      const orders = db.orders.filter(o => o.userId === user.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(o => ({ id: o.id, total: o.total, status: o.status, paymentStatus: o.paymentStatus, itemCount: o.items.reduce((s, i) => s + i.quantity, 0), createdAt: o.createdAt }));
      return send(res, 200, { orders });
    }

    const myOrderMatch = pathname.match(/^\/api\/orders\/my\/(\d+)$/);
    if (myOrderMatch && method === 'GET') {
      const user = getUser(req);
      if (!user) return send(res, 401, { error: 'Authentication required' });
      const order = db.orders.find(o => o.id === Number(myOrderMatch[1]) && o.userId === user.id);
      if (!order) return send(res, 404, { error: 'Order not found' });
      return send(res, 200, order);
    }

    // Admin orders
    if (pathname === '/api/orders' && method === 'GET') {
      const user = getUser(req);
      if (!user || user.role !== 'admin') return send(res, 403, { error: 'Admin required' });
      let orders = [...db.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      if (q.status) orders = orders.filter(o => o.status === q.status);
      return send(res, 200, {
        orders: orders.map(o => ({ id: o.id, customerName: o.customerName, customerEmail: o.customerEmail, total: o.total, status: o.status, paymentStatus: o.paymentStatus, itemCount: o.items.reduce((s, i) => s + i.quantity, 0), createdAt: o.createdAt })),
        total: orders.length
      });
    }

    const adminOrderMatch = pathname.match(/^\/api\/orders\/(\d+)$/);
    if (adminOrderMatch && method === 'GET') {
      const user = getUser(req);
      if (!user || user.role !== 'admin') return send(res, 403, { error: 'Admin required' });
      const order = db.orders.find(o => o.id === Number(adminOrderMatch[1]));
      if (!order) return send(res, 404, { error: 'Order not found' });
      return send(res, 200, order);
    }

    const statusMatch = pathname.match(/^\/api\/orders\/(\d+)\/status$/);
    if (statusMatch && method === 'PATCH') {
      const user = getUser(req);
      if (!user || user.role !== 'admin') return send(res, 403, { error: 'Admin required' });
      const body = await parseBody(req);
      const allowed = ['confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
      if (!allowed.includes(body.status)) return send(res, 400, { error: 'Invalid status' });
      const order = db.orders.find(o => o.id === Number(statusMatch[1]));
      if (!order) return send(res, 404, { error: 'Order not found' });
      if (order.status === 'delivered' || order.status === 'cancelled') return send(res, 400, { error: 'Cannot change final status' });
      order.status = body.status;
      order.updatedAt = new Date().toISOString();
      saveDb(db);
      return send(res, 200, { message: 'Status updated', order });
    }

    // ---- ADMIN ----
    if (pathname.startsWith('/api/admin')) {
      const user = getUser(req);
      if (!user || user.role !== 'admin') return send(res, 403, { error: 'Admin required' });

      if (pathname === '/api/admin/dashboard' && method === 'GET') {
        const products = db.products;
        const orders = db.orders;
        const customers = db.users.filter(u => u.role === 'customer');
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        let totalStock = 0, lowStock = 0, outOfStock = 0, expired = 0;
        products.forEach(p => {
          const avail = Math.max(0, p.stock - (p.reservedStock || 0));
          totalStock += avail;
          if (avail <= 0) outOfStock++;
          else if (avail <= (p.lowStockThreshold || 10)) lowStock++;
          if (p.expiryDate && new Date(p.expiryDate) < now) expired++;
        });
        const todayOrders = orders.filter(o => o.createdAt >= todayStart);
        const monthOrders = orders.filter(o => o.createdAt >= monthStart);
        return send(res, 200, {
          totalProducts: products.filter(p => p.status === 'active').length,
          totalStock, lowStock, outOfStock, expiredProducts: expired,
          totalOrders: orders.length,
          pendingOrders: orders.filter(o => ['confirmed', 'processing'].includes(o.status)).length,
          completedOrders: orders.filter(o => o.status === 'delivered').length,
          totalCustomers: customers.length,
          todaySales: todayOrders.reduce((s, o) => s + o.total, 0),
          monthlySales: monthOrders.reduce((s, o) => s + o.total, 0),
          totalSales: orders.reduce((s, o) => s + o.total, 0)
        });
      }

      if (pathname === '/api/admin/inventory' && method === 'GET') {
        const now = new Date();
        let list = db.products.map(p => {
          const available = Math.max(0, p.stock - (p.reservedStock || 0));
          const isExpired = p.expiryDate ? new Date(p.expiryDate) < now : false;
          let statusLabel = 'Active';
          if (p.status !== 'active') statusLabel = p.status;
          else if (isExpired) statusLabel = 'Expired';
          else if (available <= 0) statusLabel = 'Out of Stock';
          else if (available <= (p.lowStockThreshold || 10)) statusLabel = 'Low Stock';
          const cat = db.categories.find(c => c.id === p.categoryId);
          return { id: p.id, name: p.name, sku: p.sku, category: cat ? cat.name : '', stock: p.stock, reservedStock: p.reservedStock || 0, availableStock: available, lowStockThreshold: p.lowStockThreshold || 10, expiryDate: p.expiryDate, status: statusLabel, productStatus: p.status };
        });
        if (q.filter === 'low_stock') list = list.filter(i => i.status === 'Low Stock');
        if (q.filter === 'out_of_stock') list = list.filter(i => i.status === 'Out of Stock');
        if (q.filter === 'expired') list = list.filter(i => i.status === 'Expired');
        return send(res, 200, { inventory: list, total: list.length });
      }

      const adjustMatch = pathname.match(/^\/api\/admin\/inventory\/(\d+)\/adjust$/);
      if (adjustMatch && method === 'POST') {
        const body = await parseBody(req);
        const qty = Number(body.quantity);
        if (!qty || qty <= 0 || !body.reason || !['increase', 'decrease'].includes(body.type)) {
          return send(res, 400, { error: 'quantity > 0, reason, type (increase/decrease) required' });
        }
        const product = db.products.find(p => p.id === Number(adjustMatch[1]));
        if (!product) return send(res, 404, { error: 'Product not found' });
        const prev = product.stock;
        if (body.type === 'decrease') {
          if (qty > product.stock) return send(res, 400, { error: `Cannot decrease by ${qty}. Current: ${product.stock}` });
          product.stock -= qty;
        } else {
          product.stock += qty;
        }
        product.updatedAt = new Date().toISOString();
        db.stockMovements.push({
          id: db.nextIds.movement++, productId: product.id, productName: product.name,
          previousQuantity: prev, change: body.type === 'increase' ? qty : -qty, newQuantity: product.stock,
          reason: body.reason, adminId: user.id, adminName: user.name, orderId: null, timestamp: new Date().toISOString()
        });
        saveDb(db);
        return send(res, 200, { message: `Stock ${body.type}d`, product: { id: product.id, name: product.name, stock: product.stock } });
      }

      if (pathname === '/api/admin/inventory/movements' && method === 'GET') {
        let movements = [...db.stockMovements].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        if (q.productId) movements = movements.filter(m => m.productId === Number(q.productId));
        return send(res, 200, { movements: movements.slice(0, 100) });
      }

      if (pathname === '/api/admin/customers' && method === 'GET') {
        const customers = db.users.filter(u => u.role === 'customer').map(u => {
          const userOrders = db.orders.filter(o => o.userId === u.id);
          return { id: u.id, name: u.name, email: u.email, phone: u.phone || '', status: u.status, orderCount: userOrders.length, totalSpent: userOrders.reduce((s, o) => s + o.total, 0), registeredAt: u.createdAt };
        });
        return send(res, 200, { customers, total: customers.length });
      }

      if (pathname === '/api/admin/sales' && method === 'GET') {
        const orders = db.orders.filter(o => o.paymentStatus === 'paid');
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekStart = new Date(todayStart); weekStart.setDate(weekStart.getDate() - 7);
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const sum = list => list.reduce((s, o) => s + o.total, 0);
        const todayOrders = orders.filter(o => new Date(o.createdAt) >= todayStart);
        const weekOrders = orders.filter(o => new Date(o.createdAt) >= weekStart);
        const monthOrders = orders.filter(o => new Date(o.createdAt) >= monthStart);
        const productSales = {};
        orders.forEach(o => o.items.forEach(i => {
          if (!productSales[i.productId]) productSales[i.productId] = { productId: i.productId, name: i.name, quantity: 0, revenue: 0 };
          productSales[i.productId].quantity += i.quantity;
          productSales[i.productId].revenue += i.lineTotal;
        }));
        const topProducts = Object.values(productSales).sort((a, b) => b.revenue - a.revenue).slice(0, 10);
        const monthly = [];
        for (let i = 5; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const next = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
          const mOrders = orders.filter(o => { const t = new Date(o.createdAt); return t >= d && t < next; });
          monthly.push({ month: d.toLocaleString('default', { month: 'short', year: 'numeric' }), sales: sum(mOrders), orders: mOrders.length });
        }
        return send(res, 200, {
          todaySales: sum(todayOrders), todayOrders: todayOrders.length,
          weekSales: sum(weekOrders), weekOrders: weekOrders.length,
          monthSales: sum(monthOrders), monthOrders: monthOrders.length,
          totalSales: sum(orders), totalOrders: orders.length,
          averageOrderValue: orders.length ? Math.round(sum(orders) / orders.length) : 0,
          topProducts, monthlySales: monthly
        });
      }
    }

    send(res, 404, { error: 'Not found' });
  } catch (err) {
    console.error(err);
    send(res, 500, { error: 'Internal server error' });
  }
}

const server = http.createServer(handler);
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 NexMart API running at http://localhost:${PORT}`);
  console.log(`   Health:  http://localhost:${PORT}/api/health`);
  console.log(`   Admin:   admin@nexmart.com / admin123`);
  console.log(`   Customer: customer@nexmart.com / customer123\n`);
});
