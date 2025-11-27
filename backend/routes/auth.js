import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const router = express.Router();

// Register admin (only if no admin exists)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = await Admin.findOne();
  if (existing) return res.status(403).json({ message: 'Admin already exists' });
  const hash = await bcrypt.hash(password, 10);
  const admin = new Admin({ email, password: hash });
  await admin.save();
  res.json({ message: 'Admin registered' });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

export default router; 