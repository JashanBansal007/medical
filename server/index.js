import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import passport from 'passport';
import connectDB from './config/db.js';
import setupPassport from './config/passport.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import packageRoutes from './routes/packageRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import medicineRoutes from './routes/medicineRoutes.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Setup Passport
setupPassport();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parseAllowedOrigins = () => {
  const clientUrls = process.env.CLIENT_URLS
    ? process.env.CLIENT_URLS.split(',').map(url => url.trim()).filter(Boolean)
    : [];
  const fallbackClientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
  const merged = [...clientUrls, fallbackClientUrl];
  return Array.from(new Set(merged));
};

const allowedOrigins = parseAllowedOrigins();

// Middleware
app.set('trust proxy', 1);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'DesiMeds Canada API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong!'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   🏥 DesiMeds Canada Server                           ║
║   Running on port ${PORT}                               ║
║   Environment: ${process.env.NODE_ENV || 'development'}                        ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
  `);
});
