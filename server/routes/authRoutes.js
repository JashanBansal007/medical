import express from 'express';
import passport from 'passport';
import {
  register,
  login,
  getMe,
  updateProfile,
  addAddress,
  deleteAddress,
  googleCallback
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
const clientLoginUrl = `${process.env.CLIENT_URL || 'http://localhost:5173'}/login?error=google_auth_failed`;

// Local auth routes
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.post('/address', protect, addAddress);
router.delete('/address/:addressId', protect, deleteAddress);

// Google OAuth routes
router.get('/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: clientLoginUrl }),
  googleCallback
);

export default router;
