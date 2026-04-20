import Package from '../models/Package.js';

// @desc    Get all packages (with filters)
// @route   GET /api/packages
export const getPackages = async (req, res) => {
  try {
    const {
      category,
      search,
      minPrice,
      maxPrice,
      sort,
      page = 1,
      limit = 12
    } = req.query;

    // Build query
    let query = { isActive: true };

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { 'medicines.name': { $regex: search, $options: 'i' } }
      ];
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Build sort
    let sortOption = { createdAt: -1 };
    if (sort === 'price_asc') sortOption = { price: 1 };
    if (sort === 'price_desc') sortOption = { price: -1 };
    if (sort === 'name') sortOption = { name: 1 };
    if (sort === 'popular') sortOption = { 'ratings.count': -1 };

    // Execute query with pagination
    const skip = (Number(page) - 1) * Number(limit);
    const packages = await Package.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    const total = await Package.countDocuments(query);

    res.json({
      success: true,
      count: packages.length,
      total,
      pages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
      packages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single package
// @route   GET /api/packages/:id
export const getPackage = async (req, res) => {
  try {
    const pkg = await Package.findOne({
      $or: [
        { _id: req.params.id },
        { slug: req.params.id }
      ],
      isActive: true
    });

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: 'Package not found'
      });
    }

    res.json({
      success: true,
      package: pkg
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get categories
// @route   GET /api/packages/categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Package.distinct('category', { isActive: true });
    res.json({
      success: true,
      categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get featured packages
// @route   GET /api/packages/featured
export const getFeaturedPackages = async (req, res) => {
  try {
    const packages = await Package.find({ 
      isActive: true,
      discountType: { $ne: 'none' }
    })
    .sort({ 'ratings.average': -1 })
    .limit(8);

    res.json({
      success: true,
      packages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ============ ADMIN CONTROLLERS ============

// @desc    Create package (Admin)
// @route   POST /api/admin/packages
export const createPackage = async (req, res) => {
  try {
    const pkg = await Package.create(req.body);
    res.status(201).json({
      success: true,
      package: pkg
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update package (Admin)
// @route   PUT /api/admin/packages/:id
export const updatePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: 'Package not found'
      });
    }

    res.json({
      success: true,
      package: pkg
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete package (Admin)
// @route   DELETE /api/admin/packages/:id
export const deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: 'Package not found'
      });
    }

    res.json({
      success: true,
      message: 'Package deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all packages for admin (including inactive)
// @route   GET /api/admin/packages
export const getAdminPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: packages.length,
      packages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
