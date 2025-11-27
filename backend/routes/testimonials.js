import express from 'express';
import Testimonial from '../models/Testimonial.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get all testimonials (public)
router.get('/', async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

// Add testimonial (admin only)
router.post('/', verifyToken, async (req, res) => {
  const testimonial = new Testimonial(req.body);
  await testimonial.save();
  res.status(201).json(testimonial);
});

// Update testimonial (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(testimonial);
});

// Delete testimonial (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: 'Testimonial deleted' });
});

export default router; 