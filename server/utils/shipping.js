// Fixed shipping fee requested: ₹3000
const FIXED_SHIPPING_INR = 3000;
const INR_PER_CAD = 62;

// Province delivery windows (days only, cost is fixed)
const shippingRates = {
  'ON': { estimatedDays: '7-10' },
  'QC': { estimatedDays: '7-10' },
  'BC': { estimatedDays: '10-14' },
  'AB': { estimatedDays: '10-12' },
  'MB': { estimatedDays: '8-12' },
  'SK': { estimatedDays: '8-12' },
  'NS': { estimatedDays: '10-14' },
  'NB': { estimatedDays: '10-14' },
  'NL': { estimatedDays: '12-16' },
  'PE': { estimatedDays: '12-16' },
  'NT': { estimatedDays: '14-21' },
  'YT': { estimatedDays: '14-21' },
  'NU': { estimatedDays: '21-28' }
};

// Province name to code mapping
const provinceNameToCode = {
  'ontario': 'ON',
  'quebec': 'QC',
  'british columbia': 'BC',
  'alberta': 'AB',
  'manitoba': 'MB',
  'saskatchewan': 'SK',
  'nova scotia': 'NS',
  'new brunswick': 'NB',
  'newfoundland and labrador': 'NL',
  'newfoundland': 'NL',
  'prince edward island': 'PE',
  'northwest territories': 'NT',
  'yukon': 'YT',
  'nunavut': 'NU'
};

export const calculateShipping = (province, itemCount = 1) => {
  // Normalize province input
  let provinceCode = province.toUpperCase();
  
  // Check if it's a full name
  if (provinceCode.length > 2) {
    provinceCode = provinceNameToCode[province.toLowerCase()] || 'ON';
  }

  const rate = shippingRates[provinceCode] || shippingRates['ON'];
  const shippingCostCAD = FIXED_SHIPPING_INR / INR_PER_CAD;

  return {
    cost: Math.round(shippingCostCAD * 100) / 100,
    costINR: FIXED_SHIPPING_INR,
    estimatedDays: rate.estimatedDays,
    currency: 'CAD'
  };
};

export const getEstimatedDelivery = (province) => {
  let provinceCode = province.toUpperCase();
  if (provinceCode.length > 2) {
    provinceCode = provinceNameToCode[province.toLowerCase()] || 'ON';
  }
  
  const rate = shippingRates[provinceCode] || shippingRates['ON'];
  return rate.estimatedDays + ' business days';
};
