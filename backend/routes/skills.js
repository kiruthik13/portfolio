import express from 'express';
import Skill from '../models/Skill.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get all skills (public)
router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// Add skill (admin only)
router.post('/', verifyToken, async (req, res) => {
  const skill = new Skill(req.body);
  await skill.save();
  res.status(201).json(skill);
});

export default router; 