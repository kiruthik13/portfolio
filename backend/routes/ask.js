import express from 'express';

const router = express.Router();

// POST /api/ask
router.post('/', async (req, res) => {
  const { question } = req.body;
  // TODO: Integrate with OpenAI API
  res.json({ answer: `You asked: ${question}. (AI response coming soon!)` });
});

export default router; 