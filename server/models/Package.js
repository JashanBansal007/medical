import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String }
});

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Package name is required'],
    trim: true,
    maxlength: [100, 'Package name cannot exceed 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Package description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  medicines: [medicineSchema],
  ingredients: {
    type: String,
    required: true
  },
  usageInstructions: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  discountType: {
    type: String,
    enum: ['none', 'percentage', 'flat'],
    default: 'none'
  },
  discountValue: {
    type: Number,
    default: 0,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Diabetes Care',
      'Heart Health',
      'Digestive Health',
      'Pain Relief',
      'Immunity Boosters',
      'Skin Care',
      'Hair Care',
      'Women Health',
      'Men Health',
      'General Wellness',
      'Ayurvedic',
      'Respiratory Care',
      'Eye Care',
      'Bone & Joint',
      'Mental Wellness'
    ]
  },
  healthConditions: [{
    type: String
  }],
  images: [{
    type: String
  }],
  requiresPrescription: {
    type: Boolean,
    default: false
  },
  expiryInfo: {
    type: String,
    default: 'Minimum 12 months from dispatch'
  },
  stock: {
    type: Number,
    required: true,
    default: 100,
    min: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Generate slug before saving
packageSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  this.updatedAt = Date.now();
  next();
});

// Virtual for discounted price
packageSchema.virtual('discountedPrice').get(function() {
  if (this.discountType === 'percentage') {
    return this.price - (this.price * this.discountValue / 100);
  } else if (this.discountType === 'flat') {
    return Math.max(0, this.price - this.discountValue);
  }
  return this.price;
});

// Ensure virtuals are included in JSON output
packageSchema.set('toJSON', { virtuals: true });
packageSchema.set('toObject', { virtuals: true });

const Package = mongoose.model('Package', packageSchema);
export default Package;
