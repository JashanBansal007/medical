import Category from '../models/Category.js';
import Medicine from '../models/Medicine.js';

// @desc    Get all categories
// @route   GET /api/categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });
    
    // Get medicine count for each category
    const categoriesWithCount = await Promise.all(
      categories.map(async (cat) => {
        const count = await Medicine.countDocuments({ 
          category: cat._id, 
          isActive: true 
        });
        return {
          ...cat.toObject(),
          medicineCount: count
        };
      })
    );
    
    res.json({
      success: true,
      categories: categoriesWithCount
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single category
// @route   GET /api/categories/:id
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      $or: [
        { _id: req.params.id },
        { slug: req.params.id }
      ]
    });
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    res.json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get category by slug
// @route   GET /api/categories/slug/:slug
export const getCategoryBySlug = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug, isActive: true });
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    res.json(category);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create category (Admin)
// @route   POST /api/categories
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    
    res.status(201).json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update category (Admin)
// @route   PUT /api/categories/:id
export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    res.json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete category (Admin)
// @route   DELETE /api/categories/:id
export const deleteCategory = async (req, res) => {
  try {
    // Check if category has medicines
    const medicineCount = await Medicine.countDocuments({ category: req.params.id });
    if (medicineCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete category with ${medicineCount} medicines. Remove medicines first.`
      });
    }
    
    const category = await Category.findByIdAndDelete(req.params.id);
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Category deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
