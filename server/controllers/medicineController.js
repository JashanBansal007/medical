import Medicine from '../models/Medicine.js';
import Category from '../models/Category.js';
import { parse } from 'csv-parse/sync';
import { searchMedicines, getMedicineCount } from '../data/medicineDatabase.js';

// @desc    Get all medicines
// @route   GET /api/medicines
export const getAllMedicines = async (req, res) => {
  try {
    const { category, search, sort = '-createdAt' } = req.query;
    
    let query = { isActive: true };
    
    if (category) {
      const cat = await Category.findOne({ slug: category });
      if (cat) {
        query.category = cat._id;
      }
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { salts: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const medicines = await Medicine.find(query)
      .populate('category', 'name slug')
      .sort(sort);
    
    res.json({
      success: true,
      count: medicines.length,
      medicines
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single medicine
// @route   GET /api/medicines/:id
export const getMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findOne({
      $or: [
        { _id: req.params.id },
        { slug: req.params.id }
      ]
    }).populate('category', 'name slug');
    
    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: 'Medicine not found'
      });
    }
    
    res.json({
      success: true,
      medicine
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get medicines by category
// @route   GET /api/medicines/category/:categoryId
export const getMedicinesByCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      $or: [
        { _id: req.params.categoryId },
        { slug: req.params.categoryId }
      ]
    });
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    const medicines = await Medicine.find({ 
      category: category._id,
      isActive: true 
    }).populate('category', 'name slug');
    
    res.json({
      success: true,
      category,
      medicines
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create medicine (Admin)
// @route   POST /api/medicines
export const createMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);
    await medicine.populate('category', 'name slug');
    
    res.status(201).json({
      success: true,
      medicine
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update medicine (Admin)
// @route   PUT /api/medicines/:id
export const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('category', 'name slug');
    
    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: 'Medicine not found'
      });
    }
    
    res.json({
      success: true,
      medicine
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete medicine (Admin)
// @route   DELETE /api/medicines/:id
export const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    
    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: 'Medicine not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Medicine deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Bulk import medicines from CSV
// @route   POST /api/medicines/import
export const bulkImportMedicines = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a CSV file'
      });
    }

    const csvContent = req.file.buffer.toString('utf-8');
    
    // Parse CSV
    let records;
    try {
      records = parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
      });
    } catch (parseError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid CSV format: ' + parseError.message
      });
    }

    if (records.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'CSV file is empty'
      });
    }

    // Get all categories for mapping
    const categories = await Category.find({});
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.name.toLowerCase()] = cat._id;
      categoryMap[cat.slug.toLowerCase()] = cat._id;
    });

    const results = {
      success: [],
      errors: []
    };

    for (let i = 0; i < records.length; i++) {
      const row = records[i];
      const rowNum = i + 2; // +2 because row 1 is header, and we're 0-indexed

      try {
        // Validate required fields
        if (!row.name || !row.salts || !row.price || !row.category || !row.manufacturer || !row.description) {
          results.errors.push({
            row: rowNum,
            name: row.name || 'Unknown',
            error: 'Missing required fields (name, salts, price, category, manufacturer, description)'
          });
          continue;
        }

        // Find category
        const categoryKey = row.category.toLowerCase().trim();
        const categoryId = categoryMap[categoryKey];
        
        if (!categoryId) {
          results.errors.push({
            row: rowNum,
            name: row.name,
            error: `Category "${row.category}" not found. Available: ${categories.map(c => c.name).join(', ')}`
          });
          continue;
        }

        // Parse price
        const price = parseFloat(row.price);
        if (isNaN(price) || price < 0) {
          results.errors.push({
            row: rowNum,
            name: row.name,
            error: 'Invalid price value'
          });
          continue;
        }

        // Create medicine object
        const medicineData = {
          name: row.name.trim(),
          salts: row.salts.trim(),
          description: row.description?.trim() || '',
          dosage: row.dosage?.trim() || '',
          price: price,
          category: categoryId,
          manufacturer: row.manufacturer?.trim() || '',
          image: row.image?.trim() || '',
          stock: parseInt(row.stock) || 100,
          requiresPrescription: row.requiresPrescription?.toLowerCase() === 'true' || row.requiresPrescription === '1',
          isActive: row.isActive?.toLowerCase() !== 'false' && row.isActive !== '0',
          discountType: row.discountType || 'none',
          discountValue: parseFloat(row.discountValue) || 0
        };

        // Check for duplicate
        const existing = await Medicine.findOne({ 
          name: { $regex: new RegExp(`^${medicineData.name}$`, 'i') }
        });

        if (existing) {
          results.errors.push({
            row: rowNum,
            name: row.name,
            error: 'Medicine with this name already exists'
          });
          continue;
        }

        // Create medicine
        const medicine = await Medicine.create(medicineData);
        results.success.push({
          row: rowNum,
          name: medicine.name,
          id: medicine._id
        });

      } catch (error) {
        results.errors.push({
          row: rowNum,
          name: row.name || 'Unknown',
          error: error.message
        });
      }
    }

    res.json({
      success: true,
      message: `Import complete: ${results.success.length} added, ${results.errors.length} failed`,
      imported: results.success.length,
      failed: results.errors.length,
      results
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Download CSV template
// @route   GET /api/medicines/template
export const downloadTemplate = async (req, res) => {
  const categories = await Category.find({ isActive: true }).select('name');
  const categoryNames = categories.map(c => c.name).join(' | ');
  
  const template = `name,salts,price,category,manufacturer,dosage,description,stock,requiresPrescription,discountType,discountValue,image
Crocin 500,Paracetamol 500mg,2.99,Fever & Pain,GSK,1-2 tablets every 6 hours,For fever and mild pain,100,false,none,0,
Dolo 650,Paracetamol 650mg,3.49,Fever & Pain,Micro Labs,1 tablet every 8 hours,For fever and body ache,100,false,percentage,10,
"Your Medicine Name","Salt1 100mg, Salt2 50mg",9.99,"${categoryNames}",Manufacturer Name,Dosage instructions,Description here,100,false,none,0,https://image-url.jpg`;

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=medicine-import-template.csv');
  res.send(template);
};

// @desc    Search medicine reference database for autocomplete
// @route   GET /api/medicines/search-reference
export const searchMedicineReference = async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.length < 2) {
      return res.json({
        success: true,
        suggestions: [],
        totalInDatabase: getMedicineCount()
      });
    }
    
    const suggestions = searchMedicines(q, 10);
    
    res.json({
      success: true,
      suggestions,
      totalInDatabase: getMedicineCount()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
