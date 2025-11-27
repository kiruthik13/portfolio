import express from 'express';
import Timeline from '../models/Timeline.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get all milestones (public)
router.get('/', async (req, res) => {
  const milestones = await Timeline.find();
  res.json(milestones);
});

// Add milestone (admin only)
router.post('/', verifyToken, async (req, res) => {
  const milestone = new Timeline(req.body);
  await milestone.save();
  res.status(201).json(milestone);
});

// Update milestone (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  const milestone = await Timeline.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(milestone);
});

// Delete milestone (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  await Timeline.findByIdAndDelete(req.params.id);
  res.json({ message: 'Milestone deleted' });
});

export default router; 