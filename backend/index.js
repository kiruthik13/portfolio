import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import projectsRoutes from './routes/projects.js';
import timelineRoutes from './routes/timeline.js';
import skillsRoutes from './routes/skills.js';
import testimonialsRoutes from './routes/testimonials.js';
import contactRoutes from './routes/contact.js';
import askRoutes from './routes/ask.js';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file from backend directory FIRST
dotenv.config({ path: join(__dirname, '.env') });

// Verify environment variables are loaded
if (!process.env.MONGO_URI) {
  console.error('ERROR: MONGO_URI is not defined in .env file');
  console.error('Please create a .env file in the backend directory with MONGO_URI=mongodb://localhost:27017/portfolio');
  process.exit(1);
}

connectDB();

const app = express();

app.use(express.json());
const allowedOrigins = [
  'https://portfolio-kiruthik.vercel.app',
  'https://portfolio-amber-nine-c7ciranvuy.vercel.app',
  'https://portfolio-m8odomt8t-kiruthikbairavans-projects.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/timeline', timelineRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ask', askRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});