import express from 'express';
import {
  getPackages,
  getPackage,
  getCategories,
  getFeaturedPackages
} from '../controllers/packageController.js';

const router = express.Router();

router.get('/', getPackages);
router.get('/categories', getCategories);
router.get('/featured', getFeaturedPackages);
router.get('/:id', getPackage);

export default router;
