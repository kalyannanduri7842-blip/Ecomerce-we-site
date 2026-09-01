const jwt = require('jsonwebtoken');
const { getDb } = require('../data/store');

const JWT_SECRET = process.env.JWT_SECRET || 'nexmart-dev-secret-key-change-in-production';

function auth(required = true) {
  return (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
      if (required) return res.status(401).json({ error: 'Authentication required' });
      req.user = null;
      return next();
    }
    try {
      const token = header.slice(7);
      const payload = jwt.verify(token, JWT_SECRET);
      const db = getDb();
      const user = db.users.find(u => u.id === payload.userId && u.status === 'active');
      if (!user) {
        if (required) return res.status(401).json({ error: 'User not found or inactive' });
        req.user = null;
        return next();
      }
      req.user = { id: user.id, email: user.email, name: user.name, role: user.role };
      next();
    } catch (e) {
      if (required) return res.status(401).json({ error: 'Invalid or expired token' });
      req.user = null;
      next();
    }
  };
}

function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

function signToken(user) {
  return jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

module.exports = { auth, adminOnly, signToken, JWT_SECRET };
