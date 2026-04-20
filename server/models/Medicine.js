import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Medicine name is required'],
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  salts: {
    type: String,
    required: [true, 'Salt composition is required'],
    trim: true
  },
  dosage: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
  },
  manufacturer: {
    type: String,
    trim: true
  },
  requiresPrescription: {
    type: Boolean,
    default: false
  },
  stock: {
    type: Number,
    default: 100,
    min: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Generate slug before saving
medicineSchema.pre('save', function(next) {
  if (!this.slug || this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Calculate discounted price
medicineSchema.virtual('discountedPrice').get(function() {
  if (this.discountType === 'percentage') {
    return this.price - (this.price * this.discountValue / 100);
  } else if (this.discountType === 'flat') {
    return Math.max(0, this.price - this.discountValue);
  }
  return this.price;
});

medicineSchema.set('toJSON', { virtuals: true });
medicineSchema.set('toObject', { virtuals: true });

const Medicine = mongoose.model('Medicine', medicineSchema);
export default Medicine;
