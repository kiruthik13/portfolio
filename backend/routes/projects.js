import express from 'express';
import Project from '../models/Project.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get all projects (public)
router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// Create project (admin only)
router.post('/', verifyToken, async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

// Update project (admin only)
router.put('/:id', verifyToken, async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});

// Delete project (admin only)
router.delete('/:id', verifyToken, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
});

export default router; 