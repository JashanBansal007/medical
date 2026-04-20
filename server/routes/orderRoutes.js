import express from 'express';
import {
  calculateShippingCost,
  createCheckoutSession,
  verifyPayment,
  getMyOrders,
  getOrder,
  trackOrder
} from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js';
import { uploadPrescription } from '../middleware/upload.js';

const router = express.Router();

// Public route for order tracking
router.get('/track/:orderNumber', trackOrder);

// Protected routes
router.use(protect);

router.post('/shipping', calculateShippingCost);
router.post('/checkout', createCheckoutSession);
router.post('/verify-payment', verifyPayment);
router.get('/', getMyOrders);
router.get('/:id', getOrder);

// Prescription upload
router.post('/upload-prescription', uploadPrescription.single('prescription'), (req, res) => {
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

export default router;
