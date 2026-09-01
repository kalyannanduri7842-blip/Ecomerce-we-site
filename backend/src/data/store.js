const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname);
const DB_FILE = path.join(DATA_DIR, 'db.json');

const defaultDb = {
  users: [],
  products: [],
  categories: [],
  carts: {},
  wishlists: {},
  orders: [],
  stockMovements: [],
  nextIds: { user: 1, product: 1, order: 1001, movement: 1 }
};

function loadDb() {
  try {
    if (fs.existsSync(DB_FILE)) {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Failed to load DB, using default', e.message);
  }
  return JSON.parse(JSON.stringify(defaultDb));
}

function saveDb(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

let db = loadDb();

module.exports = {
  getDb: () => db,
  saveDb: () => saveDb(db),
  reloadDb: () => { db = loadDb(); return db; },
  resetDb: () => { db = JSON.parse(JSON.stringify(defaultDb)); saveDb(db); return db; }
};
