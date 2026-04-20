import express from 'express';
import {
  createPackage,
  updatePackage,
  deletePackage,
  getAdminPackages
} from '../controllers/packageController.js';
import {
  getAllOrders,
  updateOrderStatus,
  getDashboardStats
} from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/auth.js';
import { uploadPackageImages } from '../middleware/upload.js';
import User from '../models/User.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect, adminOnly);

// Dashboard
router.get('/stats', getDashboardStats);

// Package management
router.get('/packages', getAdminPackages);
router.post('/packages', createPackage);
router.put('/packages/:id', updatePackage);
router.delete('/packages/:id', deletePackage);

// Image upload for packages
router.post('/upload-image', uploadPackageImages.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'No file uploaded'
    });
  }
  res.json({
    success: true,
    url: `/uploads/${req.file.filename}`
  });
});

// Order management
router.get('/orders', getAllOrders);
router.put('/orders/:id', updateOrderStatus);

// Get all users (for admin)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({ role: 'user' })
      .select('-password')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
