import express from 'express';
import multer from 'multer';
import {
  getAllMedicines,
  getMedicine,
  getMedicinesByCategory,
  createMedicine,
  updateMedicine,
  deleteMedicine,
  bulkImportMedicines,
  downloadTemplate,
  searchMedicineReference
} from '../controllers/medicineController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// CSV upload config (memory storage for parsing)
const csvUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

router.get('/', getAllMedicines);
router.get('/template', downloadTemplate); // Download CSV template
router.get('/search-reference', protect, adminOnly, searchMedicineReference); // Autocomplete reference search
router.get('/category/:categoryId', getMedicinesByCategory);
router.get('/:id', getMedicine);

// Admin routes
router.post('/', protect, adminOnly, createMedicine);
router.post('/import', protect, adminOnly, csvUpload.single('file'), bulkImportMedicines);
router.put('/:id', protect, adminOnly, updateMedicine);
router.delete('/:id', protect, adminOnly, deleteMedicine);

export default router;
