const express = require('express');
const bcrypt = require('bcryptjs');
const { getDb, saveDb } = require('../data/store');
const { signToken, auth } = require('../middleware/auth');

const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }
  const db = getDb();
  if (db.users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return res.status(400).json({ error: 'Email already registered' });
  }
  const user = {
    id: db.nextIds.user++,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: bcrypt.hashSync(password, 10),
    role: 'customer',
    phone: phone || '',
    status: 'active',
    createdAt: new Date().toISOString()
  };
  db.users.push(user);
  saveDb();
  const token = signToken(user);
  res.status(201).json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  const db = getDb();
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  if (user.status !== 'active') {
    return res.status(403).json({ error: 'Account is inactive' });
  }
  const token = signToken(user);
  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone }
  });
});

router.get('/me', auth(true), (req, res) => {
  const db = getDb();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone,
    createdAt: user.createdAt
  });
});

module.exports = router;
