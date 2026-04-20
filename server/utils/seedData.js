import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Package from '../models/Package.js';
import Category from '../models/Category.js';
import Medicine from '../models/Medicine.js';
import Cart from '../models/Cart.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Package.deleteMany({});
    await Category.deleteMany({});
    await Medicine.deleteMany({});
    await Cart.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user (password will be hashed by User model pre-save hook)
    const admin = await User.create({
      name: 'Kapil Bansal',
      email: 'kapilbansal333@gmail.com',
      password: '@Kapil1',
      role: 'admin',
      phone: '+1-555-0100'
    });
    console.log('Admin user created: kapilbansal333@gmail.com');

    // Create demo user
    const user = await User.create({
      name: 'Rajesh Kumar',
      email: 'demo@example.com',
      password: 'User@123',
      phone: '+1-416-555-0123',
      addresses: [{
        fullName: 'Rajesh Kumar',
        phone: '+1-416-555-0123',
        street: '123 Maple Street, Unit 4',
        city: 'Toronto',
        province: 'ON',
        postalCode: 'M5V 2T6',
        country: 'Canada',
        isDefault: true
      }]
    });
    await Cart.create({ user: user._id, items: [] });
    console.log('Demo user created: demo@example.com / User@123');

    // Create Categories
    const categories = await Category.create([
      {
        name: 'Bone & Joint',
        description: 'Medicines for joint pain, arthritis, and bone health',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
        icon: '🦴'
      },
      {
        name: 'Diabetes Care',
        description: 'Medicines for diabetes management and blood sugar control',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
        icon: '💉'
      },
      {
        name: 'Heart Health',
        description: 'Medicines for cardiovascular health and blood pressure',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop',
        icon: '❤️'
      },
      {
        name: 'Hair Care',
        description: 'Medicines for hair growth and hair fall prevention',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
        icon: '💇'
      },
      {
        name: 'Digestive Health',
        description: 'Medicines for stomach, liver and digestive issues',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop',
        icon: '🫃'
      },
      {
        name: 'Mental Wellness',
        description: 'Medicines for anxiety, stress, and mental health',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop',
        icon: '🧠'
      }
    ]);
    console.log('6 categories created');

    // Get category IDs
    const boneJoint = categories.find(c => c.name === 'Bone & Joint')._id;
    const diabetes = categories.find(c => c.name === 'Diabetes Care')._id;
    const heart = categories.find(c => c.name === 'Heart Health')._id;
    const hairCare = categories.find(c => c.name === 'Hair Care')._id;
    const digestive = categories.find(c => c.name === 'Digestive Health')._id;
    const mental = categories.find(c => c.name === 'Mental Wellness')._id;

    // Create Medicines
    const medicines = await Medicine.create([
      // Bone & Joint Medicines
      {
        name: 'Glucosamine + Chondroitin',
        salts: 'Glucosamine Sulfate 500mg, Chondroitin Sulfate 400mg',
        description: 'Supports joint cartilage health and flexibility',
        dosage: '1 tablet twice daily with meals',
        price: 15.99,
        category: boneJoint,
        manufacturer: 'Himalaya Wellness',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Calcium + Vitamin D3',
        salts: 'Calcium Carbonate 500mg, Vitamin D3 400IU',
        description: 'Essential for bone strength and density',
        dosage: '1 tablet daily after breakfast',
        price: 8.99,
        category: boneJoint,
        manufacturer: 'Shelcal',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Boswellia Serrata Extract',
        salts: 'Boswellia Serrata Extract 250mg (65% Boswellic Acids)',
        description: 'Natural anti-inflammatory for joint pain relief',
        dosage: '1 capsule twice daily',
        price: 12.49,
        category: boneJoint,
        manufacturer: 'Himalaya',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Mahanarayan Oil 100ml',
        salts: 'Til Oil, Ashwagandha, Shatavari, Bala, Devdaru, Manjistha',
        description: 'Ayurvedic massage oil for joint and muscle pain',
        dosage: 'Apply warm oil and massage on affected area',
        price: 9.99,
        category: boneJoint,
        manufacturer: 'Dabur',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Vitamin D3 60000IU',
        salts: 'Cholecalciferol 60000IU',
        description: 'High-dose vitamin D for bone health',
        dosage: '1 sachet weekly',
        price: 4.99,
        discountType: 'percentage',
        discountValue: 10,
        category: boneJoint,
        manufacturer: 'USV Limited',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      
      // Diabetes Care Medicines
      {
        name: 'Metformin 500mg',
        salts: 'Metformin Hydrochloride 500mg',
        description: 'First-line medication for type 2 diabetes',
        dosage: '1 tablet twice daily with meals',
        price: 5.99,
        category: diabetes,
        manufacturer: 'USV Limited',
        requiresPrescription: true,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Glimepiride 2mg',
        salts: 'Glimepiride 2mg',
        description: 'Stimulates insulin production from pancreas',
        dosage: '1 tablet once daily before breakfast',
        price: 7.49,
        category: diabetes,
        manufacturer: 'Sanofi',
        requiresPrescription: true,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Chromium Picolinate',
        salts: 'Chromium Picolinate 200mcg',
        description: 'Mineral supplement that supports insulin sensitivity',
        dosage: '1 tablet daily with meal',
        price: 6.99,
        category: diabetes,
        manufacturer: 'HealthKart',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      
      // Heart Health Medicines
      {
        name: 'Aspirin 75mg',
        salts: 'Acetylsalicylic Acid 75mg',
        description: 'Blood thinner to prevent heart attacks and strokes',
        dosage: '1 tablet daily',
        price: 3.49,
        category: heart,
        manufacturer: 'USV Limited',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Atorvastatin 10mg',
        salts: 'Atorvastatin Calcium 10mg',
        description: 'Lowers cholesterol and reduces heart disease risk',
        dosage: '1 tablet at bedtime',
        price: 8.99,
        category: heart,
        manufacturer: 'Pfizer',
        requiresPrescription: true,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Arjuna Capsules',
        salts: 'Terminalia Arjuna Bark Extract 500mg',
        description: 'Ayurvedic herb for heart health and blood pressure',
        dosage: '1 capsule twice daily',
        price: 11.99,
        category: heart,
        manufacturer: 'Himalaya',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      
      // Hair Care Medicines
      {
        name: 'Minoxidil 5% Solution',
        salts: 'Minoxidil 5% w/v',
        description: 'FDA approved treatment for hair regrowth',
        dosage: 'Apply 1ml to scalp twice daily',
        price: 14.99,
        category: hairCare,
        manufacturer: 'Dr Reddys',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Biotin 10000mcg',
        salts: 'Biotin (Vitamin B7) 10000mcg',
        description: 'Supports hair growth and strength',
        dosage: '1 tablet daily',
        price: 9.99,
        category: hairCare,
        manufacturer: 'HealthKart',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Finasteride 1mg',
        salts: 'Finasteride 1mg',
        description: 'Prescription medication for male pattern baldness',
        dosage: '1 tablet daily',
        price: 18.99,
        category: hairCare,
        manufacturer: 'Cipla',
        requiresPrescription: true,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      
      // Digestive Health Medicines
      {
        name: 'Pantoprazole 40mg',
        salts: 'Pantoprazole Sodium 40mg',
        description: 'Reduces stomach acid for acidity and ulcers',
        dosage: '1 tablet before breakfast',
        price: 6.49,
        category: digestive,
        manufacturer: 'Sun Pharma',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Triphala Churna',
        salts: 'Amalaki, Bibhitaki, Haritaki (Equal parts)',
        description: 'Ayurvedic digestive cleanser and detoxifier',
        dosage: '1 teaspoon with warm water at bedtime',
        price: 7.99,
        category: digestive,
        manufacturer: 'Dabur',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Liv.52 Tablets',
        salts: 'Himsra, Kasani, Mandur Bhasma, Kakamachi',
        description: 'Herbal liver protector and detoxifier',
        dosage: '2 tablets twice daily',
        price: 8.99,
        category: digestive,
        manufacturer: 'Himalaya',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      
      // Mental Wellness Medicines
      {
        name: 'Ashwagandha Extract',
        salts: 'Withania Somnifera Root Extract 500mg (5% Withanolides)',
        description: 'Adaptogen for stress relief and energy',
        dosage: '1 capsule twice daily',
        price: 12.99,
        category: mental,
        manufacturer: 'Himalaya',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Brahmi Capsules',
        salts: 'Bacopa Monnieri Extract 300mg (50% Bacosides)',
        description: 'Enhances memory and cognitive function',
        dosage: '1 capsule twice daily',
        price: 10.99,
        category: mental,
        manufacturer: 'Himalaya',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      },
      {
        name: 'Melatonin 3mg',
        salts: 'Melatonin 3mg',
        description: 'Natural sleep aid for insomnia',
        dosage: '1 tablet 30 minutes before bedtime',
        price: 8.49,
        category: mental,
        manufacturer: 'HealthKart',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'
      }
    ]);
    console.log(`${medicines.length} medicines created`);

    console.log('\n✅ Seed data loaded successfully!');
    console.log('📋 Login Credentials:');
    console.log('   Admin: kapilbansal333@gmail.com / @Kapil1');
    console.log('   User:  demo@example.com / User@123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
