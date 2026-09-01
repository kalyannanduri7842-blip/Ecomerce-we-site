const bcrypt = require('bcryptjs');
const { getDb, saveDb, resetDb } = require('./store');

const categories = [
  { id: 1, name: 'Men', slug: 'men', description: 'Men\'s Fashion' },
  { id: 2, name: 'Women', slug: 'women', description: 'Women\'s Fashion' },
  { id: 3, name: 'Kids', slug: 'kids', description: 'Kids Fashion' },
  { id: 4, name: 'Groceries', slug: 'groceries', description: 'Daily Groceries' }
];

const productTemplates = [
  // Men
  { name: 'Classic Black Cotton T-Shirt', categoryId: 1, price: 599, discountPrice: 449, stock: 45, sku: 'MEN-TS-001', gender: 'men', material: 'Cotton', sizes: ['S','M','L','XL'], colors: ['Black'], description: 'Premium soft cotton t-shirt with classic fit. Perfect for everyday wear.' },
  { name: 'Blue Slim Fit Jeans', categoryId: 1, price: 1499, discountPrice: 1199, stock: 32, sku: 'MEN-JN-002', gender: 'men', material: 'Denim', sizes: ['30','32','34','36'], colors: ['Blue'], description: 'Comfortable slim fit jeans with stretch denim. Modern look for casual and semi-formal occasions.' },
  { name: 'White Formal Shirt', categoryId: 1, price: 999, discountPrice: 799, stock: 28, sku: 'MEN-SH-003', gender: 'men', material: 'Cotton Blend', sizes: ['S','M','L','XL'], colors: ['White'], description: 'Crisp formal shirt ideal for office and meetings. Easy care fabric.' },
  { name: 'Grey Hooded Sweatshirt', categoryId: 1, price: 1299, discountPrice: 999, stock: 40, sku: 'MEN-HD-004', gender: 'men', material: 'Fleece', sizes: ['M','L','XL'], colors: ['Grey'], description: 'Warm and soft hoodie with front pocket. Perfect for winters and casual outings.' },
  { name: 'Black Casual Sneakers', categoryId: 1, price: 1999, discountPrice: 1599, stock: 22, sku: 'MEN-SN-005', gender: 'men', material: 'Synthetic', sizes: ['8','9','10','11'], colors: ['Black'], description: 'Lightweight casual sneakers with cushioned sole for all-day comfort.' },
  { name: 'Olive Cargo Pants', categoryId: 1, price: 1199, discountPrice: 899, stock: 18, sku: 'MEN-CP-006', gender: 'men', material: 'Cotton', sizes: ['30','32','34'], colors: ['Olive'], description: 'Utility cargo pants with multiple pockets. Rugged and stylish.' },
  { name: 'Navy Polo T-Shirt', categoryId: 1, price: 699, discountPrice: 549, stock: 50, sku: 'MEN-PL-007', gender: 'men', material: 'Cotton Pique', sizes: ['S','M','L','XL'], colors: ['Navy'], description: 'Classic polo with breathable fabric. Great for casual Fridays.' },
  { name: 'Brown Leather Belt', categoryId: 1, price: 499, discountPrice: 399, stock: 60, sku: 'MEN-BL-008', gender: 'men', material: 'Genuine Leather', sizes: ['32','34','36','38'], colors: ['Brown'], description: 'Genuine leather belt with classic buckle. Durable and elegant.' },

  // Women
  { name: 'Floral Summer Dress', categoryId: 2, price: 1299, discountPrice: 999, stock: 35, sku: 'WOM-DR-001', gender: 'women', material: 'Rayon', sizes: ['S','M','L'], colors: ['Floral Print'], description: 'Light and breezy floral dress perfect for summer outings and brunches.' },
  { name: 'High Waist Skinny Jeans', categoryId: 2, price: 1399, discountPrice: 1099, stock: 27, sku: 'WOM-JN-002', gender: 'women', material: 'Stretch Denim', sizes: ['26','28','30','32'], colors: ['Dark Blue'], description: 'Flattering high-waist skinny jeans with stretch for all-day comfort.' },
  { name: 'Pink Crop Top', categoryId: 2, price: 499, discountPrice: 399, stock: 42, sku: 'WOM-CT-003', gender: 'women', material: 'Cotton', sizes: ['S','M','L'], colors: ['Pink'], description: 'Trendy crop top for casual and party wear. Soft and stretchy.' },
  { name: 'Black Maxi Skirt', categoryId: 2, price: 899, discountPrice: 699, stock: 25, sku: 'WOM-SK-004', gender: 'women', material: 'Georgette', sizes: ['S','M','L'], colors: ['Black'], description: 'Elegant flowing maxi skirt suitable for office and evening events.' },
  { name: 'White Sneakers for Women', categoryId: 2, price: 1799, discountPrice: 1499, stock: 30, sku: 'WOM-SN-005', gender: 'women', material: 'Canvas', sizes: ['5','6','7','8'], colors: ['White'], description: 'Clean white sneakers that go with everything. Comfortable everyday footwear.' },
  { name: 'Red Kurti', categoryId: 2, price: 799, discountPrice: 599, stock: 38, sku: 'WOM-KU-006', gender: 'women', material: 'Cotton', sizes: ['S','M','L','XL'], colors: ['Red'], description: 'Traditional yet modern kurti with elegant embroidery. Perfect for festive occasions.' },
  { name: 'Beige Cardigan', categoryId: 2, price: 1099, discountPrice: 849, stock: 20, sku: 'WOM-CD-007', gender: 'women', material: 'Wool Blend', sizes: ['S','M','L'], colors: ['Beige'], description: 'Soft cardigan for layering. Warm and stylish for cooler weather.' },
  { name: 'Silver Hoop Earrings', categoryId: 2, price: 399, discountPrice: 299, stock: 80, sku: 'WOM-ER-008', gender: 'women', material: 'Alloy', sizes: ['One Size'], colors: ['Silver'], description: 'Classic silver hoop earrings. Lightweight and elegant.' },

  // Kids
  { name: 'Kids Cartoon T-Shirt', categoryId: 3, price: 399, discountPrice: 299, stock: 55, sku: 'KID-TS-001', gender: 'unisex', material: 'Cotton', sizes: ['2-3Y','4-5Y','6-7Y'], colors: ['Blue'], description: 'Fun cartoon printed t-shirt for kids. Soft and durable for daily play.' },
  { name: 'Boys Denim Shorts', categoryId: 3, price: 599, discountPrice: 449, stock: 33, sku: 'KID-SH-002', gender: 'boys', material: 'Denim', sizes: ['4-5Y','6-7Y','8-9Y'], colors: ['Blue'], description: 'Comfortable denim shorts for active boys. Easy to wash.' },
  { name: 'Girls Frock Dress', categoryId: 3, price: 699, discountPrice: 549, stock: 28, sku: 'KID-DR-003', gender: 'girls', material: 'Cotton', sizes: ['2-3Y','4-5Y','6-7Y'], colors: ['Pink'], description: 'Pretty frock with soft fabric. Ideal for parties and family gatherings.' },
  { name: 'Kids School Shoes', categoryId: 3, price: 899, discountPrice: 699, stock: 40, sku: 'KID-SH-004', gender: 'unisex', material: 'Synthetic', sizes: ['10','11','12','13'], colors: ['Black'], description: 'Durable school shoes with good grip and comfort for long hours.' },
  { name: 'Kids Winter Jacket', categoryId: 3, price: 1299, discountPrice: 999, stock: 15, sku: 'KID-JK-005', gender: 'unisex', material: 'Polyester', sizes: ['4-5Y','6-7Y','8-9Y'], colors: ['Navy'], description: 'Warm padded jacket for cold weather. Water resistant outer layer.' },
  { name: 'Boys Track Pants', categoryId: 3, price: 499, discountPrice: 399, stock: 45, sku: 'KID-TP-006', gender: 'boys', material: 'Cotton Blend', sizes: ['4-5Y','6-7Y','8-9Y'], colors: ['Grey'], description: 'Stretchy track pants for sports and casual wear.' },

  // Groceries
  { name: 'Basmati Rice 5kg', categoryId: 4, price: 450, discountPrice: 399, stock: 120, sku: 'GRC-RC-001', brand: 'India Gate', weight: '5kg', expiryDays: 365, description: 'Premium long grain basmati rice. Aromatic and perfect for biryani and daily meals.' },
  { name: 'Tata Salt 1kg', categoryId: 4, price: 30, discountPrice: 28, stock: 200, sku: 'GRC-SL-002', brand: 'Tata', weight: '1kg', expiryDays: 730, description: 'Iodized salt for everyday cooking. Trusted quality.' },
  { name: 'Fortune Sunflower Oil 1L', categoryId: 4, price: 160, discountPrice: 145, stock: 85, sku: 'GRC-OL-003', brand: 'Fortune', weight: '1L', expiryDays: 365, description: 'Light and healthy sunflower oil. Ideal for frying and cooking.' },
  { name: 'Amul Butter 500g', categoryId: 4, price: 275, discountPrice: 265, stock: 60, sku: 'GRC-BT-004', brand: 'Amul', weight: '500g', expiryDays: 90, description: 'Fresh Amul butter. Perfect for toast, cooking and baking.' },
  { name: 'Maggi Noodles Pack of 12', categoryId: 4, price: 144, discountPrice: 132, stock: 150, sku: 'GRC-MG-005', brand: 'Maggi', weight: '12 x 70g', expiryDays: 270, description: 'Instant noodles ready in 2 minutes. Family pack.' },
  { name: 'Britannia Marie Gold Biscuits 1kg', categoryId: 4, price: 120, discountPrice: 110, stock: 90, sku: 'GRC-BS-006', brand: 'Britannia', weight: '1kg', expiryDays: 180, description: 'Light and crispy Marie biscuits. Great with tea.' },
  { name: 'Toor Dal 1kg', categoryId: 4, price: 160, discountPrice: 145, stock: 110, sku: 'GRC-DL-007', brand: 'Organic', weight: '1kg', expiryDays: 365, description: 'High quality toor dal (arhar). Protein rich and nutritious.' },
  { name: 'Nestle Everyday Dairy Whitener 400g', categoryId: 4, price: 210, discountPrice: 195, stock: 70, sku: 'GRC-DW-008', brand: 'Nestle', weight: '400g', expiryDays: 365, description: 'Dairy whitener for rich tea and coffee.' }
];

// Reliable image URLs (Unsplash / placeholder that actually load)
const imageMap = {
  'MEN-TS-001': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
  'MEN-JN-002': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop',
  'MEN-SH-003': 'https://images.unsplash.com/photo-1596755094514-f87e34085b85?w=600&h=600&fit=crop',
  'MEN-HD-004': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
  'MEN-SN-005': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
  'MEN-CP-006': 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop',
  'MEN-PL-007': 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop',
  'MEN-BL-008': 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=600&h=600&fit=crop',
  'WOM-DR-001': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop',
  'WOM-JN-002': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop',
  'WOM-CT-003': 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=600&fit=crop',
  'WOM-SK-004': 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=600&fit=crop',
  'WOM-SN-005': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
  'WOM-KU-006': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=600&fit=crop',
  'WOM-CD-007': 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop',
  'WOM-ER-008': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
  'KID-TS-001': 'https://images.unsplash.com/photo-1503919545889-aef636e10ad2?w=600&h=600&fit=crop',
  'KID-SH-002': 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=600&fit=crop',
  'KID-DR-003': 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=600&fit=crop',
  'KID-SH-004': 'https://images.unsplash.com/photo-1514989940723-40d130a25d6e?w=600&h=600&fit=crop',
  'KID-JK-005': 'https://images.unsplash.com/photo-1503919545889-aef636e10ad2?w=600&h=600&fit=crop',
  'KID-TP-006': 'https://images.unsplash.com/photo-1503919545889-aef636e10ad2?w=600&h=600&fit=crop',
  'GRC-RC-001': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop',
  'GRC-SL-002': 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop',
  'GRC-OL-003': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=600&fit=crop',
  'GRC-BT-004': 'https://images.unsplash.com/photo-1589985270826-4b7bb1337a52?w=600&h=600&fit=crop',
  'GRC-MG-005': 'https://images.unsplash.com/photo-1612929632978-63d95b65d5d5?w=600&h=600&fit=crop',
  'GRC-BS-006': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop',
  'GRC-DL-007': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop',
  'GRC-DW-008': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop'
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function seed() {
  resetDb();
  const db = getDb();

  // Categories
  db.categories = categories;

  // Products
  const now = new Date();
  db.products = productTemplates.map((p, idx) => {
    const id = idx + 1;
    const slug = slugify(p.name);
    let expiryDate = null;
    if (p.expiryDays) {
      const d = new Date(now);
      d.setDate(d.getDate() + p.expiryDays);
      expiryDate = d.toISOString().split('T')[0];
    }
    return {
      id,
      name: p.name,
      slug,
      sku: p.sku,
      categoryId: p.categoryId,
      description: p.description,
      price: p.price,
      discountPrice: p.discountPrice,
      stock: p.stock,
      reservedStock: 0,
      lowStockThreshold: 10,
      images: [imageMap[p.sku] || `https://picsum.photos/seed/${p.sku}/600/600`],
      status: 'active',
      gender: p.gender || null,
      material: p.material || null,
      sizes: p.sizes || [],
      colors: p.colors || [],
      brand: p.brand || null,
      weight: p.weight || null,
      expiryDate,
      rating: (4 + Math.random()).toFixed(1),
      reviewCount: Math.floor(Math.random() * 200) + 10,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString()
    };
  });
  db.nextIds.product = db.products.length + 1;

  // Users
  const adminHash = bcrypt.hashSync('admin123', 10);
  const customerHash = bcrypt.hashSync('customer123', 10);

  db.users = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@nexmart.com',
      password: adminHash,
      role: 'admin',
      phone: '9999999999',
      status: 'active',
      createdAt: now.toISOString()
    },
    {
      id: 2,
      name: 'Demo Customer',
      email: 'customer@nexmart.com',
      password: customerHash,
      role: 'customer',
      phone: '9876543210',
      status: 'active',
      createdAt: now.toISOString()
    }
  ];
  db.nextIds.user = 3;

  db.carts = {};
  db.wishlists = {};
  db.orders = [];
  db.stockMovements = [];

  saveDb();
  console.log('✅ Database seeded successfully');
  console.log('   Admin: admin@nexmart.com / admin123');
  console.log('   Customer: customer@nexmart.com / customer123');
  console.log(`   Products: ${db.products.length}`);
  return db;
}

if (require.main === module) {
  seed();
}

module.exports = { seed };
