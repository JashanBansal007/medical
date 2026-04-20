/**
 * Indian Medicine Reference Database
 * Contains comprehensive list of common Indian medicines with all details
 * Used for autocomplete/autofill feature in admin panel
 */

const medicineDatabase = [
  // ==================== ANTIBIOTICS ====================
  {
    name: "Azithromycin 500mg",
    salts: "Azithromycin 500mg",
    manufacturer: "Cipla Ltd",
    description: "Macrolide antibiotic used to treat various bacterial infections including respiratory tract infections, skin infections, and ear infections.",
    dosage: "1 tablet daily for 3-5 days as prescribed",
    category: "Antibiotics",
    sideEffects: "Nausea, diarrhea, stomach pain, headache",
    suggestedPrice: 85
  },
  {
    name: "Amoxicillin 500mg",
    salts: "Amoxicillin Trihydrate 500mg",
    manufacturer: "Cipla Ltd",
    description: "Penicillin-type antibiotic used to treat a wide variety of bacterial infections including chest infections, ear infections, and urinary tract infections.",
    dosage: "1 capsule 3 times daily for 5-7 days",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, skin rash",
    suggestedPrice: 45
  },
  {
    name: "Ciprofloxacin 500mg",
    salts: "Ciprofloxacin Hydrochloride 500mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "Fluoroquinolone antibiotic used to treat urinary tract infections, respiratory infections, and skin infections.",
    dosage: "1 tablet twice daily for 7-14 days",
    category: "Antibiotics",
    sideEffects: "Nausea, diarrhea, dizziness, headache",
    suggestedPrice: 65
  },
  {
    name: "Cefixime 200mg",
    salts: "Cefixime 200mg",
    manufacturer: "Mankind Pharma",
    description: "Third-generation cephalosporin antibiotic for respiratory and urinary tract infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, abdominal pain",
    suggestedPrice: 110
  },
  {
    name: "Cefpodoxime 200mg",
    salts: "Cefpodoxime Proxetil 200mg",
    manufacturer: "Lupin Ltd",
    description: "Cephalosporin antibiotic for treating bacterial infections of respiratory tract and skin.",
    dosage: "1 tablet twice daily with food",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, headache",
    suggestedPrice: 145
  },
  {
    name: "Doxycycline 100mg",
    salts: "Doxycycline Hyclate 100mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Tetracycline antibiotic for acne, respiratory infections, and bacterial infections.",
    dosage: "1 capsule twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, photosensitivity, stomach upset",
    suggestedPrice: 55
  },
  {
    name: "Levofloxacin 500mg",
    salts: "Levofloxacin Hemihydrate 500mg",
    manufacturer: "Cipla Ltd",
    description: "Fluoroquinolone antibiotic for respiratory and urinary tract infections.",
    dosage: "1 tablet once daily",
    category: "Antibiotics",
    sideEffects: "Headache, nausea, diarrhea",
    suggestedPrice: 95
  },
  {
    name: "Augmentin 625",
    salts: "Amoxicillin 500mg + Clavulanic Acid 125mg",
    manufacturer: "GlaxoSmithKline",
    description: "Combination antibiotic effective against beta-lactamase producing bacteria.",
    dosage: "1 tablet twice daily with meals",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, skin rash",
    suggestedPrice: 185
  },
  {
    name: "Ofloxacin 200mg",
    salts: "Ofloxacin 200mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "Fluoroquinolone antibiotic for bacterial infections of skin, lungs, and urinary tract.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Headache, dizziness, nausea",
    suggestedPrice: 65
  },
  {
    name: "Metronidazole 400mg",
    salts: "Metronidazole 400mg",
    manufacturer: "Abbott India",
    description: "Antibiotic and antiprotozoal medication for infections of stomach, skin, joints, and respiratory tract.",
    dosage: "1 tablet three times daily",
    category: "Antibiotics",
    sideEffects: "Nausea, metallic taste, headache",
    suggestedPrice: 35
  },
  {
    name: "Norfloxacin 400mg",
    salts: "Norfloxacin 400mg",
    manufacturer: "Cipla Ltd",
    description: "Fluoroquinolone antibiotic primarily used for urinary tract infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, headache, dizziness",
    suggestedPrice: 55
  },
  {
    name: "Clarithromycin 500mg",
    salts: "Clarithromycin 500mg",
    manufacturer: "Abbott India",
    description: "Macrolide antibiotic for respiratory infections, skin infections, and H. pylori eradication.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, diarrhea, abnormal taste",
    suggestedPrice: 145
  },
  {
    name: "Roxithromycin 150mg",
    salts: "Roxithromycin 150mg",
    manufacturer: "Alkem Laboratories",
    description: "Macrolide antibiotic for respiratory and soft tissue infections.",
    dosage: "1 tablet twice daily before meals",
    category: "Antibiotics",
    sideEffects: "Nausea, abdominal pain, diarrhea",
    suggestedPrice: 85
  },
  {
    name: "Tinidazole 500mg",
    salts: "Tinidazole 500mg",
    manufacturer: "Pfizer Ltd",
    description: "Antiprotozoal and antibacterial agent for amoebic infections and giardiasis.",
    dosage: "4 tablets as single dose",
    category: "Antibiotics",
    sideEffects: "Nausea, metallic taste, headache",
    suggestedPrice: 45
  },
  {
    name: "Cefuroxime 500mg",
    salts: "Cefuroxime Axetil 500mg",
    manufacturer: "GlaxoSmithKline",
    description: "Second-generation cephalosporin antibiotic for various bacterial infections.",
    dosage: "1 tablet twice daily with food",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, headache",
    suggestedPrice: 175
  },

  // ==================== DIABETES CARE ====================
  {
    name: "Metformin 500mg",
    salts: "Metformin Hydrochloride 500mg",
    manufacturer: "USV Private Limited",
    description: "First-line medication for type 2 diabetes that helps control blood sugar levels by reducing glucose production in liver.",
    dosage: "1-2 tablets with meals, twice daily",
    category: "Diabetes Care",
    sideEffects: "Nausea, diarrhea, stomach upset, metallic taste",
    suggestedPrice: 25
  },
  {
    name: "Metformin 850mg",
    salts: "Metformin Hydrochloride 850mg",
    manufacturer: "USV Private Limited",
    description: "Higher strength metformin for better glycemic control in type 2 diabetes.",
    dosage: "1 tablet with meals, twice daily",
    category: "Diabetes Care",
    sideEffects: "Nausea, diarrhea, stomach upset",
    suggestedPrice: 35
  },
  {
    name: "Metformin 1000mg",
    salts: "Metformin Hydrochloride 1000mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Maximum strength metformin for optimal blood sugar control.",
    dosage: "1 tablet with meals, twice daily",
    category: "Diabetes Care",
    sideEffects: "Nausea, diarrhea, bloating",
    suggestedPrice: 45
  },
  {
    name: "Glimepiride 1mg",
    salts: "Glimepiride 1mg",
    manufacturer: "Sanofi India",
    description: "Sulfonylurea that stimulates insulin release from pancreas for type 2 diabetes control.",
    dosage: "1 tablet once daily with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain, headache",
    suggestedPrice: 45
  },
  {
    name: "Glimepiride 2mg",
    salts: "Glimepiride 2mg",
    manufacturer: "Sanofi India",
    description: "Medium strength sulfonylurea for type 2 diabetes management.",
    dosage: "1 tablet once daily with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain, dizziness",
    suggestedPrice: 65
  },
  {
    name: "Gliclazide 80mg",
    salts: "Gliclazide 80mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Sulfonylurea antidiabetic drug that helps control blood sugar levels.",
    dosage: "1 tablet once or twice daily with meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, nausea, weight gain",
    suggestedPrice: 55
  },
  {
    name: "Sitagliptin 100mg",
    salts: "Sitagliptin Phosphate 100mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "DPP-4 inhibitor that helps lower blood sugar by increasing insulin when needed.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Headache, nasopharyngitis, upper respiratory infection",
    suggestedPrice: 285
  },
  {
    name: "Vildagliptin 50mg",
    salts: "Vildagliptin 50mg",
    manufacturer: "Novartis India",
    description: "DPP-4 inhibitor for type 2 diabetes, improves glycemic control.",
    dosage: "1 tablet twice daily",
    category: "Diabetes Care",
    sideEffects: "Headache, dizziness, tremor",
    suggestedPrice: 195
  },
  {
    name: "Pioglitazone 15mg",
    salts: "Pioglitazone Hydrochloride 15mg",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Thiazolidinedione that improves insulin sensitivity in type 2 diabetes.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Weight gain, edema, fracture risk",
    suggestedPrice: 65
  },
  {
    name: "Empagliflozin 10mg",
    salts: "Empagliflozin 10mg",
    manufacturer: "Boehringer Ingelheim",
    description: "SGLT2 inhibitor that helps excrete excess glucose through urine, also provides cardiovascular benefits.",
    dosage: "1 tablet once daily in morning",
    category: "Diabetes Care",
    sideEffects: "Urinary tract infection, increased urination",
    suggestedPrice: 325
  },
  {
    name: "Dapagliflozin 10mg",
    salts: "Dapagliflozin 10mg",
    manufacturer: "AstraZeneca India",
    description: "SGLT2 inhibitor for type 2 diabetes with heart and kidney protective effects.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Genital infection, increased urination",
    suggestedPrice: 295
  },
  {
    name: "Teneligliptin 20mg",
    salts: "Teneligliptin Hydrobromide 20mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "DPP-4 inhibitor for type 2 diabetes with once daily dosing convenience.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, nasopharyngitis",
    suggestedPrice: 145
  },
  {
    name: "Glipizide 5mg",
    salts: "Glipizide 5mg",
    manufacturer: "Pfizer Ltd",
    description: "Sulfonylurea that stimulates insulin secretion for blood sugar control.",
    dosage: "1 tablet before breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain, nausea",
    suggestedPrice: 35
  },
  {
    name: "Insulin Glargine 100IU/ml",
    salts: "Insulin Glargine 100IU/ml",
    manufacturer: "Sanofi India",
    description: "Long-acting insulin analog for basal insulin coverage in diabetes management.",
    dosage: "As prescribed by doctor, usually once daily at same time",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, injection site reactions, weight gain",
    suggestedPrice: 1250
  },
  {
    name: "Linagliptin 5mg",
    salts: "Linagliptin 5mg",
    manufacturer: "Boehringer Ingelheim",
    description: "DPP-4 inhibitor that doesn't require dose adjustment in kidney impairment.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Nasopharyngitis, hypersensitivity reactions",
    suggestedPrice: 285
  },

  // ==================== HEART HEALTH ====================
  {
    name: "Atorvastatin 10mg",
    salts: "Atorvastatin Calcium 10mg",
    manufacturer: "Pfizer Ltd",
    description: "Statin medication that lowers cholesterol and reduces risk of heart disease and stroke.",
    dosage: "1 tablet once daily at bedtime",
    category: "Heart Health",
    sideEffects: "Muscle pain, headache, nausea, joint pain",
    suggestedPrice: 85
  },
  {
    name: "Atorvastatin 20mg",
    salts: "Atorvastatin Calcium 20mg",
    manufacturer: "Pfizer Ltd",
    description: "Medium strength statin for cholesterol management and cardiovascular protection.",
    dosage: "1 tablet once daily at bedtime",
    category: "Heart Health",
    sideEffects: "Muscle pain, headache, digestive problems",
    suggestedPrice: 125
  },
  {
    name: "Atorvastatin 40mg",
    salts: "Atorvastatin Calcium 40mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "High strength statin for aggressive cholesterol lowering.",
    dosage: "1 tablet once daily at bedtime",
    category: "Heart Health",
    sideEffects: "Muscle pain, liver enzyme elevation",
    suggestedPrice: 175
  },
  {
    name: "Rosuvastatin 10mg",
    salts: "Rosuvastatin Calcium 10mg",
    manufacturer: "AstraZeneca India",
    description: "Potent statin for LDL cholesterol reduction and cardiovascular risk management.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Muscle pain, headache, nausea",
    suggestedPrice: 145
  },
  {
    name: "Rosuvastatin 20mg",
    salts: "Rosuvastatin Calcium 20mg",
    manufacturer: "AstraZeneca India",
    description: "Higher potency statin for significant cholesterol reduction.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Myalgia, constipation, asthenia",
    suggestedPrice: 195
  },
  {
    name: "Amlodipine 5mg",
    salts: "Amlodipine Besylate 5mg",
    manufacturer: "Pfizer Ltd",
    description: "Calcium channel blocker for hypertension and angina management.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Swelling of ankles, headache, flushing",
    suggestedPrice: 35
  },
  {
    name: "Amlodipine 10mg",
    salts: "Amlodipine Besylate 10mg",
    manufacturer: "Pfizer Ltd",
    description: "Higher strength calcium channel blocker for blood pressure control.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Edema, dizziness, flushing",
    suggestedPrice: 55
  },
  {
    name: "Telmisartan 40mg",
    salts: "Telmisartan 40mg",
    manufacturer: "Boehringer Ingelheim",
    description: "ARB medication for hypertension with cardiovascular protective effects.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, back pain, diarrhea",
    suggestedPrice: 85
  },
  {
    name: "Telmisartan 80mg",
    salts: "Telmisartan 80mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Higher strength ARB for optimal blood pressure management.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, upper respiratory infection",
    suggestedPrice: 125
  },
  {
    name: "Losartan 50mg",
    salts: "Losartan Potassium 50mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "ARB for hypertension and diabetic kidney disease protection.",
    dosage: "1 tablet once or twice daily",
    category: "Heart Health",
    sideEffects: "Dizziness, upper respiratory infection, back pain",
    suggestedPrice: 65
  },
  {
    name: "Metoprolol 50mg",
    salts: "Metoprolol Succinate 50mg",
    manufacturer: "AstraZeneca India",
    description: "Beta-blocker for hypertension, angina, and heart failure management.",
    dosage: "1 tablet once or twice daily",
    category: "Heart Health",
    sideEffects: "Fatigue, dizziness, bradycardia",
    suggestedPrice: 45
  },
  {
    name: "Bisoprolol 5mg",
    salts: "Bisoprolol Fumarate 5mg",
    manufacturer: "Merck Ltd",
    description: "Cardioselective beta-blocker for hypertension and heart failure.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Fatigue, headache, dizziness",
    suggestedPrice: 75
  },
  {
    name: "Ramipril 5mg",
    salts: "Ramipril 5mg",
    manufacturer: "Sanofi India",
    description: "ACE inhibitor for hypertension and heart failure with renal protective effects.",
    dosage: "1 capsule once daily",
    category: "Heart Health",
    sideEffects: "Dry cough, dizziness, fatigue",
    suggestedPrice: 55
  },
  {
    name: "Enalapril 5mg",
    salts: "Enalapril Maleate 5mg",
    manufacturer: "Merck Ltd",
    description: "ACE inhibitor for blood pressure control and heart failure treatment.",
    dosage: "1 tablet once or twice daily",
    category: "Heart Health",
    sideEffects: "Dry cough, dizziness, headache",
    suggestedPrice: 35
  },
  {
    name: "Clopidogrel 75mg",
    salts: "Clopidogrel Bisulfate 75mg",
    manufacturer: "Sanofi India",
    description: "Antiplatelet medication to prevent blood clots after heart attack or stroke.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising, stomach upset",
    suggestedPrice: 95
  },
  {
    name: "Aspirin 75mg",
    salts: "Acetylsalicylic Acid 75mg",
    manufacturer: "Bayer",
    description: "Low-dose aspirin for cardiovascular protection and prevention of blood clots.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Stomach irritation, increased bleeding risk",
    suggestedPrice: 15
  },
  {
    name: "Nitroglycerin 2.6mg",
    salts: "Glyceryl Trinitrate 2.6mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Nitrate medication for prevention and treatment of angina (chest pain).",
    dosage: "1 tablet twice or thrice daily",
    category: "Heart Health",
    sideEffects: "Headache, dizziness, flushing",
    suggestedPrice: 45
  },
  {
    name: "Diltiazem 30mg",
    salts: "Diltiazem Hydrochloride 30mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Calcium channel blocker for hypertension and angina.",
    dosage: "1 tablet 3-4 times daily",
    category: "Heart Health",
    sideEffects: "Dizziness, headache, edema",
    suggestedPrice: 55
  },
  {
    name: "Nebivolol 5mg",
    salts: "Nebivolol Hydrochloride 5mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Third-generation beta-blocker with vasodilating properties.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Headache, fatigue, dizziness",
    suggestedPrice: 95
  },
  {
    name: "Olmesartan 20mg",
    salts: "Olmesartan Medoxomil 20mg",
    manufacturer: "Daiichi Sankyo",
    description: "ARB for effective blood pressure control.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, diarrhea, back pain",
    suggestedPrice: 125
  },

  // ==================== DIGESTIVE HEALTH ====================
  {
    name: "Pantoprazole 40mg",
    salts: "Pantoprazole Sodium 40mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Proton pump inhibitor for acid reflux, GERD, and peptic ulcers.",
    dosage: "1 tablet once daily before breakfast",
    category: "Digestive Health",
    sideEffects: "Headache, diarrhea, abdominal pain",
    suggestedPrice: 65
  },
  {
    name: "Omeprazole 20mg",
    salts: "Omeprazole 20mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "PPI for gastric acid reduction in GERD and ulcers.",
    dosage: "1 capsule once daily before breakfast",
    category: "Digestive Health",
    sideEffects: "Headache, nausea, diarrhea",
    suggestedPrice: 45
  },
  {
    name: "Rabeprazole 20mg",
    salts: "Rabeprazole Sodium 20mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Fast-acting PPI for acid-related disorders.",
    dosage: "1 tablet once daily before meals",
    category: "Digestive Health",
    sideEffects: "Headache, diarrhea, flatulence",
    suggestedPrice: 75
  },
  {
    name: "Esomeprazole 40mg",
    salts: "Esomeprazole Magnesium 40mg",
    manufacturer: "AstraZeneca India",
    description: "Advanced PPI for effective acid suppression in GERD.",
    dosage: "1 tablet once daily",
    category: "Digestive Health",
    sideEffects: "Headache, diarrhea, nausea",
    suggestedPrice: 95
  },
  {
    name: "Domperidone 10mg",
    salts: "Domperidone 10mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Prokinetic agent for nausea, vomiting, and gastroparesis.",
    dosage: "1 tablet 3 times daily before meals",
    category: "Digestive Health",
    sideEffects: "Dry mouth, headache, abdominal cramps",
    suggestedPrice: 35
  },
  {
    name: "Ondansetron 4mg",
    salts: "Ondansetron Hydrochloride 4mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Anti-emetic for prevention and treatment of nausea and vomiting.",
    dosage: "1-2 tablets as needed",
    category: "Digestive Health",
    sideEffects: "Headache, constipation, dizziness",
    suggestedPrice: 55
  },
  {
    name: "Ranitidine 150mg",
    salts: "Ranitidine Hydrochloride 150mg",
    manufacturer: "GlaxoSmithKline",
    description: "H2 blocker for acid reduction in peptic ulcers and GERD.",
    dosage: "1 tablet twice daily",
    category: "Digestive Health",
    sideEffects: "Headache, dizziness, constipation",
    suggestedPrice: 35
  },
  {
    name: "Sucralfate 1g",
    salts: "Sucralfate 1g",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Mucosal protective agent for ulcer healing.",
    dosage: "1 tablet 4 times daily on empty stomach",
    category: "Digestive Health",
    sideEffects: "Constipation, nausea, dry mouth",
    suggestedPrice: 65
  },
  {
    name: "Dicyclomine 20mg",
    salts: "Dicyclomine Hydrochloride 20mg",
    manufacturer: "Abbott India",
    description: "Antispasmodic for IBS and abdominal cramps.",
    dosage: "1 tablet 3-4 times daily",
    category: "Digestive Health",
    sideEffects: "Dry mouth, blurred vision, drowsiness",
    suggestedPrice: 25
  },
  {
    name: "Loperamide 2mg",
    salts: "Loperamide Hydrochloride 2mg",
    manufacturer: "Johnson & Johnson",
    description: "Anti-diarrheal medication for acute and chronic diarrhea.",
    dosage: "2 capsules initially, then 1 after each loose stool",
    category: "Digestive Health",
    sideEffects: "Constipation, abdominal cramps, nausea",
    suggestedPrice: 25
  },
  {
    name: "Rifaximin 400mg",
    salts: "Rifaximin 400mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Non-absorbable antibiotic for traveler's diarrhea and IBS-D.",
    dosage: "1 tablet 3 times daily",
    category: "Digestive Health",
    sideEffects: "Nausea, flatulence, headache",
    suggestedPrice: 185
  },
  {
    name: "Mesalamine 400mg",
    salts: "Mesalamine 400mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Anti-inflammatory for ulcerative colitis and Crohn's disease.",
    dosage: "2-3 tablets 3 times daily",
    category: "Digestive Health",
    sideEffects: "Headache, nausea, abdominal pain",
    suggestedPrice: 125
  },
  {
    name: "Ursodeoxycholic Acid 300mg",
    salts: "Ursodeoxycholic Acid 300mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Bile acid for gallstone dissolution and liver protection.",
    dosage: "1-2 tablets twice daily",
    category: "Digestive Health",
    sideEffects: "Diarrhea, pruritus, nausea",
    suggestedPrice: 145
  },
  {
    name: "Lactulose 10g/15ml",
    salts: "Lactulose 66.7% w/v",
    manufacturer: "Abbott India",
    description: "Osmotic laxative for chronic constipation and hepatic encephalopathy.",
    dosage: "15-30ml once or twice daily",
    category: "Digestive Health",
    sideEffects: "Bloating, flatulence, abdominal cramps",
    suggestedPrice: 95
  },
  {
    name: "Bisacodyl 5mg",
    salts: "Bisacodyl 5mg",
    manufacturer: "Dulcolax",
    description: "Stimulant laxative for relief of occasional constipation.",
    dosage: "1-2 tablets at bedtime",
    category: "Digestive Health",
    sideEffects: "Abdominal cramps, diarrhea",
    suggestedPrice: 25
  },

  // ==================== BONE & JOINT ====================
  {
    name: "Calcium + Vitamin D3",
    salts: "Calcium Carbonate 1250mg + Vitamin D3 250IU",
    manufacturer: "Abbott India",
    description: "Essential supplement for bone health and prevention of osteoporosis.",
    dosage: "1 tablet twice daily after meals",
    category: "Bone & Joint",
    sideEffects: "Constipation, gas, nausea",
    suggestedPrice: 145
  },
  {
    name: "Glucosamine Sulfate 500mg",
    salts: "Glucosamine Sulfate 500mg",
    manufacturer: "Intas Pharmaceuticals",
    description: "Joint health supplement for osteoarthritis and cartilage support.",
    dosage: "1 tablet twice daily",
    category: "Bone & Joint",
    sideEffects: "Nausea, heartburn, diarrhea",
    suggestedPrice: 185
  },
  {
    name: "Diclofenac 50mg",
    salts: "Diclofenac Sodium 50mg",
    manufacturer: "Novartis India",
    description: "NSAID for pain relief, inflammation, and arthritis.",
    dosage: "1 tablet 2-3 times daily with food",
    category: "Bone & Joint",
    sideEffects: "Stomach upset, headache, dizziness",
    suggestedPrice: 25
  },
  {
    name: "Aceclofenac 100mg",
    salts: "Aceclofenac 100mg",
    manufacturer: "Ipca Laboratories",
    description: "NSAID with good tolerability for joint pain and inflammation.",
    dosage: "1 tablet twice daily after meals",
    category: "Bone & Joint",
    sideEffects: "Dyspepsia, nausea, diarrhea",
    suggestedPrice: 45
  },
  {
    name: "Ibuprofen 400mg",
    salts: "Ibuprofen 400mg",
    manufacturer: "Cipla Ltd",
    description: "NSAID for pain, fever, and inflammation relief.",
    dosage: "1 tablet 3-4 times daily with food",
    category: "Bone & Joint",
    sideEffects: "Stomach upset, nausea, headache",
    suggestedPrice: 25
  },
  {
    name: "Naproxen 500mg",
    salts: "Naproxen Sodium 500mg",
    manufacturer: "Bayer",
    description: "Long-acting NSAID for arthritis and musculoskeletal pain.",
    dosage: "1 tablet twice daily with food",
    category: "Bone & Joint",
    sideEffects: "Stomach upset, drowsiness, headache",
    suggestedPrice: 55
  },
  {
    name: "Etoricoxib 90mg",
    salts: "Etoricoxib 90mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Selective COX-2 inhibitor for arthritis and acute pain.",
    dosage: "1 tablet once daily",
    category: "Bone & Joint",
    sideEffects: "Headache, dizziness, edema",
    suggestedPrice: 125
  },
  {
    name: "Celecoxib 200mg",
    salts: "Celecoxib 200mg",
    manufacturer: "Pfizer Ltd",
    description: "COX-2 selective NSAID with reduced GI side effects.",
    dosage: "1 capsule once or twice daily",
    category: "Bone & Joint",
    sideEffects: "Abdominal pain, diarrhea, dyspepsia",
    suggestedPrice: 145
  },
  {
    name: "Alendronate 70mg",
    salts: "Alendronic Acid 70mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Bisphosphonate for osteoporosis treatment and prevention.",
    dosage: "1 tablet once weekly in morning",
    category: "Bone & Joint",
    sideEffects: "Stomach upset, bone pain, headache",
    suggestedPrice: 195
  },
  {
    name: "Calcitriol 0.25mcg",
    salts: "Calcitriol 0.25mcg",
    manufacturer: "Abbott India",
    description: "Active vitamin D for calcium regulation and bone health.",
    dosage: "1 capsule daily",
    category: "Bone & Joint",
    sideEffects: "Hypercalcemia, nausea, constipation",
    suggestedPrice: 145
  },
  {
    name: "Diacerein 50mg",
    salts: "Diacerein 50mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Disease-modifying agent for osteoarthritis.",
    dosage: "1 capsule twice daily with food",
    category: "Bone & Joint",
    sideEffects: "Diarrhea, abdominal pain, discolored urine",
    suggestedPrice: 125
  },
  {
    name: "Collagen Peptides 10g",
    salts: "Hydrolyzed Collagen Peptides 10g",
    manufacturer: "Zydus Wellness",
    description: "Supplement for joint, skin, and bone health.",
    dosage: "1 sachet daily mixed with water",
    category: "Bone & Joint",
    sideEffects: "Bloating, heartburn, fullness",
    suggestedPrice: 85
  },
  {
    name: "Thiocolchicoside 4mg",
    salts: "Thiocolchicoside 4mg",
    manufacturer: "Sanofi India",
    description: "Muscle relaxant for acute muscle spasms and back pain.",
    dosage: "1 capsule twice daily",
    category: "Bone & Joint",
    sideEffects: "Drowsiness, diarrhea, nausea",
    suggestedPrice: 85
  },
  {
    name: "Tizanidine 2mg",
    salts: "Tizanidine Hydrochloride 2mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Muscle relaxant for spasticity and muscle spasms.",
    dosage: "1 tablet 2-3 times daily",
    category: "Bone & Joint",
    sideEffects: "Drowsiness, dry mouth, weakness",
    suggestedPrice: 45
  },
  {
    name: "Methocarbamol 500mg",
    salts: "Methocarbamol 500mg",
    manufacturer: "Pfizer Ltd",
    description: "Centrally acting muscle relaxant for musculoskeletal pain.",
    dosage: "2 tablets 4 times daily",
    category: "Bone & Joint",
    sideEffects: "Drowsiness, dizziness, nausea",
    suggestedPrice: 65
  },

  // ==================== MENTAL WELLNESS ====================
  {
    name: "Escitalopram 10mg",
    salts: "Escitalopram Oxalate 10mg",
    manufacturer: "Lundbeck India",
    description: "SSRI antidepressant for depression and anxiety disorders.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Nausea, insomnia, drowsiness, sexual dysfunction",
    suggestedPrice: 85
  },
  {
    name: "Sertraline 50mg",
    salts: "Sertraline Hydrochloride 50mg",
    manufacturer: "Pfizer Ltd",
    description: "SSRI for depression, OCD, PTSD, and panic disorder.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Nausea, diarrhea, insomnia, tremor",
    suggestedPrice: 75
  },
  {
    name: "Fluoxetine 20mg",
    salts: "Fluoxetine Hydrochloride 20mg",
    manufacturer: "Eli Lilly India",
    description: "SSRI antidepressant also used for OCD and bulimia.",
    dosage: "1 capsule once daily in morning",
    category: "Mental Wellness",
    sideEffects: "Insomnia, anxiety, nausea, headache",
    suggestedPrice: 55
  },
  {
    name: "Paroxetine 20mg",
    salts: "Paroxetine Hydrochloride 20mg",
    manufacturer: "GlaxoSmithKline",
    description: "SSRI for depression, anxiety, and panic disorders.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, nausea, sexual dysfunction",
    suggestedPrice: 95
  },
  {
    name: "Venlafaxine 75mg",
    salts: "Venlafaxine Hydrochloride 75mg",
    manufacturer: "Pfizer Ltd",
    description: "SNRI antidepressant for depression and anxiety.",
    dosage: "1 tablet twice daily with food",
    category: "Mental Wellness",
    sideEffects: "Nausea, headache, dizziness, insomnia",
    suggestedPrice: 125
  },
  {
    name: "Duloxetine 30mg",
    salts: "Duloxetine Hydrochloride 30mg",
    manufacturer: "Eli Lilly India",
    description: "SNRI for depression, anxiety, and neuropathic pain.",
    dosage: "1 capsule once daily",
    category: "Mental Wellness",
    sideEffects: "Nausea, dry mouth, constipation, fatigue",
    suggestedPrice: 145
  },
  {
    name: "Mirtazapine 15mg",
    salts: "Mirtazapine 15mg",
    manufacturer: "Organon India",
    description: "Atypical antidepressant with sedating properties, good for insomnia.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, weight gain, dry mouth",
    suggestedPrice: 95
  },
  {
    name: "Bupropion 150mg",
    salts: "Bupropion Hydrochloride 150mg",
    manufacturer: "GlaxoSmithKline",
    description: "Antidepressant also used for smoking cessation.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Insomnia, dry mouth, headache",
    suggestedPrice: 185
  },
  {
    name: "Alprazolam 0.5mg",
    salts: "Alprazolam 0.5mg",
    manufacturer: "Pfizer Ltd",
    description: "Benzodiazepine for anxiety and panic disorders (short-term use).",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, dizziness, dependence risk",
    suggestedPrice: 25
  },
  {
    name: "Clonazepam 0.5mg",
    salts: "Clonazepam 0.5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Benzodiazepine for anxiety, seizures, and panic disorder.",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, coordination problems, dependence",
    suggestedPrice: 35
  },
  {
    name: "Lorazepam 1mg",
    salts: "Lorazepam 1mg",
    manufacturer: "Pfizer Ltd",
    description: "Benzodiazepine for anxiety and insomnia (short-term).",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Sedation, weakness, unsteadiness",
    suggestedPrice: 25
  },
  {
    name: "Zolpidem 10mg",
    salts: "Zolpidem Tartrate 10mg",
    manufacturer: "Sanofi India",
    description: "Non-benzodiazepine sleep aid for insomnia.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, dizziness, headache",
    suggestedPrice: 55
  },
  {
    name: "Olanzapine 5mg",
    salts: "Olanzapine 5mg",
    manufacturer: "Eli Lilly India",
    description: "Atypical antipsychotic for schizophrenia and bipolar disorder.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Weight gain, drowsiness, metabolic effects",
    suggestedPrice: 85
  },
  {
    name: "Risperidone 2mg",
    salts: "Risperidone 2mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Antipsychotic for schizophrenia and bipolar mania.",
    dosage: "1 tablet once or twice daily",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, weight gain, tremor",
    suggestedPrice: 75
  },
  {
    name: "Quetiapine 50mg",
    salts: "Quetiapine Fumarate 50mg",
    manufacturer: "AstraZeneca India",
    description: "Atypical antipsychotic for schizophrenia and mood disorders.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Sedation, dizziness, weight gain",
    suggestedPrice: 95
  },

  // ==================== HAIR CARE ====================
  {
    name: "Minoxidil 5% Solution",
    salts: "Minoxidil 5% w/v",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Topical solution for hair regrowth in androgenetic alopecia.",
    dosage: "Apply 1ml to scalp twice daily",
    category: "Hair Care",
    sideEffects: "Scalp irritation, unwanted facial hair, dizziness",
    suggestedPrice: 295
  },
  {
    name: "Finasteride 1mg",
    salts: "Finasteride 1mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "5-alpha reductase inhibitor for male pattern baldness.",
    dosage: "1 tablet once daily",
    category: "Hair Care",
    sideEffects: "Sexual dysfunction, breast tenderness",
    suggestedPrice: 145
  },
  {
    name: "Biotin 10000mcg",
    salts: "Biotin 10000mcg",
    manufacturer: "HealthKart",
    description: "Vitamin supplement for hair, skin, and nail health.",
    dosage: "1 tablet daily with food",
    category: "Hair Care",
    sideEffects: "Rare - skin rash, digestive upset",
    suggestedPrice: 195
  },
  {
    name: "Ketoconazole Shampoo 2%",
    salts: "Ketoconazole 2% w/v",
    manufacturer: "Johnson & Johnson",
    description: "Antifungal shampoo for dandruff and seborrheic dermatitis.",
    dosage: "Use twice weekly, leave on scalp for 3-5 minutes",
    category: "Hair Care",
    sideEffects: "Scalp dryness, hair texture change",
    suggestedPrice: 245
  },
  {
    name: "Iron + Folic Acid",
    salts: "Ferrous Fumarate 300mg + Folic Acid 1.5mg",
    manufacturer: "Abbott India",
    description: "Supplement for iron deficiency anemia and hair health.",
    dosage: "1 tablet once daily",
    category: "Hair Care",
    sideEffects: "Constipation, nausea, dark stools",
    suggestedPrice: 65
  },
  {
    name: "Zinc Supplement 50mg",
    salts: "Zinc Sulfate 50mg",
    manufacturer: "Mankind Pharma",
    description: "Essential mineral for hair growth and immune function.",
    dosage: "1 tablet daily with food",
    category: "Hair Care",
    sideEffects: "Nausea, stomach upset, metallic taste",
    suggestedPrice: 85
  },
  {
    name: "Dutasteride 0.5mg",
    salts: "Dutasteride 0.5mg",
    manufacturer: "GlaxoSmithKline",
    description: "Dual 5-alpha reductase inhibitor for hair loss (more potent than finasteride).",
    dosage: "1 capsule once daily",
    category: "Hair Care",
    sideEffects: "Sexual dysfunction, breast enlargement",
    suggestedPrice: 285
  },
  {
    name: "Procapil Serum",
    salts: "Procapil Complex (Oleanolic Acid + Apigenin + Biotinyl Tripeptide)",
    manufacturer: "The Ordinary",
    description: "Hair growth serum targeting follicle aging and improving blood flow.",
    dosage: "Apply to scalp once daily",
    category: "Hair Care",
    sideEffects: "Scalp irritation, allergic reactions (rare)",
    suggestedPrice: 495
  },
  {
    name: "Saw Palmetto 320mg",
    salts: "Saw Palmetto Extract 320mg",
    manufacturer: "Himalaya Wellness",
    description: "Natural DHT blocker for hair loss prevention.",
    dosage: "1 capsule daily",
    category: "Hair Care",
    sideEffects: "Stomach upset, headache",
    suggestedPrice: 195
  },
  {
    name: "Caffeine Shampoo",
    salts: "Caffeine 0.2% + Biotin + Keratin",
    manufacturer: "Alpecin",
    description: "Stimulating shampoo for hair follicle activation.",
    dosage: "Use daily, leave on scalp for 2 minutes",
    category: "Hair Care",
    sideEffects: "Scalp dryness, irritation (rare)",
    suggestedPrice: 345
  },

  // ==================== RESPIRATORY / COLD & FLU ====================
  {
    name: "Cetirizine 10mg",
    salts: "Cetirizine Hydrochloride 10mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Non-sedating antihistamine for allergies, hay fever, and hives.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Drowsiness, dry mouth, headache",
    suggestedPrice: 25
  },
  {
    name: "Levocetirizine 5mg",
    salts: "Levocetirizine Dihydrochloride 5mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Potent antihistamine for allergic rhinitis and urticaria.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Drowsiness, fatigue, dry mouth",
    suggestedPrice: 35
  },
  {
    name: "Fexofenadine 120mg",
    salts: "Fexofenadine Hydrochloride 120mg",
    manufacturer: "Sanofi India",
    description: "Non-drowsy antihistamine for seasonal allergies.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Headache, nausea, drowsiness",
    suggestedPrice: 75
  },
  {
    name: "Montelukast 10mg",
    salts: "Montelukast Sodium 10mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Leukotriene antagonist for asthma and allergic rhinitis.",
    dosage: "1 tablet once daily at bedtime",
    category: "Respiratory",
    sideEffects: "Headache, abdominal pain, mood changes",
    suggestedPrice: 125
  },
  {
    name: "Salbutamol Inhaler 100mcg",
    salts: "Salbutamol Sulfate 100mcg per actuation",
    manufacturer: "Cipla Ltd",
    description: "Bronchodilator inhaler for quick relief of asthma symptoms.",
    dosage: "1-2 puffs as needed, max 8 puffs/day",
    category: "Respiratory",
    sideEffects: "Tremor, palpitations, headache",
    suggestedPrice: 125
  },
  {
    name: "Budesonide Inhaler 200mcg",
    salts: "Budesonide 200mcg per actuation",
    manufacturer: "AstraZeneca India",
    description: "Corticosteroid inhaler for asthma prevention and control.",
    dosage: "1-2 puffs twice daily",
    category: "Respiratory",
    sideEffects: "Oral thrush, hoarseness, cough",
    suggestedPrice: 295
  },
  {
    name: "Ambroxol 30mg",
    salts: "Ambroxol Hydrochloride 30mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Mucolytic for productive cough and respiratory infections.",
    dosage: "1 tablet 2-3 times daily",
    category: "Respiratory",
    sideEffects: "Nausea, diarrhea, stomach upset",
    suggestedPrice: 35
  },
  {
    name: "Bromhexine 8mg",
    salts: "Bromhexine Hydrochloride 8mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Expectorant for bronchitis and productive cough.",
    dosage: "1 tablet 3 times daily",
    category: "Respiratory",
    sideEffects: "Nausea, gastric irritation",
    suggestedPrice: 25
  },
  {
    name: "Dextromethorphan 15mg",
    salts: "Dextromethorphan Hydrobromide 15mg",
    manufacturer: "Pfizer Ltd",
    description: "Cough suppressant for dry, non-productive cough.",
    dosage: "1-2 tablets every 4-6 hours",
    category: "Respiratory",
    sideEffects: "Drowsiness, dizziness, nausea",
    suggestedPrice: 35
  },
  {
    name: "Fluticasone Nasal Spray",
    salts: "Fluticasone Propionate 50mcg per spray",
    manufacturer: "GlaxoSmithKline",
    description: "Corticosteroid nasal spray for allergic rhinitis.",
    dosage: "2 sprays in each nostril once daily",
    category: "Respiratory",
    sideEffects: "Nasal irritation, headache, nosebleed",
    suggestedPrice: 185
  },
  {
    name: "Oxymetazoline Nasal Spray",
    salts: "Oxymetazoline Hydrochloride 0.05%",
    manufacturer: "Cipla Ltd",
    description: "Decongestant nasal spray for quick relief of nasal congestion.",
    dosage: "2-3 sprays in each nostril twice daily (max 3 days)",
    category: "Respiratory",
    sideEffects: "Burning, stinging, rebound congestion",
    suggestedPrice: 65
  },
  {
    name: "Paracetamol 500mg",
    salts: "Paracetamol 500mg",
    manufacturer: "GlaxoSmithKline",
    description: "Analgesic and antipyretic for pain and fever relief.",
    dosage: "1-2 tablets every 4-6 hours, max 8 tablets/day",
    category: "Respiratory",
    sideEffects: "Rare at normal doses - liver damage if overdosed",
    suggestedPrice: 15
  },
  {
    name: "Paracetamol 650mg",
    salts: "Paracetamol 650mg",
    manufacturer: "Cipla Ltd",
    description: "Stronger paracetamol for moderate pain and fever.",
    dosage: "1 tablet every 4-6 hours, max 4 tablets/day",
    category: "Respiratory",
    sideEffects: "Rare - liver damage with overdose",
    suggestedPrice: 25
  },
  {
    name: "Aspirin 325mg",
    salts: "Acetylsalicylic Acid 325mg",
    manufacturer: "Bayer",
    description: "Pain reliever, fever reducer, and anti-inflammatory.",
    dosage: "1-2 tablets every 4-6 hours",
    category: "Respiratory",
    sideEffects: "Stomach upset, bleeding risk",
    suggestedPrice: 20
  },
  {
    name: "Phenylephrine 10mg",
    salts: "Phenylephrine Hydrochloride 10mg",
    manufacturer: "Pfizer Ltd",
    description: "Oral decongestant for nasal and sinus congestion.",
    dosage: "1 tablet every 4 hours",
    category: "Respiratory",
    sideEffects: "Nervousness, insomnia, elevated BP",
    suggestedPrice: 25
  },

  // ==================== SKIN CARE ====================
  {
    name: "Clindamycin Gel 1%",
    salts: "Clindamycin Phosphate 1% w/w",
    manufacturer: "Galderma India",
    description: "Topical antibiotic for acne and bacterial skin infections.",
    dosage: "Apply thin layer to affected areas twice daily",
    category: "Skin Care",
    sideEffects: "Dryness, peeling, burning sensation",
    suggestedPrice: 145
  },
  {
    name: "Adapalene Gel 0.1%",
    salts: "Adapalene 0.1% w/w",
    manufacturer: "Galderma India",
    description: "Retinoid for acne treatment and prevention.",
    dosage: "Apply pea-sized amount at bedtime",
    category: "Skin Care",
    sideEffects: "Dryness, redness, peeling, sun sensitivity",
    suggestedPrice: 195
  },
  {
    name: "Benzoyl Peroxide 2.5%",
    salts: "Benzoyl Peroxide 2.5% w/w",
    manufacturer: "GlaxoSmithKline",
    description: "Antibacterial agent for mild to moderate acne.",
    dosage: "Apply once or twice daily to clean skin",
    category: "Skin Care",
    sideEffects: "Dryness, peeling, bleaching of fabrics",
    suggestedPrice: 85
  },
  {
    name: "Tretinoin Cream 0.025%",
    salts: "Tretinoin 0.025% w/w",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Retinoid for acne, photoaging, and skin texture improvement.",
    dosage: "Apply small amount at bedtime",
    category: "Skin Care",
    sideEffects: "Irritation, peeling, sun sensitivity",
    suggestedPrice: 165
  },
  {
    name: "Hydroquinone 2%",
    salts: "Hydroquinone 2% w/w",
    manufacturer: "Galderma India",
    description: "Skin lightening agent for hyperpigmentation and melasma.",
    dosage: "Apply twice daily to dark spots",
    category: "Skin Care",
    sideEffects: "Redness, dryness, sensitivity",
    suggestedPrice: 195
  },
  {
    name: "Azelaic Acid 20%",
    salts: "Azelaic Acid 20% w/w",
    manufacturer: "Bayer",
    description: "For acne, rosacea, and hyperpigmentation.",
    dosage: "Apply twice daily to affected areas",
    category: "Skin Care",
    sideEffects: "Burning, tingling, dryness",
    suggestedPrice: 285
  },
  {
    name: "Mupirocin Ointment 2%",
    salts: "Mupirocin 2% w/w",
    manufacturer: "GlaxoSmithKline",
    description: "Topical antibiotic for impetigo and bacterial skin infections.",
    dosage: "Apply 3 times daily for 10 days",
    category: "Skin Care",
    sideEffects: "Burning, stinging, itching",
    suggestedPrice: 125
  },
  {
    name: "Fusidic Acid Cream 2%",
    salts: "Fusidic Acid 2% w/w",
    manufacturer: "Leo Pharma",
    description: "Antibiotic cream for infected eczema and skin infections.",
    dosage: "Apply 3-4 times daily",
    category: "Skin Care",
    sideEffects: "Local irritation, rash",
    suggestedPrice: 145
  },
  {
    name: "Fluconazole 150mg",
    salts: "Fluconazole 150mg",
    manufacturer: "Pfizer Ltd",
    description: "Oral antifungal for yeast infections and fungal skin conditions.",
    dosage: "Single dose or weekly as prescribed",
    category: "Skin Care",
    sideEffects: "Headache, nausea, abdominal pain",
    suggestedPrice: 85
  },
  {
    name: "Terbinafine Cream 1%",
    salts: "Terbinafine Hydrochloride 1% w/w",
    manufacturer: "Novartis India",
    description: "Antifungal cream for athlete's foot and ringworm.",
    dosage: "Apply once or twice daily for 1-2 weeks",
    category: "Skin Care",
    sideEffects: "Redness, itching, stinging",
    suggestedPrice: 95
  },
  {
    name: "Clotrimazole Cream 1%",
    salts: "Clotrimazole 1% w/w",
    manufacturer: "Bayer",
    description: "Broad-spectrum antifungal for skin infections.",
    dosage: "Apply 2-3 times daily for 2-4 weeks",
    category: "Skin Care",
    sideEffects: "Burning, itching, redness",
    suggestedPrice: 45
  },
  {
    name: "Betamethasone Cream 0.1%",
    salts: "Betamethasone Valerate 0.1% w/w",
    manufacturer: "GlaxoSmithKline",
    description: "Corticosteroid cream for eczema, dermatitis, and psoriasis.",
    dosage: "Apply thin layer 1-2 times daily",
    category: "Skin Care",
    sideEffects: "Skin thinning, stretch marks with prolonged use",
    suggestedPrice: 65
  },
  {
    name: "Hydrocortisone Cream 1%",
    salts: "Hydrocortisone Acetate 1% w/w",
    manufacturer: "Johnson & Johnson",
    description: "Mild corticosteroid for minor skin irritations and rashes.",
    dosage: "Apply 2-4 times daily",
    category: "Skin Care",
    sideEffects: "Skin irritation, rarely skin thinning",
    suggestedPrice: 45
  },
  {
    name: "Tacrolimus Ointment 0.03%",
    salts: "Tacrolimus 0.03% w/w",
    manufacturer: "Astellas Pharma",
    description: "Immunomodulator for eczema without steroid side effects.",
    dosage: "Apply twice daily",
    category: "Skin Care",
    sideEffects: "Burning sensation, itching initially",
    suggestedPrice: 295
  },
  {
    name: "Calamine Lotion",
    salts: "Calamine 8% + Zinc Oxide 8%",
    manufacturer: "Johnson & Johnson",
    description: "Soothing lotion for itching, rashes, and insect bites.",
    dosage: "Apply as needed to affected areas",
    category: "Skin Care",
    sideEffects: "Rare - skin irritation",
    suggestedPrice: 55
  },

  // ==================== VITAMINS & SUPPLEMENTS ====================
  {
    name: "Vitamin B Complex",
    salts: "B1, B2, B3, B5, B6, B7, B9, B12",
    manufacturer: "Abbott India",
    description: "Complete B vitamin supplement for energy and nervous system support.",
    dosage: "1 tablet daily after meals",
    category: "Vitamins",
    sideEffects: "Bright yellow urine, rarely nausea",
    suggestedPrice: 85
  },
  {
    name: "Vitamin C 500mg",
    salts: "Ascorbic Acid 500mg",
    manufacturer: "Limcee",
    description: "Antioxidant vitamin for immunity and skin health.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Stomach upset at high doses",
    suggestedPrice: 45
  },
  {
    name: "Vitamin D3 60000IU",
    salts: "Cholecalciferol 60000IU",
    manufacturer: "Cadila Healthcare",
    description: "High-dose vitamin D for deficiency correction.",
    dosage: "1 sachet weekly for 8 weeks, then monthly",
    category: "Vitamins",
    sideEffects: "Rarely hypercalcemia at very high doses",
    suggestedPrice: 25
  },
  {
    name: "Vitamin E 400IU",
    salts: "Tocopherol Acetate 400IU",
    manufacturer: "Pfizer Ltd",
    description: "Antioxidant vitamin for skin health and cellular protection.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "Nausea, diarrhea, bleeding risk at high doses",
    suggestedPrice: 95
  },
  {
    name: "Omega-3 Fish Oil 1000mg",
    salts: "EPA 180mg + DHA 120mg",
    manufacturer: "HealthKart",
    description: "Essential fatty acids for heart and brain health.",
    dosage: "1-2 capsules daily with meals",
    category: "Vitamins",
    sideEffects: "Fishy aftertaste, mild GI upset",
    suggestedPrice: 195
  },
  {
    name: "Multivitamin Tablet",
    salts: "A, C, D, E, K, B-Complex + Minerals",
    manufacturer: "Centrum",
    description: "Comprehensive daily multivitamin for overall health.",
    dosage: "1 tablet daily with food",
    category: "Vitamins",
    sideEffects: "Mild nausea, colored urine",
    suggestedPrice: 145
  },
  {
    name: "Folic Acid 5mg",
    salts: "Folic Acid 5mg",
    manufacturer: "Abbott India",
    description: "B vitamin for pregnancy, anemia prevention, and cell growth.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Generally well tolerated",
    suggestedPrice: 25
  },
  {
    name: "Vitamin B12 1500mcg",
    salts: "Methylcobalamin 1500mcg",
    manufacturer: "Sun Pharmaceutical",
    description: "Essential vitamin for nerve health and energy production.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Rare - mild diarrhea, itching",
    suggestedPrice: 145
  },
  {
    name: "Magnesium Glycinate 400mg",
    salts: "Magnesium Glycinate 400mg",
    manufacturer: "Now Foods",
    description: "Well-absorbed magnesium for muscle, nerve, and sleep support.",
    dosage: "1 capsule daily with food",
    category: "Vitamins",
    sideEffects: "Diarrhea at high doses",
    suggestedPrice: 195
  },
  {
    name: "Coenzyme Q10 100mg",
    salts: "Ubiquinone 100mg",
    manufacturer: "HealthKart",
    description: "Antioxidant for heart health and cellular energy.",
    dosage: "1 capsule daily with fatty meal",
    category: "Vitamins",
    sideEffects: "Mild GI upset, insomnia",
    suggestedPrice: 295
  },

  // ==================== EYE CARE ====================
  {
    name: "Artificial Tears",
    salts: "Carboxymethylcellulose 0.5% w/v",
    manufacturer: "Allergan India",
    description: "Lubricating eye drops for dry eyes and irritation.",
    dosage: "1-2 drops in each eye as needed",
    category: "Eye Care",
    sideEffects: "Temporary blurred vision, mild stinging",
    suggestedPrice: 125
  },
  {
    name: "Moxifloxacin Eye Drops 0.5%",
    salts: "Moxifloxacin Hydrochloride 0.5% w/v",
    manufacturer: "Alcon Laboratories",
    description: "Antibiotic eye drops for bacterial conjunctivitis.",
    dosage: "1 drop 3 times daily for 7 days",
    category: "Eye Care",
    sideEffects: "Eye irritation, dry eye, blurred vision",
    suggestedPrice: 165
  },
  {
    name: "Ofloxacin Eye Drops 0.3%",
    salts: "Ofloxacin 0.3% w/v",
    manufacturer: "Cipla Ltd",
    description: "Fluoroquinolone antibiotic for eye infections.",
    dosage: "1-2 drops every 4-6 hours",
    category: "Eye Care",
    sideEffects: "Burning, stinging, photophobia",
    suggestedPrice: 65
  },
  {
    name: "Timolol Eye Drops 0.5%",
    salts: "Timolol Maleate 0.5% w/v",
    manufacturer: "Sun Pharmaceutical",
    description: "Beta-blocker for glaucoma and elevated eye pressure.",
    dosage: "1 drop twice daily",
    category: "Eye Care",
    sideEffects: "Eye stinging, blurred vision, bradycardia",
    suggestedPrice: 85
  },
  {
    name: "Latanoprost Eye Drops",
    salts: "Latanoprost 0.005% w/v",
    manufacturer: "Pfizer Ltd",
    description: "Prostaglandin analog for glaucoma treatment.",
    dosage: "1 drop in affected eye at bedtime",
    category: "Eye Care",
    sideEffects: "Eye color change, eyelash growth, redness",
    suggestedPrice: 295
  },
  {
    name: "Prednisolone Eye Drops 1%",
    salts: "Prednisolone Acetate 1% w/v",
    manufacturer: "Alcon Laboratories",
    description: "Corticosteroid for eye inflammation post-surgery or injury.",
    dosage: "1-2 drops 2-4 times daily",
    category: "Eye Care",
    sideEffects: "Increased eye pressure, cataract risk",
    suggestedPrice: 145
  },
  {
    name: "Brimonidine Eye Drops 0.2%",
    salts: "Brimonidine Tartrate 0.2% w/v",
    manufacturer: "Allergan India",
    description: "Alpha agonist for glaucoma and ocular hypertension.",
    dosage: "1 drop twice daily",
    category: "Eye Care",
    sideEffects: "Drowsiness, dry mouth, eye redness",
    suggestedPrice: 195
  },
  {
    name: "Dorzolamide Eye Drops 2%",
    salts: "Dorzolamide Hydrochloride 2% w/v",
    manufacturer: "MSD Pharmaceuticals",
    description: "Carbonic anhydrase inhibitor for glaucoma.",
    dosage: "1 drop 3 times daily",
    category: "Eye Care",
    sideEffects: "Bitter taste, eye burning, blurred vision",
    suggestedPrice: 245
  },

  // ==================== WOMEN'S HEALTH ====================
  {
    name: "Levonorgestrel 0.75mg",
    salts: "Levonorgestrel 0.75mg",
    manufacturer: "Cipla Ltd",
    description: "Emergency contraceptive pill (morning after pill).",
    dosage: "2 tablets taken 12 hours apart within 72 hours",
    category: "Women's Health",
    sideEffects: "Nausea, headache, irregular bleeding",
    suggestedPrice: 85
  },
  {
    name: "Ethinyl Estradiol + Levonorgestrel",
    salts: "Ethinyl Estradiol 0.03mg + Levonorgestrel 0.15mg",
    manufacturer: "Organon India",
    description: "Combined oral contraceptive pill.",
    dosage: "1 tablet daily for 21 days, 7 day break",
    category: "Women's Health",
    sideEffects: "Nausea, breast tenderness, mood changes",
    suggestedPrice: 45
  },
  {
    name: "Tranexamic Acid 500mg",
    salts: "Tranexamic Acid 500mg",
    manufacturer: "Sun Pharmaceutical",
    description: "For heavy menstrual bleeding and post-surgical bleeding.",
    dosage: "2 tablets 3 times daily during bleeding",
    category: "Women's Health",
    sideEffects: "Nausea, diarrhea, headache",
    suggestedPrice: 95
  },
  {
    name: "Mefenamic Acid 500mg",
    salts: "Mefenamic Acid 500mg",
    manufacturer: "Pfizer Ltd",
    description: "NSAID for menstrual cramps and pain relief.",
    dosage: "1 tablet 3 times daily with food",
    category: "Women's Health",
    sideEffects: "Stomach upset, drowsiness, rash",
    suggestedPrice: 35
  },
  {
    name: "Dydrogesterone 10mg",
    salts: "Dydrogesterone 10mg",
    manufacturer: "Abbott India",
    description: "Progestogen for menstrual disorders and pregnancy support.",
    dosage: "1-2 tablets daily as prescribed",
    category: "Women's Health",
    sideEffects: "Headache, nausea, breast tenderness",
    suggestedPrice: 195
  },
  {
    name: "Clomiphene Citrate 50mg",
    salts: "Clomiphene Citrate 50mg",
    manufacturer: "Cipla Ltd",
    description: "Fertility medication to induce ovulation.",
    dosage: "1 tablet daily for 5 days (Day 2-6 of cycle)",
    category: "Women's Health",
    sideEffects: "Hot flashes, mood swings, bloating",
    suggestedPrice: 145
  },
  {
    name: "Norethisterone 5mg",
    salts: "Norethisterone 5mg",
    manufacturer: "Zydus Healthcare",
    description: "Progestogen for delaying periods and menstrual disorders.",
    dosage: "1 tablet 2-3 times daily",
    category: "Women's Health",
    sideEffects: "Headache, breast discomfort, nausea",
    suggestedPrice: 65
  },
  {
    name: "Fluconazole 150mg (Vaginal)",
    salts: "Fluconazole 150mg",
    manufacturer: "Pfizer Ltd",
    description: "Single-dose antifungal for vaginal yeast infections.",
    dosage: "Single 150mg dose",
    category: "Women's Health",
    sideEffects: "Headache, nausea, abdominal pain",
    suggestedPrice: 85
  },

  // ==================== MEN'S HEALTH ====================
  {
    name: "Sildenafil 50mg",
    salts: "Sildenafil Citrate 50mg",
    manufacturer: "Pfizer Ltd",
    description: "PDE5 inhibitor for erectile dysfunction.",
    dosage: "1 tablet 30-60 minutes before activity",
    category: "Men's Health",
    sideEffects: "Headache, flushing, nasal congestion",
    suggestedPrice: 245
  },
  {
    name: "Tadalafil 10mg",
    salts: "Tadalafil 10mg",
    manufacturer: "Eli Lilly India",
    description: "Long-acting PDE5 inhibitor for erectile dysfunction.",
    dosage: "1 tablet as needed, effective up to 36 hours",
    category: "Men's Health",
    sideEffects: "Headache, back pain, muscle aches",
    suggestedPrice: 295
  },
  {
    name: "Tamsulosin 0.4mg",
    salts: "Tamsulosin Hydrochloride 0.4mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Alpha-blocker for benign prostatic hyperplasia (BPH).",
    dosage: "1 capsule daily 30 minutes after meal",
    category: "Men's Health",
    sideEffects: "Dizziness, abnormal ejaculation, nasal congestion",
    suggestedPrice: 85
  },
  {
    name: "Finasteride 5mg",
    salts: "Finasteride 5mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "5-alpha reductase inhibitor for BPH and prostate reduction.",
    dosage: "1 tablet once daily",
    category: "Men's Health",
    sideEffects: "Sexual dysfunction, breast enlargement",
    suggestedPrice: 125
  },
  {
    name: "Dutasteride 0.5mg",
    salts: "Dutasteride 0.5mg",
    manufacturer: "GlaxoSmithKline",
    description: "Dual 5-alpha reductase inhibitor for BPH.",
    dosage: "1 capsule daily",
    category: "Men's Health",
    sideEffects: "Impotence, decreased libido, ejaculation disorders",
    suggestedPrice: 185
  },
  {
    name: "Alfuzosin 10mg",
    salts: "Alfuzosin Hydrochloride 10mg",
    manufacturer: "Sanofi India",
    description: "Alpha-blocker for BPH symptoms.",
    dosage: "1 tablet daily after meal",
    category: "Men's Health",
    sideEffects: "Dizziness, headache, fatigue",
    suggestedPrice: 145
  },

  // ==================== THYROID ====================
  {
    name: "Levothyroxine 50mcg",
    salts: "Levothyroxine Sodium 50mcg",
    manufacturer: "Abbott India",
    description: "Thyroid hormone replacement for hypothyroidism.",
    dosage: "1 tablet daily on empty stomach",
    category: "Thyroid",
    sideEffects: "Palpitations, weight loss, tremor (if overdosed)",
    suggestedPrice: 45
  },
  {
    name: "Levothyroxine 100mcg",
    salts: "Levothyroxine Sodium 100mcg",
    manufacturer: "Abbott India",
    description: "Higher strength thyroid hormone for hypothyroidism.",
    dosage: "1 tablet daily on empty stomach",
    category: "Thyroid",
    sideEffects: "Palpitations, insomnia, sweating (if overdosed)",
    suggestedPrice: 65
  },
  {
    name: "Carbimazole 5mg",
    salts: "Carbimazole 5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Anti-thyroid medication for hyperthyroidism.",
    dosage: "As prescribed, usually 15-40mg daily initially",
    category: "Thyroid",
    sideEffects: "Nausea, headache, skin rash, rare bone marrow suppression",
    suggestedPrice: 35
  },
  {
    name: "Propylthiouracil 50mg",
    salts: "Propylthiouracil 50mg",
    manufacturer: "Pfizer Ltd",
    description: "Anti-thyroid drug, preferred in pregnancy first trimester.",
    dosage: "As prescribed by endocrinologist",
    category: "Thyroid",
    sideEffects: "Rash, joint pain, liver problems (rare)",
    suggestedPrice: 55
  },
  {
    name: "Liothyronine 25mcg",
    salts: "Liothyronine Sodium 25mcg",
    manufacturer: "Pfizer Ltd",
    description: "T3 thyroid hormone for specific thyroid conditions.",
    dosage: "As prescribed, usually starting 5-25mcg daily",
    category: "Thyroid",
    sideEffects: "Palpitations, nervousness, sweating",
    suggestedPrice: 195
  },

  // ==================== ADDITIONAL ANTIBIOTICS ====================
  {
    name: "Amoxyclav 625",
    salts: "Amoxicillin 500mg + Clavulanic Acid 125mg",
    manufacturer: "Cipla Ltd",
    description: "Broad-spectrum antibiotic combination for severe bacterial infections.",
    dosage: "1 tablet twice daily with food",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, skin rash",
    suggestedPrice: 165
  },
  {
    name: "Azee 500",
    salts: "Azithromycin 500mg",
    manufacturer: "Cipla Ltd",
    description: "Macrolide antibiotic for respiratory and skin infections.",
    dosage: "1 tablet daily for 3 days",
    category: "Antibiotics",
    sideEffects: "Nausea, diarrhea, abdominal pain",
    suggestedPrice: 95
  },
  {
    name: "Ciplox 500",
    salts: "Ciprofloxacin 500mg",
    manufacturer: "Cipla Ltd",
    description: "Fluoroquinolone antibiotic for UTI and respiratory infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, diarrhea, headache",
    suggestedPrice: 75
  },
  {
    name: "Monocef 200",
    salts: "Cefpodoxime Proxetil 200mg",
    manufacturer: "Aristo Pharmaceuticals",
    description: "Third-generation cephalosporin for respiratory infections.",
    dosage: "1 tablet twice daily with food",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, headache",
    suggestedPrice: 185
  },
  {
    name: "Taxim O 200",
    salts: "Cefixime 200mg",
    manufacturer: "Alkem Laboratories",
    description: "Oral cephalosporin antibiotic for bacterial infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, stomach upset, nausea",
    suggestedPrice: 125
  },
  {
    name: "Zifi 200",
    salts: "Cefixime 200mg",
    manufacturer: "FDC Limited",
    description: "Cephalosporin antibiotic for throat and ear infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, abdominal pain",
    suggestedPrice: 115
  },
  {
    name: "Moxikind CV 625",
    salts: "Amoxicillin 500mg + Clavulanic Acid 125mg",
    manufacturer: "Mankind Pharma",
    description: "Penicillin combination antibiotic for resistant infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, vomiting",
    suggestedPrice: 155
  },
  {
    name: "Ornidazole 500mg",
    salts: "Ornidazole 500mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Antiprotozoal and antibacterial for anaerobic infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, headache, dizziness",
    suggestedPrice: 65
  },
  {
    name: "Secnidazole 1g",
    salts: "Secnidazole 1000mg",
    manufacturer: "Zydus Healthcare",
    description: "Single-dose treatment for bacterial vaginosis and amoebiasis.",
    dosage: "2 tablets as single dose",
    category: "Antibiotics",
    sideEffects: "Nausea, metallic taste, headache",
    suggestedPrice: 55
  },
  {
    name: "Nitrofurantoin 100mg",
    salts: "Nitrofurantoin 100mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Urinary antiseptic for UTI treatment and prevention.",
    dosage: "1 capsule 3-4 times daily with food",
    category: "Antibiotics",
    sideEffects: "Nausea, headache, brown urine",
    suggestedPrice: 45
  },
  {
    name: "Fosfomycin 3g",
    salts: "Fosfomycin Trometamol 3g",
    manufacturer: "Cipla Ltd",
    description: "Single-dose antibiotic for uncomplicated UTI.",
    dosage: "One sachet dissolved in water as single dose",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, headache",
    suggestedPrice: 195
  },
  {
    name: "Linezolid 600mg",
    salts: "Linezolid 600mg",
    manufacturer: "Pfizer Ltd",
    description: "Oxazolidinone antibiotic for MRSA and resistant infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Headache, diarrhea, nausea",
    suggestedPrice: 485
  },
  {
    name: "Colistin 1MIU",
    salts: "Colistimethate Sodium 1 Million IU",
    manufacturer: "Sun Pharmaceutical",
    description: "Last-resort antibiotic for multidrug-resistant gram-negative infections.",
    dosage: "As per doctor's prescription",
    category: "Antibiotics",
    sideEffects: "Nephrotoxicity, neurotoxicity",
    suggestedPrice: 895
  },
  {
    name: "Vancomycin 500mg",
    salts: "Vancomycin Hydrochloride 500mg",
    manufacturer: "Cipla Ltd",
    description: "Glycopeptide antibiotic for serious gram-positive infections.",
    dosage: "As per IV protocol",
    category: "Antibiotics",
    sideEffects: "Red man syndrome, nephrotoxicity",
    suggestedPrice: 445
  },
  {
    name: "Meropenem 1g",
    salts: "Meropenem 1g",
    manufacturer: "AstraZeneca India",
    description: "Carbapenem antibiotic for severe hospital-acquired infections.",
    dosage: "1g IV every 8 hours",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, headache",
    suggestedPrice: 595
  },
  {
    name: "Faropenem 200mg",
    salts: "Faropenem Sodium 200mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Oral penem antibiotic for respiratory and urinary infections.",
    dosage: "1 tablet three times daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea, rash",
    suggestedPrice: 285
  },

  // ==================== ADDITIONAL DIABETES MEDICINES ====================
  {
    name: "Glycomet GP 1",
    salts: "Metformin 500mg + Glimepiride 1mg",
    manufacturer: "USV Private Limited",
    description: "Combination therapy for type 2 diabetes management.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, nausea, diarrhea",
    suggestedPrice: 85
  },
  {
    name: "Glycomet GP 2",
    salts: "Metformin 500mg + Glimepiride 2mg",
    manufacturer: "USV Private Limited",
    description: "Higher strength combination for uncontrolled diabetes.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain, nausea",
    suggestedPrice: 95
  },
  {
    name: "Janumet 50/500",
    salts: "Sitagliptin 50mg + Metformin 500mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "DPP-4 inhibitor combination for better glycemic control.",
    dosage: "1 tablet twice daily with meals",
    category: "Diabetes Care",
    sideEffects: "Headache, nasopharyngitis, nausea",
    suggestedPrice: 345
  },
  {
    name: "Janumet 50/1000",
    salts: "Sitagliptin 50mg + Metformin 1000mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Higher metformin combination with DPP-4 inhibitor.",
    dosage: "1 tablet twice daily with meals",
    category: "Diabetes Care",
    sideEffects: "GI upset, headache, hypoglycemia",
    suggestedPrice: 395
  },
  {
    name: "Galvus Met 50/500",
    salts: "Vildagliptin 50mg + Metformin 500mg",
    manufacturer: "Novartis India",
    description: "Vildagliptin combination for improved glucose control.",
    dosage: "1 tablet twice daily",
    category: "Diabetes Care",
    sideEffects: "Headache, dizziness, tremor",
    suggestedPrice: 265
  },
  {
    name: "Trajenta 5mg",
    salts: "Linagliptin 5mg",
    manufacturer: "Boehringer Ingelheim",
    description: "DPP-4 inhibitor safe in kidney impairment.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Nasopharyngitis, hypersensitivity",
    suggestedPrice: 295
  },
  {
    name: "Jardiance 10mg",
    salts: "Empagliflozin 10mg",
    manufacturer: "Boehringer Ingelheim",
    description: "SGLT2 inhibitor with cardiovascular benefits.",
    dosage: "1 tablet once daily in morning",
    category: "Diabetes Care",
    sideEffects: "UTI, genital infection, increased urination",
    suggestedPrice: 345
  },
  {
    name: "Jardiance 25mg",
    salts: "Empagliflozin 25mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Higher strength SGLT2 inhibitor for optimal control.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "Genital mycotic infections, polyuria",
    suggestedPrice: 395
  },
  {
    name: "Forxiga 10mg",
    salts: "Dapagliflozin 10mg",
    manufacturer: "AstraZeneca India",
    description: "SGLT2 inhibitor for diabetes and heart failure.",
    dosage: "1 tablet once daily",
    category: "Diabetes Care",
    sideEffects: "UTI, genital infection, thirst",
    suggestedPrice: 315
  },
  {
    name: "Invokana 100mg",
    salts: "Canagliflozin 100mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "First SGLT2 inhibitor for type 2 diabetes.",
    dosage: "1 tablet once daily before breakfast",
    category: "Diabetes Care",
    sideEffects: "Genital infection, UTI, hypotension",
    suggestedPrice: 335
  },
  {
    name: "Rybelsus 7mg",
    salts: "Semaglutide 7mg",
    manufacturer: "Novo Nordisk",
    description: "First oral GLP-1 receptor agonist for diabetes.",
    dosage: "1 tablet on empty stomach with water",
    category: "Diabetes Care",
    sideEffects: "Nausea, diarrhea, decreased appetite",
    suggestedPrice: 1895
  },
  {
    name: "Rybelsus 14mg",
    salts: "Semaglutide 14mg",
    manufacturer: "Novo Nordisk",
    description: "Higher strength oral GLP-1 agonist.",
    dosage: "1 tablet on empty stomach",
    category: "Diabetes Care",
    sideEffects: "Nausea, vomiting, abdominal pain",
    suggestedPrice: 2195
  },
  {
    name: "Trulicity 1.5mg",
    salts: "Dulaglutide 1.5mg",
    manufacturer: "Eli Lilly India",
    description: "Once-weekly injectable GLP-1 agonist.",
    dosage: "1 injection subcutaneously once weekly",
    category: "Diabetes Care",
    sideEffects: "Nausea, diarrhea, vomiting",
    suggestedPrice: 2495
  },
  {
    name: "Victoza 6mg/ml",
    salts: "Liraglutide 6mg/ml",
    manufacturer: "Novo Nordisk",
    description: "Daily injectable GLP-1 agonist for diabetes and weight loss.",
    dosage: "0.6-1.8mg subcutaneously once daily",
    category: "Diabetes Care",
    sideEffects: "Nausea, hypoglycemia, injection site reactions",
    suggestedPrice: 4995
  },
  {
    name: "Acarbose 50mg",
    salts: "Acarbose 50mg",
    manufacturer: "Bayer",
    description: "Alpha-glucosidase inhibitor for postprandial glucose control.",
    dosage: "1 tablet with first bite of each meal",
    category: "Diabetes Care",
    sideEffects: "Flatulence, bloating, diarrhea",
    suggestedPrice: 75
  },
  {
    name: "Voglibose 0.2mg",
    salts: "Voglibose 0.2mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "Alpha-glucosidase inhibitor for post-meal sugar spikes.",
    dosage: "1 tablet before each meal",
    category: "Diabetes Care",
    sideEffects: "Flatulence, soft stools, abdominal distension",
    suggestedPrice: 65
  },
  {
    name: "Repaglinide 1mg",
    salts: "Repaglinide 1mg",
    manufacturer: "Novo Nordisk",
    description: "Meglitinide for mealtime glucose control.",
    dosage: "1 tablet before each meal",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain",
    suggestedPrice: 95
  },
  {
    name: "Insulin Aspart",
    salts: "Insulin Aspart 100IU/ml",
    manufacturer: "Novo Nordisk",
    description: "Rapid-acting insulin analog for mealtime coverage.",
    dosage: "As prescribed, before meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, injection site reactions",
    suggestedPrice: 895
  },
  {
    name: "Insulin Lispro",
    salts: "Insulin Lispro 100IU/ml",
    manufacturer: "Eli Lilly India",
    description: "Fast-acting insulin for blood sugar control at meals.",
    dosage: "Inject 15 minutes before meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, lipodystrophy",
    suggestedPrice: 945
  },
  {
    name: "Insulin Degludec",
    salts: "Insulin Degludec 100IU/ml",
    manufacturer: "Novo Nordisk",
    description: "Ultra-long-acting basal insulin with flexible dosing.",
    dosage: "Once daily at any time",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain",
    suggestedPrice: 1495
  },

  // ==================== ADDITIONAL HEART MEDICINES ====================
  {
    name: "Ecosprin 75",
    salts: "Aspirin 75mg (Enteric Coated)",
    manufacturer: "USV Private Limited",
    description: "Enteric-coated aspirin for cardiovascular protection.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "GI bleeding, bruising",
    suggestedPrice: 15
  },
  {
    name: "Ecosprin AV 75/10",
    salts: "Aspirin 75mg + Atorvastatin 10mg",
    manufacturer: "USV Private Limited",
    description: "Combination for cardiovascular risk reduction.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "GI upset, muscle pain",
    suggestedPrice: 95
  },
  {
    name: "Ecosprin AV 75/20",
    salts: "Aspirin 75mg + Atorvastatin 20mg",
    manufacturer: "USV Private Limited",
    description: "Higher statin combination for CV protection.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "Muscle aches, GI bleeding",
    suggestedPrice: 125
  },
  {
    name: "Clopitab A 75/75",
    salts: "Clopidogrel 75mg + Aspirin 75mg",
    manufacturer: "Lupin Ltd",
    description: "Dual antiplatelet therapy post-stent or MI.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising, GI upset",
    suggestedPrice: 125
  },
  {
    name: "Prasugrel 10mg",
    salts: "Prasugrel 10mg",
    manufacturer: "Eli Lilly India",
    description: "Potent antiplatelet for acute coronary syndrome.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising",
    suggestedPrice: 195
  },
  {
    name: "Ticagrelor 90mg",
    salts: "Ticagrelor 90mg",
    manufacturer: "AstraZeneca India",
    description: "Reversible antiplatelet for ACS management.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Dyspnea, bleeding, bradycardia",
    suggestedPrice: 245
  },
  {
    name: "Rivaroxaban 10mg",
    salts: "Rivaroxaban 10mg",
    manufacturer: "Bayer",
    description: "Direct oral anticoagulant for DVT prophylaxis.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, anemia",
    suggestedPrice: 195
  },
  {
    name: "Rivaroxaban 20mg",
    salts: "Rivaroxaban 20mg",
    manufacturer: "Bayer",
    description: "DOAC for stroke prevention in atrial fibrillation.",
    dosage: "1 tablet once daily with food",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising",
    suggestedPrice: 245
  },
  {
    name: "Apixaban 5mg",
    salts: "Apixaban 5mg",
    manufacturer: "Pfizer Ltd",
    description: "Factor Xa inhibitor for AF and DVT/PE.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Bleeding, nausea",
    suggestedPrice: 195
  },
  {
    name: "Dabigatran 150mg",
    salts: "Dabigatran Etexilate 150mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Direct thrombin inhibitor for stroke prevention.",
    dosage: "1 capsule twice daily",
    category: "Heart Health",
    sideEffects: "Bleeding, dyspepsia",
    suggestedPrice: 225
  },
  {
    name: "Warfarin 5mg",
    salts: "Warfarin Sodium 5mg",
    manufacturer: "Cipla Ltd",
    description: "Vitamin K antagonist for anticoagulation.",
    dosage: "As per INR monitoring",
    category: "Heart Health",
    sideEffects: "Bleeding, skin necrosis",
    suggestedPrice: 25
  },
  {
    name: "Ivabradine 5mg",
    salts: "Ivabradine 5mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Heart rate lowering agent for angina and heart failure.",
    dosage: "1 tablet twice daily with meals",
    category: "Heart Health",
    sideEffects: "Bradycardia, visual disturbances",
    suggestedPrice: 195
  },
  {
    name: "Ranolazine 500mg",
    salts: "Ranolazine 500mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Anti-anginal for chronic stable angina.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Dizziness, constipation, nausea",
    suggestedPrice: 245
  },
  {
    name: "Trimetazidine 35mg",
    salts: "Trimetazidine MR 35mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Metabolic modulator for angina.",
    dosage: "1 tablet twice daily with meals",
    category: "Heart Health",
    sideEffects: "GI upset, dizziness, headache",
    suggestedPrice: 125
  },
  {
    name: "Sacubitril/Valsartan 50mg",
    salts: "Sacubitril 24mg + Valsartan 26mg",
    manufacturer: "Novartis India",
    description: "ARNI for heart failure with reduced ejection fraction.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Hypotension, hyperkalemia, cough",
    suggestedPrice: 345
  },
  {
    name: "Sacubitril/Valsartan 100mg",
    salts: "Sacubitril 49mg + Valsartan 51mg",
    manufacturer: "Novartis India",
    description: "Higher dose ARNI for HFrEF.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Hypotension, renal impairment",
    suggestedPrice: 445
  },
  {
    name: "Spironolactone 25mg",
    salts: "Spironolactone 25mg",
    manufacturer: "RPG Life Sciences",
    description: "Potassium-sparing diuretic for heart failure and hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hyperkalemia, gynecomastia",
    suggestedPrice: 35
  },
  {
    name: "Eplerenone 25mg",
    salts: "Eplerenone 25mg",
    manufacturer: "Pfizer Ltd",
    description: "Selective aldosterone blocker for heart failure.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hyperkalemia, dizziness",
    suggestedPrice: 195
  },
  {
    name: "Furosemide 40mg",
    salts: "Furosemide 40mg",
    manufacturer: "Sanofi India",
    description: "Loop diuretic for edema and heart failure.",
    dosage: "1-2 tablets in morning",
    category: "Heart Health",
    sideEffects: "Electrolyte imbalance, dehydration",
    suggestedPrice: 15
  },
  {
    name: "Torsemide 10mg",
    salts: "Torsemide 10mg",
    manufacturer: "Cadila Healthcare",
    description: "Loop diuretic with better bioavailability.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hypokalemia, dizziness",
    suggestedPrice: 45
  },
  {
    name: "Hydrochlorothiazide 12.5mg",
    salts: "Hydrochlorothiazide 12.5mg",
    manufacturer: "Ipca Laboratories",
    description: "Thiazide diuretic for hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hypokalemia, hyperuricemia",
    suggestedPrice: 15
  },
  {
    name: "Indapamide 1.5mg",
    salts: "Indapamide SR 1.5mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Thiazide-like diuretic for hypertension.",
    dosage: "1 tablet once daily in morning",
    category: "Heart Health",
    sideEffects: "Hypokalemia, fatigue",
    suggestedPrice: 55
  },
  {
    name: "Carvedilol 6.25mg",
    salts: "Carvedilol 6.25mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Alpha-beta blocker for heart failure and hypertension.",
    dosage: "1 tablet twice daily with food",
    category: "Heart Health",
    sideEffects: "Dizziness, fatigue, bradycardia",
    suggestedPrice: 35
  },
  {
    name: "Carvedilol 12.5mg",
    salts: "Carvedilol 12.5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Higher strength carvedilol for cardiac conditions.",
    dosage: "1 tablet twice daily with food",
    category: "Heart Health",
    sideEffects: "Hypotension, dizziness, fatigue",
    suggestedPrice: 55
  },
  {
    name: "Atenolol 50mg",
    salts: "Atenolol 50mg",
    manufacturer: "Cipla Ltd",
    description: "Cardioselective beta-blocker for hypertension and angina.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bradycardia, fatigue, cold extremities",
    suggestedPrice: 25
  },
  {
    name: "Propranolol 40mg",
    salts: "Propranolol Hydrochloride 40mg",
    manufacturer: "Abbott India",
    description: "Non-selective beta-blocker for multiple indications.",
    dosage: "1 tablet 2-3 times daily",
    category: "Heart Health",
    sideEffects: "Bradycardia, fatigue, bronchospasm",
    suggestedPrice: 25
  },
  {
    name: "Verapamil 80mg",
    salts: "Verapamil Hydrochloride 80mg",
    manufacturer: "Abbott India",
    description: "Calcium channel blocker for angina and arrhythmia.",
    dosage: "1 tablet 3 times daily",
    category: "Heart Health",
    sideEffects: "Constipation, dizziness, bradycardia",
    suggestedPrice: 35
  },
  {
    name: "Cilnidipine 10mg",
    salts: "Cilnidipine 10mg",
    manufacturer: "J.B. Chemicals",
    description: "Dual channel blocker for hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Headache, flushing, palpitations",
    suggestedPrice: 95
  },
  {
    name: "Azilsartan 40mg",
    salts: "Azilsartan Medoxomil 40mg",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Potent ARB for hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, diarrhea, fatigue",
    suggestedPrice: 145
  },
  {
    name: "Perindopril 4mg",
    salts: "Perindopril Erbumine 4mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "ACE inhibitor with tissue penetration.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dry cough, dizziness, hyperkalemia",
    suggestedPrice: 85
  },
  {
    name: "Lisinopril 5mg",
    salts: "Lisinopril 5mg",
    manufacturer: "Lupin Ltd",
    description: "Long-acting ACE inhibitor for BP and heart failure.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dry cough, dizziness, angioedema",
    suggestedPrice: 45
  },
  {
    name: "Fenofibrate 160mg",
    salts: "Fenofibrate 160mg",
    manufacturer: "Abbott India",
    description: "Fibrate for high triglycerides and mixed dyslipidemia.",
    dosage: "1 tablet once daily with food",
    category: "Heart Health",
    sideEffects: "Myopathy, GI upset, gallstones",
    suggestedPrice: 145
  },
  {
    name: "Ezetimibe 10mg",
    salts: "Ezetimibe 10mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Cholesterol absorption inhibitor.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Diarrhea, fatigue, muscle pain",
    suggestedPrice: 165
  },
  {
    name: "Rosuvastatin + Ezetimibe",
    salts: "Rosuvastatin 10mg + Ezetimibe 10mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Dual mechanism for aggressive LDL lowering.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "Myalgia, headache, GI upset",
    suggestedPrice: 245
  },

  // ==================== ADDITIONAL DIGESTIVE HEALTH ====================
  {
    name: "Pan D",
    salts: "Pantoprazole 40mg + Domperidone 30mg",
    manufacturer: "Alkem Laboratories",
    description: "PPI with prokinetic for GERD with bloating.",
    dosage: "1 capsule before breakfast",
    category: "Digestive Health",
    sideEffects: "Headache, dry mouth, diarrhea",
    suggestedPrice: 95
  },
  {
    name: "Rantac 150",
    salts: "Ranitidine 150mg",
    manufacturer: "J.B. Chemicals",
    description: "H2 blocker for acid peptic disorders.",
    dosage: "1 tablet twice daily",
    category: "Digestive Health",
    sideEffects: "Headache, constipation",
    suggestedPrice: 25
  },
  {
    name: "Omez 20",
    salts: "Omeprazole 20mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "PPI for acid reflux and ulcers.",
    dosage: "1 capsule before breakfast",
    category: "Digestive Health",
    sideEffects: "Headache, nausea, diarrhea",
    suggestedPrice: 55
  },
  {
    name: "Nexpro 40",
    salts: "Esomeprazole 40mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "S-isomer PPI for better acid control.",
    dosage: "1 tablet before breakfast",
    category: "Digestive Health",
    sideEffects: "Headache, flatulence, abdominal pain",
    suggestedPrice: 115
  },
  {
    name: "Razo 20",
    salts: "Rabeprazole 20mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Fast-onset PPI for GERD.",
    dosage: "1 tablet before breakfast",
    category: "Digestive Health",
    sideEffects: "Headache, diarrhea",
    suggestedPrice: 85
  },
  {
    name: "Dexlansoprazole 60mg",
    salts: "Dexlansoprazole 60mg",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Dual delayed-release PPI for erosive esophagitis.",
    dosage: "1 capsule once daily",
    category: "Digestive Health",
    sideEffects: "Diarrhea, abdominal pain, nausea",
    suggestedPrice: 195
  },
  {
    name: "Vonoprazan 20mg",
    salts: "Vonoprazan 20mg",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Potassium-competitive acid blocker for GERD.",
    dosage: "1 tablet once daily",
    category: "Digestive Health",
    sideEffects: "Diarrhea, nasopharyngitis",
    suggestedPrice: 245
  },
  {
    name: "Itopride 50mg",
    salts: "Itopride Hydrochloride 50mg",
    manufacturer: "Abbott India",
    description: "Prokinetic for gastroparesis and dyspepsia.",
    dosage: "1 tablet 3 times daily before meals",
    category: "Digestive Health",
    sideEffects: "Diarrhea, headache, abdominal pain",
    suggestedPrice: 75
  },
  {
    name: "Levosulpiride 25mg",
    salts: "Levosulpiride 25mg",
    manufacturer: "Intas Pharmaceuticals",
    description: "Prokinetic and anti-emetic for GI disorders.",
    dosage: "1 tablet 3 times daily",
    category: "Digestive Health",
    sideEffects: "Drowsiness, galactorrhea, amenorrhea",
    suggestedPrice: 65
  },
  {
    name: "Prucalopride 2mg",
    salts: "Prucalopride 2mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "5-HT4 agonist for chronic constipation.",
    dosage: "1 tablet once daily",
    category: "Digestive Health",
    sideEffects: "Headache, nausea, diarrhea",
    suggestedPrice: 195
  },
  {
    name: "Lubiprostone 24mcg",
    salts: "Lubiprostone 24mcg",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Chloride channel activator for chronic constipation.",
    dosage: "1 capsule twice daily with food",
    category: "Digestive Health",
    sideEffects: "Nausea, diarrhea, headache",
    suggestedPrice: 295
  },
  {
    name: "Linaclotide 145mcg",
    salts: "Linaclotide 145mcg",
    manufacturer: "Ironwood Pharmaceuticals",
    description: "Guanylate cyclase-C agonist for IBS-C.",
    dosage: "1 capsule once daily on empty stomach",
    category: "Digestive Health",
    sideEffects: "Diarrhea, flatulence, abdominal pain",
    suggestedPrice: 345
  },
  {
    name: "Rifagut 400",
    salts: "Rifaximin 400mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Non-absorbable antibiotic for IBS and traveler's diarrhea.",
    dosage: "1 tablet 3 times daily",
    category: "Digestive Health",
    sideEffects: "Nausea, flatulence, headache",
    suggestedPrice: 195
  },
  {
    name: "Eluxadoline 100mg",
    salts: "Eluxadoline 100mg",
    manufacturer: "Allergan India",
    description: "Mixed opioid receptor modulator for IBS-D.",
    dosage: "1 tablet twice daily with food",
    category: "Digestive Health",
    sideEffects: "Constipation, nausea, abdominal pain",
    suggestedPrice: 445
  },
  {
    name: "Pancreatin",
    salts: "Pancreatin 10000 USP Units",
    manufacturer: "Abbott India",
    description: "Pancreatic enzyme supplement for maldigestion.",
    dosage: "1-2 capsules with meals",
    category: "Digestive Health",
    sideEffects: "Nausea, abdominal cramps",
    suggestedPrice: 195
  },
  {
    name: "Ursodiol 300mg",
    salts: "Ursodeoxycholic Acid 300mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Bile acid for gallstones and liver disease.",
    dosage: "1-2 capsules twice daily",
    category: "Digestive Health",
    sideEffects: "Diarrhea, itching",
    suggestedPrice: 165
  },
  {
    name: "S-Adenosyl Methionine 400mg",
    salts: "SAMe 400mg",
    manufacturer: "Zydus Healthcare",
    description: "Hepatoprotective supplement for liver health.",
    dosage: "1 tablet twice daily",
    category: "Digestive Health",
    sideEffects: "Nausea, insomnia, anxiety",
    suggestedPrice: 295
  },
  {
    name: "Silymarin 140mg",
    salts: "Milk Thistle Extract 140mg",
    manufacturer: "Himalaya Wellness",
    description: "Herbal hepatoprotective for liver support.",
    dosage: "1 capsule twice daily",
    category: "Digestive Health",
    sideEffects: "Mild laxative effect, allergic reactions",
    suggestedPrice: 145
  },
  {
    name: "Probiotics",
    salts: "Lactobacillus + Bifidobacterium 2 Billion CFU",
    manufacturer: "USV Private Limited",
    description: "Probiotic supplement for gut health.",
    dosage: "1 capsule twice daily",
    category: "Digestive Health",
    sideEffects: "Bloating initially, flatulence",
    suggestedPrice: 195
  },
  {
    name: "VSL#3",
    salts: "8-Strain Probiotic 450 Billion CFU",
    manufacturer: "Sun Pharmaceutical",
    description: "High-potency probiotic for IBD and IBS.",
    dosage: "1-2 sachets daily",
    category: "Digestive Health",
    sideEffects: "Bloating, flatulence initially",
    suggestedPrice: 495
  },

  // ==================== ADDITIONAL PAIN & INFLAMMATION ====================
  {
    name: "Combiflam",
    salts: "Ibuprofen 400mg + Paracetamol 325mg",
    manufacturer: "Sanofi India",
    description: "Combination analgesic for pain and fever.",
    dosage: "1 tablet 2-3 times daily after food",
    category: "Bone & Joint",
    sideEffects: "Stomach upset, nausea",
    suggestedPrice: 35
  },
  {
    name: "Zerodol SP",
    salts: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    manufacturer: "Ipca Laboratories",
    description: "Triple combination for pain and inflammation.",
    dosage: "1 tablet twice daily after meals",
    category: "Bone & Joint",
    sideEffects: "GI upset, diarrhea",
    suggestedPrice: 65
  },
  {
    name: "Hifenac P",
    salts: "Aceclofenac 100mg + Paracetamol 325mg",
    manufacturer: "Intas Pharmaceuticals",
    description: "Analgesic combination for musculoskeletal pain.",
    dosage: "1 tablet twice daily",
    category: "Bone & Joint",
    sideEffects: "Nausea, dyspepsia",
    suggestedPrice: 45
  },
  {
    name: "Nimesulide 100mg",
    salts: "Nimesulide 100mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Selective COX-2 inhibitor for pain relief.",
    dosage: "1 tablet twice daily after meals",
    category: "Bone & Joint",
    sideEffects: "GI upset, hepatotoxicity (rare)",
    suggestedPrice: 35
  },
  {
    name: "Piroxicam 20mg",
    salts: "Piroxicam 20mg",
    manufacturer: "Pfizer Ltd",
    description: "Long-acting NSAID for arthritis.",
    dosage: "1 capsule once daily",
    category: "Bone & Joint",
    sideEffects: "GI bleeding, edema, rash",
    suggestedPrice: 45
  },
  {
    name: "Meloxicam 15mg",
    salts: "Meloxicam 15mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Preferential COX-2 inhibitor for OA and RA.",
    dosage: "1 tablet once daily",
    category: "Bone & Joint",
    sideEffects: "GI upset, dizziness, edema",
    suggestedPrice: 75
  },
  {
    name: "Etodolac 400mg",
    salts: "Etodolac 400mg",
    manufacturer: "Wyeth",
    description: "NSAID with COX-2 selectivity for arthritis.",
    dosage: "1 tablet twice daily",
    category: "Bone & Joint",
    sideEffects: "Dyspepsia, dizziness, rash",
    suggestedPrice: 95
  },
  {
    name: "Indomethacin 25mg",
    salts: "Indomethacin 25mg",
    manufacturer: "Merck Ltd",
    description: "Potent NSAID for gout and RA.",
    dosage: "1 capsule 2-3 times daily",
    category: "Bone & Joint",
    sideEffects: "GI upset, headache, dizziness",
    suggestedPrice: 35
  },
  {
    name: "Colchicine 0.5mg",
    salts: "Colchicine 0.5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Anti-gout medication for acute attacks.",
    dosage: "1 tablet 2-3 times daily during attack",
    category: "Bone & Joint",
    sideEffects: "Diarrhea, nausea, vomiting",
    suggestedPrice: 25
  },
  {
    name: "Febuxostat 40mg",
    salts: "Febuxostat 40mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Xanthine oxidase inhibitor for gout prevention.",
    dosage: "1 tablet once daily",
    category: "Bone & Joint",
    sideEffects: "Liver enzyme elevation, nausea, rash",
    suggestedPrice: 125
  },
  {
    name: "Febuxostat 80mg",
    salts: "Febuxostat 80mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Higher strength for refractory hyperuricemia.",
    dosage: "1 tablet once daily",
    category: "Bone & Joint",
    sideEffects: "Gout flare, liver issues",
    suggestedPrice: 175
  },
  {
    name: "Allopurinol 100mg",
    salts: "Allopurinol 100mg",
    manufacturer: "Zydus Healthcare",
    description: "Uric acid lowering agent for chronic gout.",
    dosage: "1-3 tablets daily",
    category: "Bone & Joint",
    sideEffects: "Rash, GI upset, gout flare",
    suggestedPrice: 25
  },
  {
    name: "Tramadol 50mg",
    salts: "Tramadol Hydrochloride 50mg",
    manufacturer: "Johnson & Johnson",
    description: "Centrally acting opioid analgesic for moderate pain.",
    dosage: "1 capsule every 4-6 hours as needed",
    category: "Bone & Joint",
    sideEffects: "Nausea, dizziness, constipation, dependence",
    suggestedPrice: 35
  },
  {
    name: "Tapentadol 50mg",
    salts: "Tapentadol 50mg",
    manufacturer: "Johnson & Johnson",
    description: "Dual mechanism opioid for moderate to severe pain.",
    dosage: "1 tablet every 4-6 hours",
    category: "Bone & Joint",
    sideEffects: "Nausea, dizziness, somnolence",
    suggestedPrice: 85
  },
  {
    name: "Pregabalin 75mg",
    salts: "Pregabalin 75mg",
    manufacturer: "Pfizer Ltd",
    description: "Gabapentinoid for neuropathic pain and fibromyalgia.",
    dosage: "1 capsule twice daily",
    category: "Bone & Joint",
    sideEffects: "Dizziness, somnolence, weight gain",
    suggestedPrice: 95
  },
  {
    name: "Pregabalin 150mg",
    salts: "Pregabalin 150mg",
    manufacturer: "Pfizer Ltd",
    description: "Higher strength for severe neuropathic pain.",
    dosage: "1 capsule twice daily",
    category: "Bone & Joint",
    sideEffects: "Peripheral edema, blurred vision",
    suggestedPrice: 145
  },
  {
    name: "Gabapentin 300mg",
    salts: "Gabapentin 300mg",
    manufacturer: "Pfizer Ltd",
    description: "Anticonvulsant for neuropathic pain.",
    dosage: "1 capsule 3 times daily",
    category: "Bone & Joint",
    sideEffects: "Dizziness, fatigue, ataxia",
    suggestedPrice: 75
  },
  {
    name: "Duloxetine 30mg",
    salts: "Duloxetine 30mg",
    manufacturer: "Eli Lilly India",
    description: "SNRI for diabetic neuropathy and fibromyalgia pain.",
    dosage: "1 capsule once daily",
    category: "Bone & Joint",
    sideEffects: "Nausea, dry mouth, constipation",
    suggestedPrice: 125
  },
  {
    name: "Risedronate 35mg",
    salts: "Risedronate Sodium 35mg",
    manufacturer: "Sanofi India",
    description: "Weekly bisphosphonate for osteoporosis.",
    dosage: "1 tablet once weekly in morning",
    category: "Bone & Joint",
    sideEffects: "GI upset, musculoskeletal pain",
    suggestedPrice: 245
  },
  {
    name: "Ibandronate 150mg",
    salts: "Ibandronic Acid 150mg",
    manufacturer: "Roche India",
    description: "Monthly bisphosphonate for osteoporosis.",
    dosage: "1 tablet once monthly",
    category: "Bone & Joint",
    sideEffects: "Esophageal irritation, bone pain",
    suggestedPrice: 395
  },
  {
    name: "Zoledronic Acid 5mg",
    salts: "Zoledronic Acid 5mg/100ml",
    manufacturer: "Novartis India",
    description: "Annual IV bisphosphonate for osteoporosis.",
    dosage: "5mg IV infusion once yearly",
    category: "Bone & Joint",
    sideEffects: "Flu-like symptoms, renal impairment",
    suggestedPrice: 8995
  },
  {
    name: "Denosumab 60mg",
    salts: "Denosumab 60mg",
    manufacturer: "Amgen",
    description: "RANKL inhibitor for osteoporosis.",
    dosage: "60mg subcutaneous every 6 months",
    category: "Bone & Joint",
    sideEffects: "Back pain, arthralgia, hypocalcemia",
    suggestedPrice: 7995
  },
  {
    name: "Teriparatide 20mcg",
    salts: "Teriparatide 20mcg",
    manufacturer: "Eli Lilly India",
    description: "Parathyroid hormone analog for severe osteoporosis.",
    dosage: "20mcg subcutaneous daily",
    category: "Bone & Joint",
    sideEffects: "Nausea, headache, dizziness",
    suggestedPrice: 12995
  },
  {
    name: "Romosozumab 105mg",
    salts: "Romosozumab 105mg",
    manufacturer: "Amgen",
    description: "Sclerostin inhibitor for postmenopausal osteoporosis.",
    dosage: "210mg subcutaneous monthly",
    category: "Bone & Joint",
    sideEffects: "Arthralgia, headache, injection site reactions",
    suggestedPrice: 24995
  },
  {
    name: "Strontium Ranelate 2g",
    salts: "Strontium Ranelate 2g",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Dual action agent for osteoporosis.",
    dosage: "1 sachet daily at bedtime",
    category: "Bone & Joint",
    sideEffects: "Nausea, diarrhea, headache",
    suggestedPrice: 295
  },

  // ==================== ADDITIONAL MENTAL WELLNESS ====================
  {
    name: "Amitriptyline 25mg",
    salts: "Amitriptyline Hydrochloride 25mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Tricyclic antidepressant for depression and neuropathic pain.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Sedation, dry mouth, constipation",
    suggestedPrice: 25
  },
  {
    name: "Nortriptyline 25mg",
    salts: "Nortriptyline Hydrochloride 25mg",
    manufacturer: "Sun Pharmaceutical",
    description: "TCA with less sedation for depression.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Dry mouth, constipation, urinary retention",
    suggestedPrice: 35
  },
  {
    name: "Clomipramine 25mg",
    salts: "Clomipramine Hydrochloride 25mg",
    manufacturer: "Sun Pharmaceutical",
    description: "TCA especially effective for OCD.",
    dosage: "1 tablet at bedtime, titrate up",
    category: "Mental Wellness",
    sideEffects: "Sedation, weight gain, sexual dysfunction",
    suggestedPrice: 45
  },
  {
    name: "Imipramine 25mg",
    salts: "Imipramine Hydrochloride 25mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Classic TCA for depression and enuresis.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Dry mouth, sedation, orthostatic hypotension",
    suggestedPrice: 25
  },
  {
    name: "Trazodone 50mg",
    salts: "Trazodone Hydrochloride 50mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Atypical antidepressant useful for insomnia.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, dizziness, dry mouth",
    suggestedPrice: 55
  },
  {
    name: "Agomelatine 25mg",
    salts: "Agomelatine 25mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Melatonergic antidepressant with circadian effects.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Headache, dizziness, liver enzyme elevation",
    suggestedPrice: 195
  },
  {
    name: "Vortioxetine 10mg",
    salts: "Vortioxetine 10mg",
    manufacturer: "Lundbeck India",
    description: "Multimodal antidepressant with cognitive benefits.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Nausea, headache, dizziness",
    suggestedPrice: 295
  },
  {
    name: "Vilazodone 20mg",
    salts: "Vilazodone 20mg",
    manufacturer: "Allergan India",
    description: "SSRI plus 5-HT1A partial agonist for depression.",
    dosage: "1 tablet once daily with food",
    category: "Mental Wellness",
    sideEffects: "Diarrhea, nausea, insomnia",
    suggestedPrice: 245
  },
  {
    name: "Desvenlafaxine 50mg",
    salts: "Desvenlafaxine Succinate 50mg",
    manufacturer: "Pfizer Ltd",
    description: "Active metabolite of venlafaxine for MDD.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Nausea, headache, dizziness",
    suggestedPrice: 145
  },
  {
    name: "Milnacipran 50mg",
    salts: "Milnacipran 50mg",
    manufacturer: "Pierre Fabre",
    description: "SNRI for fibromyalgia and depression.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Nausea, headache, constipation",
    suggestedPrice: 195
  },
  {
    name: "Diazepam 5mg",
    salts: "Diazepam 5mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "Benzodiazepine for anxiety, seizures, muscle spasm.",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Sedation, dependence, ataxia",
    suggestedPrice: 15
  },
  {
    name: "Oxazepam 15mg",
    salts: "Oxazepam 15mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Short-acting benzodiazepine for anxiety.",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Sedation, dizziness, dependence",
    suggestedPrice: 25
  },
  {
    name: "Buspirone 10mg",
    salts: "Buspirone Hydrochloride 10mg",
    manufacturer: "Bristol-Myers Squibb",
    description: "Non-benzodiazepine anxiolytic without dependence.",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Dizziness, nausea, headache",
    suggestedPrice: 85
  },
  {
    name: "Hydroxyzine 25mg",
    salts: "Hydroxyzine Hydrochloride 25mg",
    manufacturer: "UCB India",
    description: "Antihistamine with anxiolytic properties.",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 35
  },
  {
    name: "Eszopiclone 2mg",
    salts: "Eszopiclone 2mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Non-benzodiazepine hypnotic for insomnia.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Unpleasant taste, dizziness, drowsiness",
    suggestedPrice: 95
  },
  {
    name: "Zaleplon 10mg",
    salts: "Zaleplon 10mg",
    manufacturer: "King Pharmaceuticals",
    description: "Ultra-short acting sleep aid for sleep onset.",
    dosage: "1 capsule at bedtime",
    category: "Mental Wellness",
    sideEffects: "Dizziness, headache, amnesia",
    suggestedPrice: 85
  },
  {
    name: "Ramelteon 8mg",
    salts: "Ramelteon 8mg",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Melatonin receptor agonist for sleep onset insomnia.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Somnolence, dizziness, fatigue",
    suggestedPrice: 195
  },
  {
    name: "Suvorexant 10mg",
    salts: "Suvorexant 10mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Orexin receptor antagonist for insomnia.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Somnolence, headache, abnormal dreams",
    suggestedPrice: 295
  },
  {
    name: "Lemborexant 5mg",
    salts: "Lemborexant 5mg",
    manufacturer: "Eisai",
    description: "Dual orexin receptor antagonist for sleep maintenance.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Somnolence, headache, sleep paralysis",
    suggestedPrice: 345
  },
  {
    name: "Aripiprazole 10mg",
    salts: "Aripiprazole 10mg",
    manufacturer: "Otsuka Pharmaceuticals",
    description: "Atypical antipsychotic for schizophrenia and bipolar.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Akathisia, nausea, insomnia",
    suggestedPrice: 195
  },
  {
    name: "Ziprasidone 40mg",
    salts: "Ziprasidone Hydrochloride 40mg",
    manufacturer: "Pfizer Ltd",
    description: "Atypical antipsychotic with lower metabolic effects.",
    dosage: "1 capsule twice daily with food",
    category: "Mental Wellness",
    sideEffects: "Somnolence, nausea, QT prolongation",
    suggestedPrice: 145
  },
  {
    name: "Paliperidone 6mg",
    salts: "Paliperidone ER 6mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Active metabolite of risperidone for schizophrenia.",
    dosage: "1 tablet once daily in morning",
    category: "Mental Wellness",
    sideEffects: "Extrapyramidal symptoms, weight gain",
    suggestedPrice: 245
  },
  {
    name: "Lurasidone 40mg",
    salts: "Lurasidone 40mg",
    manufacturer: "Sumitomo Pharma",
    description: "Atypical antipsychotic with mood stabilizing properties.",
    dosage: "1 tablet once daily with food",
    category: "Mental Wellness",
    sideEffects: "Akathisia, somnolence, nausea",
    suggestedPrice: 295
  },
  {
    name: "Cariprazine 3mg",
    salts: "Cariprazine 3mg",
    manufacturer: "Allergan India",
    description: "D3-preferring antipsychotic for schizophrenia.",
    dosage: "1 capsule once daily",
    category: "Mental Wellness",
    sideEffects: "Akathisia, extrapyramidal symptoms",
    suggestedPrice: 395
  },
  {
    name: "Brexpiprazole 2mg",
    salts: "Brexpiprazole 2mg",
    manufacturer: "Otsuka Pharmaceuticals",
    description: "Partial dopamine agonist for schizophrenia and MDD.",
    dosage: "1 tablet once daily",
    category: "Mental Wellness",
    sideEffects: "Weight gain, akathisia, somnolence",
    suggestedPrice: 445
  },
  {
    name: "Asenapine 5mg",
    salts: "Asenapine 5mg",
    manufacturer: "Allergan India",
    description: "Sublingual antipsychotic for schizophrenia and bipolar.",
    dosage: "1 tablet sublingually twice daily",
    category: "Mental Wellness",
    sideEffects: "Somnolence, oral hypoesthesia, dizziness",
    suggestedPrice: 195
  },
  {
    name: "Lithium 300mg",
    salts: "Lithium Carbonate 300mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Mood stabilizer for bipolar disorder.",
    dosage: "As per blood level monitoring",
    category: "Mental Wellness",
    sideEffects: "Tremor, polyuria, thyroid effects",
    suggestedPrice: 35
  },
  {
    name: "Valproate 500mg",
    salts: "Sodium Valproate 500mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Anticonvulsant mood stabilizer for bipolar.",
    dosage: "1-2 tablets twice daily",
    category: "Mental Wellness",
    sideEffects: "Weight gain, tremor, hair loss",
    suggestedPrice: 55
  },
  {
    name: "Lamotrigine 100mg",
    salts: "Lamotrigine 100mg",
    manufacturer: "GlaxoSmithKline",
    description: "Mood stabilizer for bipolar depression.",
    dosage: "1 tablet once or twice daily (slow titration)",
    category: "Mental Wellness",
    sideEffects: "Rash (serious), headache, dizziness",
    suggestedPrice: 85
  },
  {
    name: "Carbamazepine 200mg",
    salts: "Carbamazepine 200mg",
    manufacturer: "Novartis India",
    description: "Anticonvulsant for bipolar and trigeminal neuralgia.",
    dosage: "1 tablet 2-3 times daily",
    category: "Mental Wellness",
    sideEffects: "Dizziness, ataxia, blood dyscrasias",
    suggestedPrice: 25
  },
  {
    name: "Oxcarbazepine 300mg",
    salts: "Oxcarbazepine 300mg",
    manufacturer: "Novartis India",
    description: "Better tolerated derivative of carbamazepine.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Hyponatremia, dizziness, fatigue",
    suggestedPrice: 75
  },
  {
    name: "Topiramate 50mg",
    salts: "Topiramate 50mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Anticonvulsant for epilepsy and migraine.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Cognitive impairment, weight loss, paresthesia",
    suggestedPrice: 95
  },
  {
    name: "Levetiracetam 500mg",
    salts: "Levetiracetam 500mg",
    manufacturer: "UCB India",
    description: "Anticonvulsant for partial and generalized seizures.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Somnolence, behavioral changes",
    suggestedPrice: 145
  },
  {
    name: "Lacosamide 100mg",
    salts: "Lacosamide 100mg",
    manufacturer: "UCB India",
    description: "Newer anticonvulsant for focal seizures.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Dizziness, headache, diplopia",
    suggestedPrice: 245
  },
  {
    name: "Perampanel 4mg",
    salts: "Perampanel 4mg",
    manufacturer: "Eisai",
    description: "AMPA receptor antagonist for epilepsy.",
    dosage: "1 tablet at bedtime",
    category: "Mental Wellness",
    sideEffects: "Dizziness, somnolence, aggression",
    suggestedPrice: 495
  },
  {
    name: "Brivaracetam 50mg",
    salts: "Brivaracetam 50mg",
    manufacturer: "UCB India",
    description: "High-affinity SV2A ligand for focal seizures.",
    dosage: "1 tablet twice daily",
    category: "Mental Wellness",
    sideEffects: "Somnolence, dizziness, fatigue",
    suggestedPrice: 345
  },
  {
    name: "Cenobamate 100mg",
    salts: "Cenobamate 100mg",
    manufacturer: "SK Life Science",
    description: "Novel anticonvulsant with high efficacy.",
    dosage: "1 tablet once daily (slow titration)",
    category: "Mental Wellness",
    sideEffects: "Somnolence, dizziness, fatigue",
    suggestedPrice: 595
  },

  // ==================== ADDITIONAL RESPIRATORY ====================
  {
    name: "Formoterol + Budesonide",
    salts: "Formoterol 6mcg + Budesonide 200mcg",
    manufacturer: "AstraZeneca India",
    description: "ICS-LABA combination inhaler for asthma and COPD.",
    dosage: "1-2 puffs twice daily",
    category: "Respiratory",
    sideEffects: "Oral thrush, hoarseness, palpitations",
    suggestedPrice: 495
  },
  {
    name: "Salmeterol + Fluticasone",
    salts: "Salmeterol 50mcg + Fluticasone 250mcg",
    manufacturer: "GlaxoSmithKline",
    description: "Combination inhaler for persistent asthma.",
    dosage: "1 puff twice daily",
    category: "Respiratory",
    sideEffects: "Hoarseness, candidiasis, headache",
    suggestedPrice: 545
  },
  {
    name: "Tiotropium 18mcg",
    salts: "Tiotropium Bromide 18mcg",
    manufacturer: "Boehringer Ingelheim",
    description: "Long-acting anticholinergic for COPD.",
    dosage: "1 capsule inhaled once daily",
    category: "Respiratory",
    sideEffects: "Dry mouth, constipation, UTI",
    suggestedPrice: 395
  },
  {
    name: "Glycopyrronium 50mcg",
    salts: "Glycopyrronium Bromide 50mcg",
    manufacturer: "Novartis India",
    description: "Once-daily LAMA for COPD maintenance.",
    dosage: "1 capsule inhaled once daily",
    category: "Respiratory",
    sideEffects: "Dry mouth, nasopharyngitis",
    suggestedPrice: 445
  },
  {
    name: "Umeclidinium + Vilanterol",
    salts: "Umeclidinium 62.5mcg + Vilanterol 25mcg",
    manufacturer: "GlaxoSmithKline",
    description: "LAMA-LABA combination for COPD.",
    dosage: "1 puff once daily",
    category: "Respiratory",
    sideEffects: "Headache, nasopharyngitis, UTI",
    suggestedPrice: 595
  },
  {
    name: "Triple Inhaler (ICS/LABA/LAMA)",
    salts: "Fluticasone 100mcg + Umeclidinium 62.5mcg + Vilanterol 25mcg",
    manufacturer: "GlaxoSmithKline",
    description: "Triple therapy for severe COPD.",
    dosage: "1 puff once daily",
    category: "Respiratory",
    sideEffects: "Pneumonia, oral candidiasis",
    suggestedPrice: 795
  },
  {
    name: "Ipratropium Bromide",
    salts: "Ipratropium Bromide 500mcg/2ml",
    manufacturer: "Boehringer Ingelheim",
    description: "Short-acting anticholinergic for acute bronchospasm.",
    dosage: "1 nebule 3-4 times daily",
    category: "Respiratory",
    sideEffects: "Dry mouth, bitter taste",
    suggestedPrice: 145
  },
  {
    name: "Levosalbutamol",
    salts: "Levosalbutamol 0.63mg/2.5ml",
    manufacturer: "Cipla Ltd",
    description: "R-isomer of salbutamol for acute bronchospasm.",
    dosage: "1 nebule 3-4 times daily",
    category: "Respiratory",
    sideEffects: "Tremor, palpitations",
    suggestedPrice: 95
  },
  {
    name: "Theophylline 300mg SR",
    salts: "Theophylline 300mg (Sustained Release)",
    manufacturer: "Sun Pharmaceutical",
    description: "Methylxanthine bronchodilator for COPD.",
    dosage: "1 tablet twice daily",
    category: "Respiratory",
    sideEffects: "Nausea, palpitations, insomnia",
    suggestedPrice: 45
  },
  {
    name: "Doxofylline 400mg",
    salts: "Doxofylline 400mg",
    manufacturer: "Lupin Ltd",
    description: "Newer methylxanthine with fewer side effects.",
    dosage: "1 tablet twice daily",
    category: "Respiratory",
    sideEffects: "Nausea, headache, palpitations",
    suggestedPrice: 85
  },
  {
    name: "Roflumilast 500mcg",
    salts: "Roflumilast 500mcg",
    manufacturer: "AstraZeneca India",
    description: "PDE4 inhibitor for severe COPD with exacerbations.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Diarrhea, nausea, weight loss",
    suggestedPrice: 295
  },
  {
    name: "Dupilumab 200mg",
    salts: "Dupilumab 200mg",
    manufacturer: "Sanofi India",
    description: "IL-4/IL-13 blocker for severe eosinophilic asthma.",
    dosage: "200-300mg subcutaneous every 2 weeks",
    category: "Respiratory",
    sideEffects: "Injection site reactions, conjunctivitis",
    suggestedPrice: 24995
  },
  {
    name: "Omalizumab 150mg",
    salts: "Omalizumab 150mg",
    manufacturer: "Novartis India",
    description: "Anti-IgE monoclonal for severe allergic asthma.",
    dosage: "150-375mg subcutaneous every 2-4 weeks",
    category: "Respiratory",
    sideEffects: "Injection site reactions, headache",
    suggestedPrice: 14995
  },
  {
    name: "Mepolizumab 100mg",
    salts: "Mepolizumab 100mg",
    manufacturer: "GlaxoSmithKline",
    description: "Anti-IL-5 for severe eosinophilic asthma.",
    dosage: "100mg subcutaneous every 4 weeks",
    category: "Respiratory",
    sideEffects: "Headache, injection site reactions",
    suggestedPrice: 18995
  },
  {
    name: "Benralizumab 30mg",
    salts: "Benralizumab 30mg",
    manufacturer: "AstraZeneca India",
    description: "Anti-IL-5 receptor for severe eosinophilic asthma.",
    dosage: "30mg subcutaneous every 4-8 weeks",
    category: "Respiratory",
    sideEffects: "Headache, pharyngitis",
    suggestedPrice: 19995
  },
  {
    name: "Desloratadine 5mg",
    salts: "Desloratadine 5mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Non-sedating antihistamine for allergic rhinitis.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Headache, fatigue, dry mouth",
    suggestedPrice: 65
  },
  {
    name: "Bilastine 20mg",
    salts: "Bilastine 20mg",
    manufacturer: "Berlin Chemie",
    description: "Second-generation antihistamine with no sedation.",
    dosage: "1 tablet once daily on empty stomach",
    category: "Respiratory",
    sideEffects: "Headache, drowsiness (rare)",
    suggestedPrice: 125
  },
  {
    name: "Rupatadine 10mg",
    salts: "Rupatadine 10mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Dual action antihistamine and PAF antagonist.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Somnolence, fatigue, headache",
    suggestedPrice: 95
  },
  {
    name: "Ebastine 10mg",
    salts: "Ebastine 10mg",
    manufacturer: "Lupin Ltd",
    description: "Long-acting antihistamine for allergies.",
    dosage: "1 tablet once daily",
    category: "Respiratory",
    sideEffects: "Headache, dry mouth, nausea",
    suggestedPrice: 75
  },
  {
    name: "Azelastine Nasal Spray",
    salts: "Azelastine Hydrochloride 0.1%",
    manufacturer: "Meda Pharmaceuticals",
    description: "Topical antihistamine for allergic rhinitis.",
    dosage: "1-2 sprays in each nostril twice daily",
    category: "Respiratory",
    sideEffects: "Bitter taste, nasal burning",
    suggestedPrice: 195
  },
  {
    name: "Mometasone Nasal Spray",
    salts: "Mometasone Furoate 50mcg per spray",
    manufacturer: "MSD Pharmaceuticals",
    description: "Intranasal corticosteroid for rhinitis.",
    dosage: "2 sprays in each nostril once daily",
    category: "Respiratory",
    sideEffects: "Headache, epistaxis, pharyngitis",
    suggestedPrice: 225
  },
  {
    name: "Triamcinolone Nasal Spray",
    salts: "Triamcinolone Acetonide 55mcg per spray",
    manufacturer: "Sanofi India",
    description: "Nasal corticosteroid for allergy symptoms.",
    dosage: "1-2 sprays in each nostril daily",
    category: "Respiratory",
    sideEffects: "Nasal irritation, headache",
    suggestedPrice: 165
  },
  {
    name: "Ciclesonide Nasal Spray",
    salts: "Ciclesonide 50mcg per spray",
    manufacturer: "Takeda Pharmaceuticals",
    description: "Prodrug nasal steroid for allergic rhinitis.",
    dosage: "2 sprays in each nostril once daily",
    category: "Respiratory",
    sideEffects: "Epistaxis, headache, nasopharyngitis",
    suggestedPrice: 245
  },
  {
    name: "Codeine 10mg",
    salts: "Codeine Phosphate 10mg",
    manufacturer: "Abbott India",
    description: "Opioid antitussive for severe dry cough.",
    dosage: "1 tablet every 4-6 hours as needed",
    category: "Respiratory",
    sideEffects: "Sedation, constipation, dependence",
    suggestedPrice: 25
  },
  {
    name: "Benzonatate 100mg",
    salts: "Benzonatate 100mg",
    manufacturer: "Pfizer Ltd",
    description: "Non-opioid cough suppressant for persistent cough.",
    dosage: "1 capsule 3 times daily",
    category: "Respiratory",
    sideEffects: "Dizziness, headache, drowsiness",
    suggestedPrice: 85
  },
  {
    name: "Guaifenesin 600mg",
    salts: "Guaifenesin 600mg ER",
    manufacturer: "Pfizer Ltd",
    description: "Expectorant for productive cough.",
    dosage: "1 tablet twice daily with water",
    category: "Respiratory",
    sideEffects: "Nausea, dizziness, headache",
    suggestedPrice: 65
  },
  {
    name: "N-Acetylcysteine 600mg",
    salts: "N-Acetylcysteine 600mg",
    manufacturer: "Zambon",
    description: "Mucolytic for respiratory conditions and COPD.",
    dosage: "1 sachet dissolved in water daily",
    category: "Respiratory",
    sideEffects: "Nausea, vomiting, stomatitis",
    suggestedPrice: 145
  },
  {
    name: "Erdosteine 300mg",
    salts: "Erdosteine 300mg",
    manufacturer: "Recipharm",
    description: "Mucolytic with antioxidant properties.",
    dosage: "1 capsule 2-3 times daily",
    category: "Respiratory",
    sideEffects: "GI upset, headache, rash",
    suggestedPrice: 125
  },
  {
    name: "Carbocisteine 500mg",
    salts: "Carbocisteine 500mg",
    manufacturer: "Sanofi India",
    description: "Mucoregulator for chronic bronchitis.",
    dosage: "1 capsule 3 times daily",
    category: "Respiratory",
    sideEffects: "GI upset, rash",
    suggestedPrice: 75
  },

  // ==================== ADDITIONAL VITAMINS & SUPPLEMENTS ====================
  {
    name: "Vitamin D3 1000IU",
    salts: "Cholecalciferol 1000IU",
    manufacturer: "Abbott India",
    description: "Daily vitamin D supplement for bone health.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Rarely hypercalcemia at high doses",
    suggestedPrice: 95
  },
  {
    name: "Vitamin D3 2000IU",
    salts: "Cholecalciferol 2000IU",
    manufacturer: "HealthKart",
    description: "Moderate dose vitamin D for deficiency.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "Hypercalcemia if excessive",
    suggestedPrice: 145
  },
  {
    name: "Vitamin K2 100mcg",
    salts: "Menaquinone-7 100mcg",
    manufacturer: "HealthKart",
    description: "Vitamin K2 for bone and cardiovascular health.",
    dosage: "1 capsule daily with food",
    category: "Vitamins",
    sideEffects: "Rare - may affect anticoagulants",
    suggestedPrice: 295
  },
  {
    name: "Iron Sucrose 100mg",
    salts: "Iron Sucrose 100mg/5ml",
    manufacturer: "Emcure Pharmaceuticals",
    description: "IV iron for iron deficiency anemia.",
    dosage: "100-200mg IV as per protocol",
    category: "Vitamins",
    sideEffects: "Hypotension, nausea, injection site reactions",
    suggestedPrice: 195
  },
  {
    name: "Ferric Carboxymaltose",
    salts: "Ferric Carboxymaltose 500mg/10ml",
    manufacturer: "Vifor Pharma",
    description: "High-dose IV iron infusion for severe anemia.",
    dosage: "500-1000mg IV infusion",
    category: "Vitamins",
    sideEffects: "Hypophosphatemia, headache, nausea",
    suggestedPrice: 2495
  },
  {
    name: "Vitamin B1 100mg",
    salts: "Thiamine Hydrochloride 100mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Vitamin B1 for deficiency and neuropathy.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Rare allergic reactions",
    suggestedPrice: 35
  },
  {
    name: "Vitamin B6 50mg",
    salts: "Pyridoxine Hydrochloride 50mg",
    manufacturer: "Abbott India",
    description: "Vitamin B6 for neuropathy and pregnancy nausea.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Peripheral neuropathy at high doses",
    suggestedPrice: 25
  },
  {
    name: "Alpha Lipoic Acid 300mg",
    salts: "Alpha Lipoic Acid 300mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Antioxidant for diabetic neuropathy.",
    dosage: "1 capsule twice daily",
    category: "Vitamins",
    sideEffects: "Skin rash, hypoglycemia",
    suggestedPrice: 195
  },
  {
    name: "Benfotiamine 150mg",
    salts: "Benfotiamine 150mg",
    manufacturer: "Worwag Pharma",
    description: "Fat-soluble thiamine for diabetic complications.",
    dosage: "1 tablet 2-3 times daily",
    category: "Vitamins",
    sideEffects: "GI upset, skin reactions",
    suggestedPrice: 245
  },
  {
    name: "L-Carnitine 500mg",
    salts: "L-Carnitine 500mg",
    manufacturer: "HealthKart",
    description: "Amino acid for energy metabolism and heart health.",
    dosage: "1 capsule 2-3 times daily",
    category: "Vitamins",
    sideEffects: "Nausea, diarrhea, fishy odor",
    suggestedPrice: 295
  },
  {
    name: "Acetyl L-Carnitine 500mg",
    salts: "Acetyl L-Carnitine 500mg",
    manufacturer: "HealthKart",
    description: "Brain-penetrating carnitine for cognitive support.",
    dosage: "1 capsule twice daily",
    category: "Vitamins",
    sideEffects: "Nausea, restlessness, body odor",
    suggestedPrice: 395
  },
  {
    name: "Selenium 200mcg",
    salts: "Selenium 200mcg (as Selenomethionine)",
    manufacturer: "HealthKart",
    description: "Trace mineral for thyroid and antioxidant function.",
    dosage: "1 tablet daily",
    category: "Vitamins",
    sideEffects: "Garlic breath, hair loss at high doses",
    suggestedPrice: 145
  },
  {
    name: "Chromium 200mcg",
    salts: "Chromium Picolinate 200mcg",
    manufacturer: "HealthKart",
    description: "Trace mineral for blood sugar regulation.",
    dosage: "1 tablet daily with meals",
    category: "Vitamins",
    sideEffects: "Headache, dizziness",
    suggestedPrice: 125
  },
  {
    name: "Vitamin A 25000IU",
    salts: "Retinol Palmitate 25000IU",
    manufacturer: "Abbott India",
    description: "Vitamin A for vision and immune function.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "Hypervitaminosis A with excess",
    suggestedPrice: 65
  },
  {
    name: "Beta Carotene 15mg",
    salts: "Beta Carotene 15mg",
    manufacturer: "HealthKart",
    description: "Provitamin A with antioxidant properties.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "Yellow skin discoloration",
    suggestedPrice: 145
  },
  {
    name: "Lutein 20mg",
    salts: "Lutein 20mg + Zeaxanthin 4mg",
    manufacturer: "Bausch & Lomb",
    description: "Carotenoids for macular health.",
    dosage: "1 softgel daily",
    category: "Vitamins",
    sideEffects: "Skin yellowing, carotenodermia",
    suggestedPrice: 395
  },
  {
    name: "Astaxanthin 4mg",
    salts: "Astaxanthin 4mg",
    manufacturer: "HealthKart",
    description: "Powerful antioxidant for skin and eye health.",
    dosage: "1 softgel daily with food",
    category: "Vitamins",
    sideEffects: "Skin pigmentation, hormonal effects",
    suggestedPrice: 495
  },
  {
    name: "Resveratrol 250mg",
    salts: "Trans-Resveratrol 250mg",
    manufacturer: "HealthKart",
    description: "Polyphenol antioxidant from grapes.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "GI upset, drug interactions",
    suggestedPrice: 595
  },
  {
    name: "Curcumin 500mg",
    salts: "Curcumin Extract 500mg (95% Curcuminoids)",
    manufacturer: "Himalaya Wellness",
    description: "Anti-inflammatory from turmeric.",
    dosage: "1 capsule twice daily with food",
    category: "Vitamins",
    sideEffects: "GI upset, blood thinning",
    suggestedPrice: 295
  },
  {
    name: "Berberine 500mg",
    salts: "Berberine HCl 500mg",
    manufacturer: "HealthKart",
    description: "Plant alkaloid for metabolic health.",
    dosage: "1 capsule 2-3 times daily with meals",
    category: "Vitamins",
    sideEffects: "GI upset, constipation, drug interactions",
    suggestedPrice: 395
  },
  {
    name: "Quercetin 500mg",
    salts: "Quercetin Dihydrate 500mg",
    manufacturer: "HealthKart",
    description: "Flavonoid for immune and allergy support.",
    dosage: "1 capsule twice daily",
    category: "Vitamins",
    sideEffects: "Headache, tingling",
    suggestedPrice: 295
  },
  {
    name: "NAC 600mg",
    salts: "N-Acetyl Cysteine 600mg",
    manufacturer: "HealthKart",
    description: "Glutathione precursor for liver and respiratory support.",
    dosage: "1 capsule twice daily",
    category: "Vitamins",
    sideEffects: "Nausea, vomiting, rash",
    suggestedPrice: 245
  },
  {
    name: "Glutathione 500mg",
    salts: "Reduced L-Glutathione 500mg",
    manufacturer: "HealthKart",
    description: "Master antioxidant for detoxification.",
    dosage: "1 capsule daily on empty stomach",
    category: "Vitamins",
    sideEffects: "Bloating, cramping",
    suggestedPrice: 895
  },
  {
    name: "PQQ 20mg",
    salts: "Pyrroloquinoline Quinone 20mg",
    manufacturer: "HealthKart",
    description: "Mitochondrial support for energy and cognition.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "Headache, fatigue initially",
    suggestedPrice: 995
  },
  {
    name: "Nicotinamide Riboside 300mg",
    salts: "Nicotinamide Riboside 300mg",
    manufacturer: "HealthKart",
    description: "NAD+ precursor for cellular energy.",
    dosage: "1 capsule daily",
    category: "Vitamins",
    sideEffects: "Nausea, headache, flushing",
    suggestedPrice: 1995
  },
  {
    name: "Spermidine 1mg",
    salts: "Spermidine 1mg",
    manufacturer: "HealthKart",
    description: "Polyamine for autophagy and longevity.",
    dosage: "1-2 capsules daily",
    category: "Vitamins",
    sideEffects: "GI upset",
    suggestedPrice: 1495
  },

  // ==================== SKIN CARE ADDITIONS ====================
  {
    name: "Isotretinoin 20mg",
    salts: "Isotretinoin 20mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Oral retinoid for severe acne.",
    dosage: "20-40mg daily with fatty food",
    category: "Skin Care",
    sideEffects: "Dry skin, cheilitis, teratogenicity",
    suggestedPrice: 195
  },
  {
    name: "Spironolactone 50mg (Acne)",
    salts: "Spironolactone 50mg",
    manufacturer: "RPG Life Sciences",
    description: "Anti-androgen for hormonal acne in women.",
    dosage: "1 tablet once daily",
    category: "Skin Care",
    sideEffects: "Breast tenderness, menstrual irregularity",
    suggestedPrice: 45
  },
  {
    name: "Dapsone Gel 5%",
    salts: "Dapsone 5% w/w",
    manufacturer: "Allergan India",
    description: "Topical sulfone for inflammatory acne.",
    dosage: "Apply thin layer twice daily",
    category: "Skin Care",
    sideEffects: "Dryness, peeling, redness",
    suggestedPrice: 295
  },
  {
    name: "Trifarotene 50mcg",
    salts: "Trifarotene 0.005% w/w",
    manufacturer: "Galderma India",
    description: "Fourth-generation retinoid for body acne.",
    dosage: "Apply once daily at bedtime",
    category: "Skin Care",
    sideEffects: "Irritation, dryness, photosensitivity",
    suggestedPrice: 695
  },
  {
    name: "Metronidazole Gel 0.75%",
    salts: "Metronidazole 0.75% w/w",
    manufacturer: "Galderma India",
    description: "Topical antibiotic for rosacea.",
    dosage: "Apply thin layer twice daily",
    category: "Skin Care",
    sideEffects: "Skin dryness, stinging",
    suggestedPrice: 145
  },
  {
    name: "Ivermectin Cream 1%",
    salts: "Ivermectin 1% w/w",
    manufacturer: "Galderma India",
    description: "Antiparasitic cream for rosacea and demodex.",
    dosage: "Apply once daily",
    category: "Skin Care",
    sideEffects: "Skin burning, pruritus",
    suggestedPrice: 395
  },
  {
    name: "Brimonidine Gel 0.33%",
    salts: "Brimonidine Tartrate 0.33% w/w",
    manufacturer: "Galderma India",
    description: "Topical for rosacea redness.",
    dosage: "Apply once daily",
    category: "Skin Care",
    sideEffects: "Erythema, flushing, burning",
    suggestedPrice: 495
  },
  {
    name: "Oxybenzone-Free Sunscreen",
    salts: "Zinc Oxide 20% + Titanium Dioxide 5%",
    manufacturer: "La Roche-Posay",
    description: "Mineral sunscreen for sensitive skin.",
    dosage: "Apply liberally before sun exposure",
    category: "Skin Care",
    sideEffects: "White cast, rare skin irritation",
    suggestedPrice: 595
  },
  {
    name: "Tranexamic Acid Serum 5%",
    salts: "Tranexamic Acid 5% w/w",
    manufacturer: "The Ordinary",
    description: "Topical for hyperpigmentation and melasma.",
    dosage: "Apply twice daily",
    category: "Skin Care",
    sideEffects: "Mild irritation, dryness",
    suggestedPrice: 395
  },
  {
    name: "Kojic Acid Cream 2%",
    salts: "Kojic Acid 2% w/w",
    manufacturer: "Menarini India",
    description: "Skin lightening agent for dark spots.",
    dosage: "Apply twice daily to affected areas",
    category: "Skin Care",
    sideEffects: "Contact dermatitis, redness",
    suggestedPrice: 245
  },
  {
    name: "Niacinamide Serum 10%",
    salts: "Niacinamide 10% + Zinc 1%",
    manufacturer: "The Ordinary",
    description: "Vitamin B3 for pores and oil control.",
    dosage: "Apply twice daily",
    category: "Skin Care",
    sideEffects: "Rare flushing or irritation",
    suggestedPrice: 295
  },
  {
    name: "Salicylic Acid 2%",
    salts: "Salicylic Acid 2% w/w",
    manufacturer: "Paula's Choice",
    description: "BHA exfoliant for acne and blackheads.",
    dosage: "Apply once daily initially",
    category: "Skin Care",
    sideEffects: "Dryness, peeling, stinging",
    suggestedPrice: 495
  },
  {
    name: "Glycolic Acid 7%",
    salts: "Glycolic Acid 7% w/w",
    manufacturer: "The Ordinary",
    description: "AHA exfoliant for texture and fine lines.",
    dosage: "Apply once daily at night",
    category: "Skin Care",
    sideEffects: "Stinging, sun sensitivity, peeling",
    suggestedPrice: 345
  },
  {
    name: "Lactic Acid 10%",
    salts: "Lactic Acid 10% + HA",
    manufacturer: "The Ordinary",
    description: "Gentle AHA for sensitive skin exfoliation.",
    dosage: "Apply once daily at night",
    category: "Skin Care",
    sideEffects: "Mild stinging, sun sensitivity",
    suggestedPrice: 295
  },
  {
    name: "Mandelic Acid 10%",
    salts: "Mandelic Acid 10% w/w",
    manufacturer: "The Ordinary",
    description: "Gentle AHA for hyperpigmentation.",
    dosage: "Apply at night",
    category: "Skin Care",
    sideEffects: "Mild irritation, sun sensitivity",
    suggestedPrice: 295
  },
  {
    name: "Retinol 0.5%",
    salts: "Retinol 0.5% in Squalane",
    manufacturer: "The Ordinary",
    description: "Over-the-counter retinoid for anti-aging.",
    dosage: "Apply at night, start 2-3x weekly",
    category: "Skin Care",
    sideEffects: "Dryness, peeling, purging",
    suggestedPrice: 345
  },
  {
    name: "Bakuchiol 1%",
    salts: "Bakuchiol 1% w/w",
    manufacturer: "The Ordinary",
    description: "Natural retinol alternative for sensitive skin.",
    dosage: "Apply twice daily",
    category: "Skin Care",
    sideEffects: "Rare irritation",
    suggestedPrice: 395
  },
  {
    name: "Vitamin C 20% Serum",
    salts: "L-Ascorbic Acid 20% + Vitamin E + Ferulic",
    manufacturer: "SkinCeuticals",
    description: "Antioxidant serum for brightening and protection.",
    dosage: "Apply 4-5 drops in morning",
    category: "Skin Care",
    sideEffects: "Tingling, oxidation (turns brown)",
    suggestedPrice: 2495
  },
  {
    name: "Hyaluronic Acid 2%",
    salts: "Hyaluronic Acid 2% + B5",
    manufacturer: "The Ordinary",
    description: "Hydrating serum for all skin types.",
    dosage: "Apply to damp skin twice daily",
    category: "Skin Care",
    sideEffects: "Rare sensitivity",
    suggestedPrice: 295
  },
  {
    name: "Ceramide Moisturizer",
    salts: "Ceramides NP, AP, EOP + Cholesterol",
    manufacturer: "CeraVe",
    description: "Barrier repair moisturizer for dry skin.",
    dosage: "Apply twice daily",
    category: "Skin Care",
    sideEffects: "Rare - comedogenic for some",
    suggestedPrice: 395
  },
  {
    name: "Squalane Oil",
    salts: "100% Plant-Derived Squalane",
    manufacturer: "The Ordinary",
    description: "Lightweight face oil for all skin types.",
    dosage: "Apply 2-3 drops daily",
    category: "Skin Care",
    sideEffects: "Rare sensitivity",
    suggestedPrice: 295
  },
  {
    name: "Pimecrolimus Cream 1%",
    salts: "Pimecrolimus 1% w/w",
    manufacturer: "Meda Pharmaceuticals",
    description: "Calcineurin inhibitor for atopic dermatitis.",
    dosage: "Apply thin layer twice daily",
    category: "Skin Care",
    sideEffects: "Burning, pruritus, skin infections",
    suggestedPrice: 395
  },
  {
    name: "Crisaborole 2%",
    salts: "Crisaborole 2% w/w",
    manufacturer: "Pfizer Ltd",
    description: "PDE4 inhibitor for mild-moderate eczema.",
    dosage: "Apply thin layer twice daily",
    category: "Skin Care",
    sideEffects: "Application site pain, burning",
    suggestedPrice: 995
  },
  {
    name: "Ruxolitinib Cream 1.5%",
    salts: "Ruxolitinib 1.5% w/w",
    manufacturer: "Incyte",
    description: "JAK inhibitor for atopic dermatitis.",
    dosage: "Apply thin layer twice daily",
    category: "Skin Care",
    sideEffects: "Application site reactions, acne",
    suggestedPrice: 1995
  },
  {
    name: "Calcipotriol 50mcg/g",
    salts: "Calcipotriol 50mcg/g",
    manufacturer: "Leo Pharma",
    description: "Vitamin D analog for psoriasis.",
    dosage: "Apply once or twice daily",
    category: "Skin Care",
    sideEffects: "Skin irritation, hypercalcemia (rare)",
    suggestedPrice: 295
  },
  {
    name: "Calcipotriol + Betamethasone",
    salts: "Calcipotriol 50mcg + Betamethasone 0.5mg per g",
    manufacturer: "Leo Pharma",
    description: "Combination for psoriasis plaques.",
    dosage: "Apply once daily for up to 4 weeks",
    category: "Skin Care",
    sideEffects: "Skin atrophy, hypercalcemia",
    suggestedPrice: 595
  },
  {
    name: "Tazarotene Gel 0.1%",
    salts: "Tazarotene 0.1% w/w",
    manufacturer: "Allergan India",
    description: "Retinoid for psoriasis and acne.",
    dosage: "Apply thin layer at bedtime",
    category: "Skin Care",
    sideEffects: "Burning, peeling, photosensitivity",
    suggestedPrice: 395
  },
  {
    name: "Apremilast 30mg",
    salts: "Apremilast 30mg",
    manufacturer: "Amgen",
    description: "Oral PDE4 inhibitor for psoriasis and psoriatic arthritis.",
    dosage: "30mg twice daily after titration",
    category: "Skin Care",
    sideEffects: "Diarrhea, nausea, headache, depression",
    suggestedPrice: 895
  },
  {
    name: "Secukinumab 150mg",
    salts: "Secukinumab 150mg",
    manufacturer: "Novartis India",
    description: "Anti-IL-17A biologic for psoriasis.",
    dosage: "300mg subcutaneous weekly x5, then monthly",
    category: "Skin Care",
    sideEffects: "Infections, injection site reactions",
    suggestedPrice: 24995
  },
  {
    name: "Ixekizumab 80mg",
    salts: "Ixekizumab 80mg",
    manufacturer: "Eli Lilly India",
    description: "Anti-IL-17A biologic for severe psoriasis.",
    dosage: "160mg initial, then 80mg every 2-4 weeks",
    category: "Skin Care",
    sideEffects: "Injection site reactions, infections",
    suggestedPrice: 29995
  },
  {
    name: "Ustekinumab 45mg",
    salts: "Ustekinumab 45mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Anti-IL-12/23 biologic for psoriasis and Crohn's.",
    dosage: "45-90mg subcutaneous every 12 weeks",
    category: "Skin Care",
    sideEffects: "Infections, injection site reactions",
    suggestedPrice: 89995
  },
  {
    name: "Guselkumab 100mg",
    salts: "Guselkumab 100mg",
    manufacturer: "Janssen Pharmaceuticals",
    description: "Anti-IL-23 biologic for plaque psoriasis.",
    dosage: "100mg at weeks 0, 4, then every 8 weeks",
    category: "Skin Care",
    sideEffects: "Infections, injection site reactions",
    suggestedPrice: 74995
  },
  {
    name: "Risankizumab 150mg",
    salts: "Risankizumab 150mg",
    manufacturer: "AbbVie",
    description: "Anti-IL-23 biologic for moderate-severe psoriasis.",
    dosage: "150mg at weeks 0, 4, then every 12 weeks",
    category: "Skin Care",
    sideEffects: "Upper respiratory infections, headache",
    suggestedPrice: 84995
  },

  // ==================== FEVER & PAIN ====================
  {
    name: "Crocin 650",
    salts: "Paracetamol 650mg",
    manufacturer: "GlaxoSmithKline",
    description: "Analgesic and antipyretic for pain and fever relief.",
    dosage: "1 tablet every 4-6 hours, max 4 tablets/day",
    category: "Fever & Pain",
    sideEffects: "Rare - liver damage with overdose",
    suggestedPrice: 25
  },
  {
    name: "Crocin Advance",
    salts: "Paracetamol 500mg",
    manufacturer: "GlaxoSmithKline",
    description: "Fast-acting paracetamol with Optizorb technology.",
    dosage: "1-2 tablets every 4-6 hours",
    category: "Fever & Pain",
    sideEffects: "Rare at normal doses",
    suggestedPrice: 35
  },
  {
    name: "Dolo 650",
    salts: "Paracetamol 650mg",
    manufacturer: "Micro Labs",
    description: "Popular paracetamol for fever and body ache.",
    dosage: "1 tablet every 8 hours",
    category: "Fever & Pain",
    sideEffects: "Liver damage with overdose",
    suggestedPrice: 30
  },
  {
    name: "Calpol 500",
    salts: "Paracetamol 500mg",
    manufacturer: "GlaxoSmithKline",
    description: "Trusted paracetamol for pain and fever.",
    dosage: "1-2 tablets every 4-6 hours",
    category: "Fever & Pain",
    sideEffects: "Rare - allergic reactions",
    suggestedPrice: 20
  },
  {
    name: "Sumo",
    salts: "Paracetamol 325mg + Nimesulide 100mg",
    manufacturer: "Alkem Laboratories",
    description: "Combination analgesic for moderate to severe pain.",
    dosage: "1 tablet twice daily after meals",
    category: "Fever & Pain",
    sideEffects: "GI upset, liver effects",
    suggestedPrice: 45
  },
  {
    name: "Nicip Plus",
    salts: "Nimesulide 100mg + Paracetamol 325mg",
    manufacturer: "Cipla Ltd",
    description: "Pain reliever for headache and body ache.",
    dosage: "1 tablet twice daily",
    category: "Fever & Pain",
    sideEffects: "GI irritation, drowsiness",
    suggestedPrice: 40
  },
  {
    name: "Saridon",
    salts: "Paracetamol 250mg + Propyphenazone 150mg + Caffeine 50mg",
    manufacturer: "Bayer",
    description: "Triple action formula for quick headache relief.",
    dosage: "1 tablet as needed, max 3/day",
    category: "Fever & Pain",
    sideEffects: "Nervousness, insomnia",
    suggestedPrice: 35
  },
  {
    name: "Disprin",
    salts: "Aspirin 350mg",
    manufacturer: "Reckitt Benckiser",
    description: "Soluble aspirin for pain and fever.",
    dosage: "1-2 tablets dissolved in water",
    category: "Fever & Pain",
    sideEffects: "GI bleeding, tinnitus",
    suggestedPrice: 20
  },
  {
    name: "Dart",
    salts: "Paracetamol 1000mg",
    manufacturer: "Micro Labs",
    description: "High-strength paracetamol for severe pain.",
    dosage: "1 tablet every 6-8 hours",
    category: "Fever & Pain",
    sideEffects: "Liver toxicity with overdose",
    suggestedPrice: 45
  },
  {
    name: "Flexon",
    salts: "Ibuprofen 400mg + Paracetamol 325mg",
    manufacturer: "Aristo Pharmaceuticals",
    description: "Combination for pain and inflammation.",
    dosage: "1 tablet 2-3 times daily",
    category: "Fever & Pain",
    sideEffects: "GI upset, dizziness",
    suggestedPrice: 35
  },
  {
    name: "Brufen 400",
    salts: "Ibuprofen 400mg",
    manufacturer: "Abbott India",
    description: "NSAID for pain, fever, and inflammation.",
    dosage: "1 tablet 3 times daily with food",
    category: "Fever & Pain",
    sideEffects: "Stomach upset, headache",
    suggestedPrice: 30
  },
  {
    name: "Brufen 600",
    salts: "Ibuprofen 600mg",
    manufacturer: "Abbott India",
    description: "Higher strength ibuprofen for severe pain.",
    dosage: "1 tablet 2-3 times daily with food",
    category: "Fever & Pain",
    sideEffects: "GI bleeding, renal effects",
    suggestedPrice: 45
  },
  {
    name: "Meftal Spas",
    salts: "Mefenamic Acid 250mg + Dicyclomine 10mg",
    manufacturer: "Blue Cross Laboratories",
    description: "For menstrual cramps and abdominal spasms.",
    dosage: "1 tablet 2-3 times daily",
    category: "Fever & Pain",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 55
  },
  {
    name: "Meftal Forte",
    salts: "Mefenamic Acid 500mg",
    manufacturer: "Blue Cross Laboratories",
    description: "For moderate pain and dysmenorrhea.",
    dosage: "1 tablet 3 times daily after food",
    category: "Fever & Pain",
    sideEffects: "GI upset, diarrhea",
    suggestedPrice: 45
  },
  {
    name: "Voveran 50",
    salts: "Diclofenac Sodium 50mg",
    manufacturer: "Novartis India",
    description: "NSAID for arthritis and acute pain.",
    dosage: "1 tablet 2-3 times daily",
    category: "Fever & Pain",
    sideEffects: "GI bleeding, CV risk",
    suggestedPrice: 25
  },
  {
    name: "Voveran SR 100",
    salts: "Diclofenac Sodium SR 100mg",
    manufacturer: "Novartis India",
    description: "Sustained release diclofenac for chronic pain.",
    dosage: "1 tablet once or twice daily",
    category: "Fever & Pain",
    sideEffects: "Stomach ulcers, edema",
    suggestedPrice: 45
  },
  {
    name: "Volini Gel",
    salts: "Diclofenac Diethylamine 1.16%",
    manufacturer: "Sun Pharmaceutical",
    description: "Topical gel for muscle and joint pain.",
    dosage: "Apply 3-4 times daily to affected area",
    category: "Fever & Pain",
    sideEffects: "Local skin irritation",
    suggestedPrice: 95
  },
  {
    name: "Moov",
    salts: "Diclofenac + Menthol + Wintergreen Oil",
    manufacturer: "Reckitt Benckiser",
    description: "Pain relief cream for back pain and sprains.",
    dosage: "Apply to affected area as needed",
    category: "Fever & Pain",
    sideEffects: "Skin irritation, redness",
    suggestedPrice: 85
  },
  {
    name: "Iodex",
    salts: "Methyl Salicylate + Menthol",
    manufacturer: "GlaxoSmithKline",
    description: "Classic balm for muscle aches and pains.",
    dosage: "Apply and massage into affected area",
    category: "Fever & Pain",
    sideEffects: "Skin warmth, minor irritation",
    suggestedPrice: 65
  },
  {
    name: "Zandu Balm",
    salts: "Menthol + Camphor + Eucalyptus Oil",
    manufacturer: "Emami Limited",
    description: "Ayurvedic balm for headache and body pain.",
    dosage: "Apply to forehead or affected area",
    category: "Fever & Pain",
    sideEffects: "Skin sensitivity",
    suggestedPrice: 55
  },
  {
    name: "Tiger Balm",
    salts: "Camphor + Menthol + Cajuput Oil",
    manufacturer: "Haw Par Corporation",
    description: "Topical analgesic for muscle aches.",
    dosage: "Apply to affected area 3-4 times daily",
    category: "Fever & Pain",
    sideEffects: "Skin irritation if sensitive",
    suggestedPrice: 125
  },

  // ==================== COUGH & COLD ====================
  {
    name: "Benadryl Cough Syrup",
    salts: "Diphenhydramine 14.08mg/5ml",
    manufacturer: "Johnson & Johnson",
    description: "Antihistamine cough suppressant for dry cough.",
    dosage: "10ml every 4-6 hours",
    category: "Cough & Cold",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 95
  },
  {
    name: "Corex",
    salts: "Chlorpheniramine + Codeine Phosphate",
    manufacturer: "Pfizer Ltd",
    description: "Antitussive for severe dry cough (prescription).",
    dosage: "5-10ml 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Sedation, constipation, dependence",
    suggestedPrice: 85
  },
  {
    name: "Grilinctus",
    salts: "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    manufacturer: "Franco-Indian Pharmaceuticals",
    description: "Multi-symptom cold and cough relief.",
    dosage: "10ml 3 times daily",
    category: "Cough & Cold",
    sideEffects: "Drowsiness, dizziness",
    suggestedPrice: 75
  },
  {
    name: "Ascoril LS",
    salts: "Ambroxol + Levosalbutamol + Guaifenesin",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Expectorant for productive cough with wheeze.",
    dosage: "10ml 3 times daily",
    category: "Cough & Cold",
    sideEffects: "Tremor, palpitations, nausea",
    suggestedPrice: 95
  },
  {
    name: "Ascoril D Plus",
    salts: "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "For dry cough with congestion.",
    dosage: "10ml 3 times daily",
    category: "Cough & Cold",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 85
  },
  {
    name: "Chericof",
    salts: "Dextromethorphan + Chlorpheniramine + Phenylephrine",
    manufacturer: "Sun Pharmaceutical",
    description: "Cough suppressant with decongestant.",
    dosage: "10ml 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Sedation, constipation",
    suggestedPrice: 75
  },
  {
    name: "Cofsils",
    salts: "Amylmetacresol + Dichlorobenzyl Alcohol",
    manufacturer: "Cipla Ltd",
    description: "Throat lozenges for sore throat.",
    dosage: "1 lozenge every 2-3 hours",
    category: "Cough & Cold",
    sideEffects: "Mild numbness",
    suggestedPrice: 45
  },
  {
    name: "Strepsils",
    salts: "Amylmetacresol + Dichlorobenzyl Alcohol",
    manufacturer: "Reckitt Benckiser",
    description: "Antiseptic lozenges for throat infection.",
    dosage: "1 lozenge every 2-3 hours",
    category: "Cough & Cold",
    sideEffects: "Rare - allergic reactions",
    suggestedPrice: 55
  },
  {
    name: "Vicks VapoRub",
    salts: "Menthol + Camphor + Eucalyptus Oil",
    manufacturer: "Procter & Gamble",
    description: "Topical ointment for congestion and cough.",
    dosage: "Apply to chest and throat",
    category: "Cough & Cold",
    sideEffects: "Skin irritation if sensitive",
    suggestedPrice: 95
  },
  {
    name: "Vicks Action 500",
    salts: "Paracetamol + Phenylephrine + Caffeine",
    manufacturer: "Procter & Gamble",
    description: "Multi-symptom cold and flu relief.",
    dosage: "1 tablet every 4-6 hours",
    category: "Cough & Cold",
    sideEffects: "Nervousness, insomnia",
    suggestedPrice: 35
  },
  {
    name: "Sinarest",
    salts: "Paracetamol + Phenylephrine + Chlorpheniramine + Caffeine",
    manufacturer: "Centaur Pharmaceuticals",
    description: "For cold, flu, and sinus congestion.",
    dosage: "1 tablet 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 30
  },
  {
    name: "Sinarest LP",
    salts: "Paracetamol 500mg + Phenylephrine 10mg + Levocetirizine 5mg",
    manufacturer: "Centaur Pharmaceuticals",
    description: "Non-sedating cold relief formula.",
    dosage: "1 tablet twice daily",
    category: "Cough & Cold",
    sideEffects: "Mild drowsiness, dry mouth",
    suggestedPrice: 45
  },
  {
    name: "D Cold Total",
    salts: "Paracetamol + Phenylephrine + Cetirizine + Caffeine",
    manufacturer: "Wyeth",
    description: "Complete cold and flu symptom relief.",
    dosage: "1 tablet 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Restlessness, palpitations",
    suggestedPrice: 35
  },
  {
    name: "Otrivin",
    salts: "Xylometazoline 0.1%",
    manufacturer: "Novartis India",
    description: "Nasal decongestant spray for blocked nose.",
    dosage: "2-3 sprays in each nostril twice daily",
    category: "Cough & Cold",
    sideEffects: "Rebound congestion, nasal dryness",
    suggestedPrice: 85
  },
  {
    name: "Nasivion",
    salts: "Oxymetazoline 0.05%",
    manufacturer: "Merck Ltd",
    description: "Fast-acting nasal decongestant.",
    dosage: "2-3 drops in each nostril twice daily",
    category: "Cough & Cold",
    sideEffects: "Rebound congestion, sneezing",
    suggestedPrice: 75
  },
  {
    name: "Mucinex",
    salts: "Guaifenesin 600mg ER",
    manufacturer: "Reckitt Benckiser",
    description: "Extended release expectorant for chest congestion.",
    dosage: "1 tablet every 12 hours",
    category: "Cough & Cold",
    sideEffects: "Nausea, vomiting, dizziness",
    suggestedPrice: 145
  },
  {
    name: "Alex",
    salts: "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Cough syrup for dry irritating cough.",
    dosage: "10ml 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Drowsiness, dizziness",
    suggestedPrice: 65
  },
  {
    name: "Koflet",
    salts: "Honey + Tulsi + Mulethi + Vasaka",
    manufacturer: "Himalaya Wellness",
    description: "Herbal cough syrup for all types of cough.",
    dosage: "5-10ml 3 times daily",
    category: "Cough & Cold",
    sideEffects: "Generally well tolerated",
    suggestedPrice: 85
  },
  {
    name: "Honitus",
    salts: "Honey + Tulsi + Adulsa + Yashtimadhu",
    manufacturer: "Dabur",
    description: "Ayurvedic cough syrup with honey.",
    dosage: "10ml 3 times daily",
    category: "Cough & Cold",
    sideEffects: "Rare allergic reactions",
    suggestedPrice: 75
  },
  {
    name: "Torex",
    salts: "Dextromethorphan + Chlorpheniramine + Phenylephrine",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Multi-action cough and cold relief.",
    dosage: "10ml 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Sedation, dry mouth",
    suggestedPrice: 70
  },
  {
    name: "Wikoryl",
    salts: "Paracetamol + Phenylephrine + Chlorpheniramine",
    manufacturer: "Wockhardt",
    description: "For common cold and flu symptoms.",
    dosage: "1 tablet 3-4 times daily",
    category: "Cough & Cold",
    sideEffects: "Drowsiness, constipation",
    suggestedPrice: 30
  },
  {
    name: "Zincovit",
    salts: "Multivitamin + Zinc + Grape Seed Extract",
    manufacturer: "Apex Laboratories",
    description: "Immune booster during cold and flu.",
    dosage: "1 tablet daily",
    category: "Cough & Cold",
    sideEffects: "Nausea, metallic taste",
    suggestedPrice: 145
  },

  // ==================== ALLERGY ====================
  {
    name: "Allegra 120",
    salts: "Fexofenadine 120mg",
    manufacturer: "Sanofi India",
    description: "Non-drowsy antihistamine for allergies.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Headache, drowsiness (rare)",
    suggestedPrice: 95
  },
  {
    name: "Allegra 180",
    salts: "Fexofenadine 180mg",
    manufacturer: "Sanofi India",
    description: "Higher strength for severe allergies.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Headache, nausea",
    suggestedPrice: 125
  },
  {
    name: "Zyrtec",
    salts: "Cetirizine 10mg",
    manufacturer: "UCB India",
    description: "Antihistamine for hay fever and urticaria.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 55
  },
  {
    name: "Cetzine",
    salts: "Cetirizine 10mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Antihistamine for allergic rhinitis.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Drowsiness, fatigue",
    suggestedPrice: 35
  },
  {
    name: "Montair LC",
    salts: "Montelukast 10mg + Levocetirizine 5mg",
    manufacturer: "Cipla Ltd",
    description: "Dual action for allergic rhinitis and asthma.",
    dosage: "1 tablet at bedtime",
    category: "Allergy",
    sideEffects: "Headache, drowsiness",
    suggestedPrice: 145
  },
  {
    name: "Montek LC",
    salts: "Montelukast 10mg + Levocetirizine 5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Combination for allergies and asthma.",
    dosage: "1 tablet once daily at night",
    category: "Allergy",
    sideEffects: "Abdominal pain, headache",
    suggestedPrice: 135
  },
  {
    name: "Okacet",
    salts: "Cetirizine 10mg",
    manufacturer: "Cipla Ltd",
    description: "Antihistamine for allergic conditions.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Mild sedation, dry mouth",
    suggestedPrice: 30
  },
  {
    name: "Levocet",
    salts: "Levocetirizine 5mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Potent antihistamine with less sedation.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Drowsiness, fatigue",
    suggestedPrice: 45
  },
  {
    name: "Xyzal",
    salts: "Levocetirizine 5mg",
    manufacturer: "UCB India",
    description: "R-isomer of cetirizine for allergies.",
    dosage: "1 tablet at bedtime",
    category: "Allergy",
    sideEffects: "Somnolence, dry mouth",
    suggestedPrice: 75
  },
  {
    name: "Atarax 25",
    salts: "Hydroxyzine 25mg",
    manufacturer: "UCB India",
    description: "Antihistamine for allergies and anxiety.",
    dosage: "1 tablet 2-3 times daily",
    category: "Allergy",
    sideEffects: "Sedation, dry mouth",
    suggestedPrice: 45
  },
  {
    name: "Avil 25",
    salts: "Pheniramine 25mg",
    manufacturer: "Sanofi India",
    description: "First-generation antihistamine for allergies.",
    dosage: "1 tablet 2-3 times daily",
    category: "Allergy",
    sideEffects: "Sedation, dizziness",
    suggestedPrice: 15
  },
  {
    name: "Claritin",
    salts: "Loratadine 10mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Non-drowsy antihistamine for allergies.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Headache, fatigue (rare)",
    suggestedPrice: 85
  },
  {
    name: "Lorfast",
    salts: "Loratadine 10mg",
    manufacturer: "Cipla Ltd",
    description: "Long-acting antihistamine for allergic rhinitis.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Dry mouth, headache",
    suggestedPrice: 45
  },
  {
    name: "Aerius",
    salts: "Desloratadine 5mg",
    manufacturer: "MSD Pharmaceuticals",
    description: "Active metabolite of loratadine for allergies.",
    dosage: "1 tablet once daily",
    category: "Allergy",
    sideEffects: "Fatigue, dry mouth",
    suggestedPrice: 95
  },
  {
    name: "Zyrtec D",
    salts: "Cetirizine 5mg + Pseudoephedrine 120mg",
    manufacturer: "UCB India",
    description: "Antihistamine with decongestant for allergies.",
    dosage: "1 tablet twice daily",
    category: "Allergy",
    sideEffects: "Insomnia, palpitations",
    suggestedPrice: 125
  },

  // ==================== ANTACIDS & GI ====================
  {
    name: "Digene",
    salts: "Magnesium Hydroxide + Aluminium Hydroxide + Simethicone",
    manufacturer: "Abbott India",
    description: "Antacid for acidity and gas.",
    dosage: "1-2 tablets after meals",
    category: "Digestive Health",
    sideEffects: "Constipation, diarrhea",
    suggestedPrice: 55
  },
  {
    name: "Gelusil MPS",
    salts: "Magaldrate + Simethicone",
    manufacturer: "Pfizer Ltd",
    description: "Fast-acting antacid for heartburn.",
    dosage: "1-2 tablets after meals",
    category: "Digestive Health",
    sideEffects: "Mild constipation",
    suggestedPrice: 65
  },
  {
    name: "Eno",
    salts: "Sodium Bicarbonate + Citric Acid",
    manufacturer: "GlaxoSmithKline",
    description: "Fast relief from acidity and indigestion.",
    dosage: "1 sachet dissolved in water",
    category: "Digestive Health",
    sideEffects: "Bloating, gas",
    suggestedPrice: 25
  },
  {
    name: "Pudin Hara",
    salts: "Mentha Arvensis Oil",
    manufacturer: "Dabur",
    description: "Herbal digestive for stomach upset.",
    dosage: "2-4 drops in water",
    category: "Digestive Health",
    sideEffects: "Generally safe",
    suggestedPrice: 35
  },
  {
    name: "Hajmola",
    salts: "Amla + Ginger + Black Pepper + Cumin",
    manufacturer: "Dabur",
    description: "Digestive tablets for indigestion.",
    dosage: "1-2 tablets after meals",
    category: "Digestive Health",
    sideEffects: "None significant",
    suggestedPrice: 25
  },
  {
    name: "Gas-O-Fast",
    salts: "Sodium Bicarbonate + Citric Acid + Asafoetida",
    manufacturer: "Mankind Pharma",
    description: "Instant relief from gas and acidity.",
    dosage: "1 sachet in water after meals",
    category: "Digestive Health",
    sideEffects: "Bloating",
    suggestedPrice: 20
  },
  {
    name: "Cyclopam",
    salts: "Dicyclomine 20mg + Paracetamol 500mg",
    manufacturer: "Indoco Remedies",
    description: "For abdominal cramps and spasms.",
    dosage: "1 tablet 2-3 times daily",
    category: "Digestive Health",
    sideEffects: "Dry mouth, drowsiness",
    suggestedPrice: 35
  },
  {
    name: "Buscopan",
    salts: "Hyoscine Butylbromide 10mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Antispasmodic for abdominal cramps.",
    dosage: "1-2 tablets 3-4 times daily",
    category: "Digestive Health",
    sideEffects: "Dry mouth, tachycardia",
    suggestedPrice: 55
  },
  {
    name: "Drotin",
    salts: "Drotaverine 40mg",
    manufacturer: "Walter Bushnell",
    description: "Smooth muscle relaxant for spasms.",
    dosage: "1-2 tablets 2-3 times daily",
    category: "Digestive Health",
    sideEffects: "Nausea, headache",
    suggestedPrice: 45
  },
  {
    name: "Mebeverine 135mg",
    salts: "Mebeverine Hydrochloride 135mg",
    manufacturer: "Abbott India",
    description: "Antispasmodic for IBS.",
    dosage: "1 tablet 3 times daily before meals",
    category: "Digestive Health",
    sideEffects: "Dizziness, skin reactions",
    suggestedPrice: 75
  },
  {
    name: "Cremaffin",
    salts: "Liquid Paraffin + Milk of Magnesia",
    manufacturer: "Abbott India",
    description: "Laxative for constipation.",
    dosage: "15-30ml at bedtime",
    category: "Digestive Health",
    sideEffects: "Diarrhea, abdominal cramps",
    suggestedPrice: 95
  },
  {
    name: "Dulcolax",
    salts: "Bisacodyl 5mg",
    manufacturer: "Sanofi India",
    description: "Stimulant laxative for constipation.",
    dosage: "1-2 tablets at bedtime",
    category: "Digestive Health",
    sideEffects: "Abdominal cramps, diarrhea",
    suggestedPrice: 35
  },
  {
    name: "Duphalac",
    salts: "Lactulose 10g/15ml",
    manufacturer: "Abbott India",
    description: "Osmotic laxative for chronic constipation.",
    dosage: "15-45ml daily",
    category: "Digestive Health",
    sideEffects: "Flatulence, bloating",
    suggestedPrice: 125
  },
  {
    name: "Isabgol",
    salts: "Psyllium Husk",
    manufacturer: "Dabur",
    description: "Natural fiber for constipation.",
    dosage: "1-2 teaspoons with water",
    category: "Digestive Health",
    sideEffects: "Bloating initially",
    suggestedPrice: 85
  },
  {
    name: "Norflox TZ",
    salts: "Norfloxacin 400mg + Tinidazole 600mg",
    manufacturer: "Cipla Ltd",
    description: "For bacterial diarrhea and dysentery.",
    dosage: "1 tablet twice daily for 3-5 days",
    category: "Digestive Health",
    sideEffects: "Nausea, metallic taste",
    suggestedPrice: 75
  },
  {
    name: "Oflox TZ",
    salts: "Ofloxacin 200mg + Tinidazole 600mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "Antibiotic combination for GI infections.",
    dosage: "1 tablet twice daily",
    category: "Digestive Health",
    sideEffects: "Nausea, headache",
    suggestedPrice: 85
  },
  {
    name: "Eldoper",
    salts: "Loperamide 2mg",
    manufacturer: "Elder Pharmaceuticals",
    description: "Anti-diarrheal medication.",
    dosage: "2 capsules initially, then 1 after each loose stool",
    category: "Digestive Health",
    sideEffects: "Constipation, abdominal pain",
    suggestedPrice: 25
  },
  {
    name: "ORS",
    salts: "Sodium Chloride + Potassium Chloride + Glucose + Sodium Citrate",
    manufacturer: "Various",
    description: "Oral rehydration salts for dehydration.",
    dosage: "1 sachet in 1 liter water",
    category: "Digestive Health",
    sideEffects: "None significant",
    suggestedPrice: 15
  },
  {
    name: "Electral",
    salts: "Oral Rehydration Salts",
    manufacturer: "FDC Limited",
    description: "WHO formula ORS for rehydration.",
    dosage: "Dissolve in 1 liter water, sip frequently",
    category: "Digestive Health",
    sideEffects: "Nausea if consumed too fast",
    suggestedPrice: 20
  },
  {
    name: "Econorm",
    salts: "Saccharomyces boulardii 250mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Probiotic for diarrhea prevention.",
    dosage: "1 capsule twice daily",
    category: "Digestive Health",
    sideEffects: "Flatulence, bloating",
    suggestedPrice: 145
  },
  {
    name: "Enterogermina",
    salts: "Bacillus clausii 2 Billion spores",
    manufacturer: "Sanofi India",
    description: "Probiotic for gut health restoration.",
    dosage: "1 vial 2-3 times daily",
    category: "Digestive Health",
    sideEffects: "Generally well tolerated",
    suggestedPrice: 175
  },
  {
    name: "Bifilac",
    salts: "Lactobacillus + Bifidobacterium + Streptococcus",
    manufacturer: "Tablets India",
    description: "Probiotic capsules for gut flora.",
    dosage: "1 capsule twice daily",
    category: "Digestive Health",
    sideEffects: "Mild bloating",
    suggestedPrice: 125
  },
  {
    name: "Vibact",
    salts: "Lactobacillus sporogenes 50 Million + Fructo-oligosaccharides",
    manufacturer: "USV Private Limited",
    description: "Synbiotic for digestive health.",
    dosage: "1 capsule twice daily",
    category: "Digestive Health",
    sideEffects: "Flatulence initially",
    suggestedPrice: 145
  },

  // ==================== MORE ANTIBIOTICS (BRAND NAMES) ====================
  {
    name: "Augmentin 375",
    salts: "Amoxicillin 250mg + Clavulanic Acid 125mg",
    manufacturer: "GlaxoSmithKline",
    description: "Lower strength co-amoxiclav for mild infections.",
    dosage: "1 tablet 3 times daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea",
    suggestedPrice: 125
  },
  {
    name: "Augmentin 1g",
    salts: "Amoxicillin 875mg + Clavulanic Acid 125mg",
    manufacturer: "GlaxoSmithKline",
    description: "High strength for severe infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, hepatotoxicity (rare)",
    suggestedPrice: 245
  },
  {
    name: "Cifran 500",
    salts: "Ciprofloxacin 500mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Fluoroquinolone antibiotic.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, tendinitis",
    suggestedPrice: 85
  },
  {
    name: "Cifran CT",
    salts: "Ciprofloxacin 500mg + Tinidazole 600mg",
    manufacturer: "Sun Pharmaceutical",
    description: "For mixed aerobic-anaerobic infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, metallic taste",
    suggestedPrice: 125
  },
  {
    name: "Sporidex 500",
    salts: "Cephalexin 500mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "First-generation cephalosporin antibiotic.",
    dosage: "1 capsule every 6-8 hours",
    category: "Antibiotics",
    sideEffects: "Diarrhea, nausea",
    suggestedPrice: 95
  },
  {
    name: "Clavam 625",
    salts: "Amoxicillin 500mg + Clavulanic Acid 125mg",
    manufacturer: "Alkem Laboratories",
    description: "Beta-lactamase resistant antibiotic.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "GI upset, skin rash",
    suggestedPrice: 175
  },
  {
    name: "Azithral 500",
    salts: "Azithromycin 500mg",
    manufacturer: "Alembic Pharmaceuticals",
    description: "Macrolide for respiratory infections.",
    dosage: "1 tablet daily for 3 days",
    category: "Antibiotics",
    sideEffects: "Nausea, diarrhea",
    suggestedPrice: 85
  },
  {
    name: "Novamox 500",
    salts: "Amoxicillin 500mg",
    manufacturer: "Cipla Ltd",
    description: "Broad-spectrum penicillin antibiotic.",
    dosage: "1 capsule 3 times daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, rash",
    suggestedPrice: 55
  },
  {
    name: "Suprax 200",
    salts: "Cefixime 200mg",
    manufacturer: "Lupin Ltd",
    description: "Third-generation cephalosporin.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, stomach upset",
    suggestedPrice: 145
  },
  {
    name: "Moxicip 400",
    salts: "Moxifloxacin 400mg",
    manufacturer: "Cipla Ltd",
    description: "Fourth-generation fluoroquinolone.",
    dosage: "1 tablet once daily",
    category: "Antibiotics",
    sideEffects: "Nausea, dizziness, QT prolongation",
    suggestedPrice: 195
  },
  {
    name: "Azax 500",
    salts: "Azithromycin 500mg",
    manufacturer: "Ranbaxy Laboratories",
    description: "Z-pack equivalent for bacterial infections.",
    dosage: "1 tablet daily for 3 days",
    category: "Antibiotics",
    sideEffects: "GI upset, headache",
    suggestedPrice: 95
  },
  {
    name: "Erythrocin 500",
    salts: "Erythromycin Stearate 500mg",
    manufacturer: "Abbott India",
    description: "Macrolide for penicillin-allergic patients.",
    dosage: "1 tablet every 6-8 hours",
    category: "Antibiotics",
    sideEffects: "GI upset, hepatotoxicity",
    suggestedPrice: 85
  },
  {
    name: "Roxid 150",
    salts: "Roxithromycin 150mg",
    manufacturer: "Alembic Pharmaceuticals",
    description: "Macrolide for respiratory infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Nausea, abdominal pain",
    suggestedPrice: 95
  },
  {
    name: "Clindac A 150",
    salts: "Clindamycin 150mg",
    manufacturer: "Alkem Laboratories",
    description: "For bone and soft tissue infections.",
    dosage: "1 capsule 4 times daily",
    category: "Antibiotics",
    sideEffects: "Diarrhea, C. diff colitis",
    suggestedPrice: 125
  },
  {
    name: "Flagyl 400",
    salts: "Metronidazole 400mg",
    manufacturer: "Abbott India",
    description: "For anaerobic and protozoal infections.",
    dosage: "1 tablet 3 times daily",
    category: "Antibiotics",
    sideEffects: "Metallic taste, nausea",
    suggestedPrice: 35
  },
  {
    name: "Fasigyn 500",
    salts: "Tinidazole 500mg",
    manufacturer: "Pfizer Ltd",
    description: "For amoebiasis and giardiasis.",
    dosage: "4 tablets as single dose",
    category: "Antibiotics",
    sideEffects: "Metallic taste, nausea",
    suggestedPrice: 55
  },
  {
    name: "Septran DS",
    salts: "Sulfamethoxazole 800mg + Trimethoprim 160mg",
    manufacturer: "GlaxoSmithKline",
    description: "Cotrimoxazole for UTI and respiratory infections.",
    dosage: "1 tablet twice daily",
    category: "Antibiotics",
    sideEffects: "Rash, bone marrow suppression",
    suggestedPrice: 35
  },
  {
    name: "Furadantin 100",
    salts: "Nitrofurantoin 100mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Urinary antiseptic for UTI.",
    dosage: "1 capsule 4 times daily with food",
    category: "Antibiotics",
    sideEffects: "Nausea, pulmonary reactions",
    suggestedPrice: 55
  },

  // ==================== MORE DIABETES BRANDS ====================
  {
    name: "Glucophage 500",
    salts: "Metformin 500mg",
    manufacturer: "Merck Ltd",
    description: "Original brand metformin for diabetes.",
    dosage: "1 tablet twice daily with meals",
    category: "Diabetes Care",
    sideEffects: "GI upset, lactic acidosis (rare)",
    suggestedPrice: 35
  },
  {
    name: "Glucophage XR 500",
    salts: "Metformin XR 500mg",
    manufacturer: "Merck Ltd",
    description: "Extended release metformin for better tolerability.",
    dosage: "1-2 tablets with dinner",
    category: "Diabetes Care",
    sideEffects: "Less GI upset than regular",
    suggestedPrice: 55
  },
  {
    name: "Amaryl 1",
    salts: "Glimepiride 1mg",
    manufacturer: "Sanofi India",
    description: "Sulfonylurea for type 2 diabetes.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain",
    suggestedPrice: 55
  },
  {
    name: "Amaryl 2",
    salts: "Glimepiride 2mg",
    manufacturer: "Sanofi India",
    description: "Higher strength sulfonylurea.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain",
    suggestedPrice: 75
  },
  {
    name: "Amaryl M1",
    salts: "Glimepiride 1mg + Metformin 500mg",
    manufacturer: "Sanofi India",
    description: "Combination for dual mechanism control.",
    dosage: "1 tablet with meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, GI upset",
    suggestedPrice: 95
  },
  {
    name: "Amaryl M2",
    salts: "Glimepiride 2mg + Metformin 500mg",
    manufacturer: "Sanofi India",
    description: "Higher strength combination.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, diarrhea",
    suggestedPrice: 115
  },
  {
    name: "Diamicron MR 60",
    salts: "Gliclazide MR 60mg",
    manufacturer: "Serdia Pharmaceuticals",
    description: "Modified release sulfonylurea.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain",
    suggestedPrice: 85
  },
  {
    name: "Gluformin 500",
    salts: "Metformin 500mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Generic metformin for diabetes.",
    dosage: "1 tablet twice daily",
    category: "Diabetes Care",
    sideEffects: "Nausea, diarrhea",
    suggestedPrice: 25
  },
  {
    name: "Zoryl M1",
    salts: "Glimepiride 1mg + Metformin 500mg",
    manufacturer: "Intas Pharmaceuticals",
    description: "Affordable combination therapy.",
    dosage: "1 tablet with meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, GI upset",
    suggestedPrice: 75
  },
  {
    name: "Glynase MF",
    salts: "Glipizide 5mg + Metformin 500mg",
    manufacturer: "USV Private Limited",
    description: "Glipizide combination for diabetes.",
    dosage: "1 tablet before meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, nausea",
    suggestedPrice: 65
  },
  {
    name: "Obimet SR 500",
    salts: "Metformin SR 500mg",
    manufacturer: "Mankind Pharma",
    description: "Sustained release metformin.",
    dosage: "1 tablet with dinner",
    category: "Diabetes Care",
    sideEffects: "Less GI side effects",
    suggestedPrice: 35
  },
  {
    name: "Tribet 2",
    salts: "Glibenclamide 2.5mg + Metformin 400mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Older combination for diabetes.",
    dosage: "1 tablet before meals",
    category: "Diabetes Care",
    sideEffects: "Severe hypoglycemia risk",
    suggestedPrice: 45
  },
  {
    name: "Gemer 1",
    salts: "Glimepiride 1mg + Metformin 500mg SR",
    manufacturer: "Sun Pharmaceutical",
    description: "SR combination for once daily dosing.",
    dosage: "1 tablet with breakfast",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, GI upset",
    suggestedPrice: 85
  },
  {
    name: "Glycinorm M 80",
    salts: "Gliclazide 80mg + Metformin 500mg",
    manufacturer: "Ipca Laboratories",
    description: "Gliclazide-based combination.",
    dosage: "1 tablet with meals",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, weight gain",
    suggestedPrice: 75
  },
  {
    name: "Tenepride M 500",
    salts: "Teneligliptin 20mg + Metformin 500mg",
    manufacturer: "Zydus Healthcare",
    description: "DPP-4 inhibitor combination.",
    dosage: "1 tablet twice daily",
    category: "Diabetes Care",
    sideEffects: "Hypoglycemia, GI upset",
    suggestedPrice: 165
  },
  {
    name: "Zita Met 50/500",
    salts: "Sitagliptin 50mg + Metformin 500mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Affordable sitagliptin combination.",
    dosage: "1 tablet twice daily",
    category: "Diabetes Care",
    sideEffects: "Nasopharyngitis, headache",
    suggestedPrice: 245
  },

  // ==================== MORE CARDIAC BRANDS ====================
  {
    name: "Lipitor 10",
    salts: "Atorvastatin 10mg",
    manufacturer: "Pfizer Ltd",
    description: "Original brand atorvastatin.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "Myalgia, liver enzyme elevation",
    suggestedPrice: 145
  },
  {
    name: "Lipitor 20",
    salts: "Atorvastatin 20mg",
    manufacturer: "Pfizer Ltd",
    description: "Medium strength statin.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "Muscle pain, headache",
    suggestedPrice: 195
  },
  {
    name: "Crestor 10",
    salts: "Rosuvastatin 10mg",
    manufacturer: "AstraZeneca India",
    description: "Potent statin for LDL reduction.",
    dosage: "1 tablet daily",
    category: "Heart Health",
    sideEffects: "Myalgia, headache",
    suggestedPrice: 195
  },
  {
    name: "Crestor 20",
    salts: "Rosuvastatin 20mg",
    manufacturer: "AstraZeneca India",
    description: "Higher strength rosuvastatin.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Myopathy, proteinuria",
    suggestedPrice: 265
  },
  {
    name: "Storvas 10",
    salts: "Atorvastatin 10mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Generic atorvastatin for cholesterol.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "Muscle aches, GI upset",
    suggestedPrice: 85
  },
  {
    name: "Rozucor 10",
    salts: "Rosuvastatin 10mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Affordable rosuvastatin brand.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Myalgia, constipation",
    suggestedPrice: 145
  },
  {
    name: "Arkamin 0.1",
    salts: "Clonidine 0.1mg",
    manufacturer: "Unichem Laboratories",
    description: "Centrally acting antihypertensive.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Drowsiness, dry mouth, rebound hypertension",
    suggestedPrice: 25
  },
  {
    name: "Prazopress 2.5",
    salts: "Prazosin 2.5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Alpha-blocker for hypertension.",
    dosage: "1 tablet at bedtime",
    category: "Heart Health",
    sideEffects: "First-dose hypotension, dizziness",
    suggestedPrice: 35
  },
  {
    name: "Minipress XL 5",
    salts: "Prazosin XL 5mg",
    manufacturer: "Pfizer Ltd",
    description: "Extended release alpha-blocker.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, weakness",
    suggestedPrice: 95
  },
  {
    name: "Cardivas 3.125",
    salts: "Carvedilol 3.125mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Starting dose carvedilol for heart failure.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Dizziness, fatigue",
    suggestedPrice: 25
  },
  {
    name: "Cardace 2.5",
    salts: "Ramipril 2.5mg",
    manufacturer: "Sanofi India",
    description: "ACE inhibitor for BP and heart protection.",
    dosage: "1 capsule once daily",
    category: "Heart Health",
    sideEffects: "Dry cough, hyperkalemia",
    suggestedPrice: 45
  },
  {
    name: "Cardace 5",
    salts: "Ramipril 5mg",
    manufacturer: "Sanofi India",
    description: "Standard dose ACE inhibitor.",
    dosage: "1 capsule once daily",
    category: "Heart Health",
    sideEffects: "Cough, dizziness",
    suggestedPrice: 65
  },
  {
    name: "Telma 40",
    salts: "Telmisartan 40mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "ARB for hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, diarrhea",
    suggestedPrice: 95
  },
  {
    name: "Telma 80",
    salts: "Telmisartan 80mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Higher strength telmisartan.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hypotension, hyperkalemia",
    suggestedPrice: 135
  },
  {
    name: "Telma H",
    salts: "Telmisartan 40mg + HCTZ 12.5mg",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "ARB with diuretic combination.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hypokalemia, dizziness",
    suggestedPrice: 125
  },
  {
    name: "Repace 50",
    salts: "Losartan 50mg",
    manufacturer: "Sun Pharmaceutical",
    description: "ARB for hypertension and diabetic nephropathy.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, hyperkalemia",
    suggestedPrice: 75
  },
  {
    name: "Repace H",
    salts: "Losartan 50mg + HCTZ 12.5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Combination for resistant hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Electrolyte imbalance",
    suggestedPrice: 95
  },
  {
    name: "Amlong 5",
    salts: "Amlodipine 5mg",
    manufacturer: "Micro Labs",
    description: "CCB for hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Ankle swelling, flushing",
    suggestedPrice: 35
  },
  {
    name: "Amlong 10",
    salts: "Amlodipine 10mg",
    manufacturer: "Micro Labs",
    description: "Higher strength amlodipine.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Edema, headache",
    suggestedPrice: 55
  },
  {
    name: "Stamlo 5",
    salts: "Amlodipine 5mg",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Popular amlodipine brand.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Ankle swelling, palpitations",
    suggestedPrice: 45
  },
  {
    name: "Cilacar 10",
    salts: "Cilnidipine 10mg",
    manufacturer: "J.B. Chemicals",
    description: "L/N-type CCB for hypertension.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Headache, flushing",
    suggestedPrice: 125
  },
  {
    name: "Cilacar 20",
    salts: "Cilnidipine 20mg",
    manufacturer: "J.B. Chemicals",
    description: "Higher strength cilnidipine.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Dizziness, tachycardia",
    suggestedPrice: 175
  },
  {
    name: "Concor 2.5",
    salts: "Bisoprolol 2.5mg",
    manufacturer: "Merck Ltd",
    description: "Starting dose beta-blocker.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Fatigue, bradycardia",
    suggestedPrice: 55
  },
  {
    name: "Concor 5",
    salts: "Bisoprolol 5mg",
    manufacturer: "Merck Ltd",
    description: "Standard dose bisoprolol.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Cold extremities, dizziness",
    suggestedPrice: 85
  },
  {
    name: "Betaloc 50",
    salts: "Metoprolol Tartrate 50mg",
    manufacturer: "AstraZeneca India",
    description: "Beta-blocker for BP and angina.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Fatigue, bradycardia",
    suggestedPrice: 55
  },
  {
    name: "Met XL 25",
    salts: "Metoprolol Succinate XL 25mg",
    manufacturer: "AstraZeneca India",
    description: "Extended release metoprolol.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Fatigue, dizziness",
    suggestedPrice: 65
  },
  {
    name: "Met XL 50",
    salts: "Metoprolol Succinate XL 50mg",
    manufacturer: "AstraZeneca India",
    description: "Standard XL metoprolol dose.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bradycardia, hypotension",
    suggestedPrice: 95
  },
  {
    name: "Nebicard 5",
    salts: "Nebivolol 5mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Third-generation beta-blocker.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Headache, fatigue",
    suggestedPrice: 125
  },
  {
    name: "Plavix 75",
    salts: "Clopidogrel 75mg",
    manufacturer: "Sanofi India",
    description: "Original brand antiplatelet.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising",
    suggestedPrice: 195
  },
  {
    name: "Clopivas 75",
    salts: "Clopidogrel 75mg",
    manufacturer: "Cipla Ltd",
    description: "Generic clopidogrel brand.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, GI upset",
    suggestedPrice: 95
  },
  {
    name: "Deplatt 75",
    salts: "Clopidogrel 75mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Antiplatelet for CV protection.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding risk",
    suggestedPrice: 85
  },
  {
    name: "Deplatt A 75/75",
    salts: "Clopidogrel 75mg + Aspirin 75mg",
    manufacturer: "Torrent Pharmaceuticals",
    description: "Dual antiplatelet therapy.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising",
    suggestedPrice: 115
  },
  {
    name: "Sorbitrate 5",
    salts: "Isosorbide Dinitrate 5mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Nitrate for angina (sublingual).",
    dosage: "1 tablet under tongue as needed",
    category: "Heart Health",
    sideEffects: "Headache, hypotension",
    suggestedPrice: 25
  },
  {
    name: "Imdur 30",
    salts: "Isosorbide Mononitrate 30mg",
    manufacturer: "AstraZeneca India",
    description: "Long-acting nitrate for angina prevention.",
    dosage: "1 tablet once daily in morning",
    category: "Heart Health",
    sideEffects: "Headache, flushing",
    suggestedPrice: 65
  },
  {
    name: "Nitrocontin 2.6",
    salts: "Nitroglycerin CR 2.6mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Controlled release nitroglycerin.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Headache, dizziness",
    suggestedPrice: 55
  },
  {
    name: "Xarelto 10",
    salts: "Rivaroxaban 10mg",
    manufacturer: "Bayer",
    description: "DOAC for DVT prevention post-surgery.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Bleeding, anemia",
    suggestedPrice: 225
  },
  {
    name: "Xarelto 15",
    salts: "Rivaroxaban 15mg",
    manufacturer: "Bayer",
    description: "For DVT/PE treatment.",
    dosage: "1 tablet twice daily with food initially",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising",
    suggestedPrice: 285
  },
  {
    name: "Xarelto 20",
    salts: "Rivaroxaban 20mg",
    manufacturer: "Bayer",
    description: "Maintenance dose for AF stroke prevention.",
    dosage: "1 tablet once daily with food",
    category: "Heart Health",
    sideEffects: "Bleeding risk",
    suggestedPrice: 295
  },
  {
    name: "Eliquis 2.5",
    salts: "Apixaban 2.5mg",
    manufacturer: "Pfizer Ltd",
    description: "Reduced dose DOAC for elderly/renal impairment.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Bleeding, bruising",
    suggestedPrice: 175
  },
  {
    name: "Eliquis 5",
    salts: "Apixaban 5mg",
    manufacturer: "Pfizer Ltd",
    description: "Standard dose for AF and VTE.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Bleeding, nausea",
    suggestedPrice: 225
  },
  {
    name: "Pradaxa 110",
    salts: "Dabigatran 110mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Direct thrombin inhibitor.",
    dosage: "1 capsule twice daily",
    category: "Heart Health",
    sideEffects: "Bleeding, dyspepsia",
    suggestedPrice: 195
  },
  {
    name: "Pradaxa 150",
    salts: "Dabigatran 150mg",
    manufacturer: "Boehringer Ingelheim",
    description: "Higher dose for stroke prevention in AF.",
    dosage: "1 capsule twice daily",
    category: "Heart Health",
    sideEffects: "Bleeding, GI upset",
    suggestedPrice: 245
  },
  {
    name: "Entresto 50",
    salts: "Sacubitril 24mg + Valsartan 26mg",
    manufacturer: "Novartis India",
    description: "ARNI for HFrEF (starting dose).",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Hypotension, hyperkalemia",
    suggestedPrice: 395
  },
  {
    name: "Entresto 100",
    salts: "Sacubitril 49mg + Valsartan 51mg",
    manufacturer: "Novartis India",
    description: "Target dose ARNI for heart failure.",
    dosage: "1 tablet twice daily",
    category: "Heart Health",
    sideEffects: "Dizziness, cough, renal impairment",
    suggestedPrice: 545
  },
  {
    name: "Verospir 25",
    salts: "Spironolactone 25mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Potassium-sparing diuretic.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Gynecomastia, hyperkalemia",
    suggestedPrice: 35
  },
  {
    name: "Aldactone 25",
    salts: "Spironolactone 25mg",
    manufacturer: "RPG Life Sciences",
    description: "Original brand spironolactone.",
    dosage: "1 tablet once or twice daily",
    category: "Heart Health",
    sideEffects: "Breast tenderness, menstrual irregularity",
    suggestedPrice: 45
  },
  {
    name: "Lasix 40",
    salts: "Furosemide 40mg",
    manufacturer: "Sanofi India",
    description: "Loop diuretic for fluid overload.",
    dosage: "1-2 tablets in morning",
    category: "Heart Health",
    sideEffects: "Dehydration, hypokalemia",
    suggestedPrice: 15
  },
  {
    name: "Dytor 10",
    salts: "Torsemide 10mg",
    manufacturer: "Cipla Ltd",
    description: "Loop diuretic with longer action.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Electrolyte imbalance",
    suggestedPrice: 55
  },
  {
    name: "Dytor Plus 10",
    salts: "Torsemide 10mg + Spironolactone 25mg",
    manufacturer: "Cipla Ltd",
    description: "Combination diuretic for heart failure.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Hyperkalemia, dehydration",
    suggestedPrice: 95
  },
  {
    name: "Digoxin 0.25mg",
    salts: "Digoxin 0.25mg",
    manufacturer: "GlaxoSmithKline",
    description: "Cardiac glycoside for AF and heart failure.",
    dosage: "1 tablet once daily",
    category: "Heart Health",
    sideEffects: "Toxicity: nausea, vision changes, arrhythmia",
    suggestedPrice: 15
  },

  // ==================== PEDIATRIC MEDICINES ====================
  {
    name: "Calpol Pediatric",
    salts: "Paracetamol 120mg/5ml",
    manufacturer: "GlaxoSmithKline",
    description: "Pediatric fever and pain relief.",
    dosage: "2.5-10ml based on age/weight",
    category: "Pediatric",
    sideEffects: "Rare at correct doses",
    suggestedPrice: 45
  },
  {
    name: "Meftal P",
    salts: "Mefenamic Acid 50mg/5ml",
    manufacturer: "Blue Cross Laboratories",
    description: "Pediatric analgesic suspension.",
    dosage: "Based on body weight",
    category: "Pediatric",
    sideEffects: "GI upset, rash",
    suggestedPrice: 55
  },
  {
    name: "Ibugesic Plus",
    salts: "Ibuprofen 100mg + Paracetamol 162.5mg per 5ml",
    manufacturer: "Cipla Ltd",
    description: "Pediatric fever and pain suspension.",
    dosage: "Based on age and weight",
    category: "Pediatric",
    sideEffects: "GI upset, rash",
    suggestedPrice: 65
  },
  {
    name: "Augmentin DDS",
    salts: "Amoxicillin 400mg + Clavulanic Acid 57mg per 5ml",
    manufacturer: "GlaxoSmithKline",
    description: "Pediatric antibiotic suspension.",
    dosage: "Based on weight - twice daily",
    category: "Pediatric",
    sideEffects: "Diarrhea, diaper rash",
    suggestedPrice: 195
  },
  {
    name: "Azithromycin 200mg/5ml",
    salts: "Azithromycin 200mg/5ml",
    manufacturer: "Cipla Ltd",
    description: "Pediatric azithromycin suspension.",
    dosage: "10mg/kg once daily for 3 days",
    category: "Pediatric",
    sideEffects: "Diarrhea, vomiting",
    suggestedPrice: 85
  },
  {
    name: "Cefixime 50mg/5ml",
    salts: "Cefixime 50mg/5ml",
    manufacturer: "Mankind Pharma",
    description: "Pediatric cephalosporin suspension.",
    dosage: "8mg/kg/day in 2 divided doses",
    category: "Pediatric",
    sideEffects: "Diarrhea, stomach upset",
    suggestedPrice: 75
  },
  {
    name: "Cefpodoxime 50mg/5ml",
    salts: "Cefpodoxime Proxetil 50mg/5ml",
    manufacturer: "Lupin Ltd",
    description: "Pediatric cephalosporin for respiratory infections.",
    dosage: "10mg/kg/day in 2 doses",
    category: "Pediatric",
    sideEffects: "Diarrhea, diaper rash",
    suggestedPrice: 95
  },
  {
    name: "Cotrimoxazole Suspension",
    salts: "Sulfamethoxazole + Trimethoprim",
    manufacturer: "GlaxoSmithKline",
    description: "Pediatric cotrimoxazole for UTI.",
    dosage: "Based on weight twice daily",
    category: "Pediatric",
    sideEffects: "Rash, GI upset",
    suggestedPrice: 45
  },
  {
    name: "Metrogyl Suspension",
    salts: "Metronidazole 200mg/5ml",
    manufacturer: "J.B. Chemicals",
    description: "Pediatric metronidazole for GI infections.",
    dosage: "7.5mg/kg three times daily",
    category: "Pediatric",
    sideEffects: "Metallic taste, nausea",
    suggestedPrice: 55
  },
  {
    name: "Cetrizine Syrup",
    salts: "Cetirizine 5mg/5ml",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Pediatric antihistamine for allergies.",
    dosage: "2.5-10ml based on age",
    category: "Pediatric",
    sideEffects: "Drowsiness",
    suggestedPrice: 45
  },
  {
    name: "Levocetrizine Syrup",
    salts: "Levocetirizine 2.5mg/5ml",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Pediatric antihistamine with less sedation.",
    dosage: "Based on age once daily",
    category: "Pediatric",
    sideEffects: "Mild drowsiness",
    suggestedPrice: 55
  },
  {
    name: "Montelukast 4mg Granules",
    salts: "Montelukast 4mg",
    manufacturer: "Sun Pharmaceutical",
    description: "For pediatric asthma and allergic rhinitis.",
    dosage: "1 sachet at bedtime (2-5 years)",
    category: "Pediatric",
    sideEffects: "Headache, abdominal pain",
    suggestedPrice: 125
  },
  {
    name: "Salbutamol Syrup",
    salts: "Salbutamol 2mg/5ml",
    manufacturer: "Cipla Ltd",
    description: "Pediatric bronchodilator for wheeze.",
    dosage: "0.1mg/kg three times daily",
    category: "Pediatric",
    sideEffects: "Tremor, tachycardia",
    suggestedPrice: 35
  },
  {
    name: "Ascoril Drops",
    salts: "Terbutaline + Bromhexine + Guaifenesin",
    manufacturer: "Glenmark Pharmaceuticals",
    description: "Pediatric cough drops for infants.",
    dosage: "Based on age",
    category: "Pediatric",
    sideEffects: "Restlessness, nausea",
    suggestedPrice: 65
  },
  {
    name: "Sinarest Drops",
    salts: "Paracetamol + Phenylephrine + Chlorpheniramine",
    manufacturer: "Centaur Pharmaceuticals",
    description: "Pediatric cold drops.",
    dosage: "Based on age",
    category: "Pediatric",
    sideEffects: "Drowsiness",
    suggestedPrice: 45
  },
  {
    name: "Domperidone Suspension",
    salts: "Domperidone 5mg/5ml",
    manufacturer: "Sun Pharmaceutical",
    description: "Pediatric anti-emetic for vomiting.",
    dosage: "0.25mg/kg three times daily",
    category: "Pediatric",
    sideEffects: "Drowsiness, dry mouth",
    suggestedPrice: 45
  },
  {
    name: "Ondansetron Syrup",
    salts: "Ondansetron 2mg/5ml",
    manufacturer: "Sun Pharmaceutical",
    description: "Pediatric anti-emetic for nausea.",
    dosage: "Based on weight",
    category: "Pediatric",
    sideEffects: "Headache, constipation",
    suggestedPrice: 75
  },
  {
    name: "Ranitidine Syrup",
    salts: "Ranitidine 75mg/5ml",
    manufacturer: "J.B. Chemicals",
    description: "Pediatric H2 blocker for reflux.",
    dosage: "2mg/kg twice daily",
    category: "Pediatric",
    sideEffects: "Headache, drowsiness",
    suggestedPrice: 55
  },
  {
    name: "Omeprazole Suspension",
    salts: "Omeprazole 20mg/5ml",
    manufacturer: "Dr. Reddy's Laboratories",
    description: "Pediatric PPI for GERD.",
    dosage: "1mg/kg once daily",
    category: "Pediatric",
    sideEffects: "Headache, nausea",
    suggestedPrice: 85
  },
  {
    name: "Multivitamin Drops",
    salts: "Vitamin A, D, E, C, B-Complex",
    manufacturer: "Abbott India",
    description: "Pediatric multivitamin supplement.",
    dosage: "0.5-1ml daily",
    category: "Pediatric",
    sideEffects: "Generally well tolerated",
    suggestedPrice: 125
  },
  {
    name: "Iron Drops",
    salts: "Ferrous Sulfate + Folic Acid",
    manufacturer: "Abbott India",
    description: "Pediatric iron supplement for anemia.",
    dosage: "Based on weight",
    category: "Pediatric",
    sideEffects: "Constipation, dark stools",
    suggestedPrice: 85
  },
  {
    name: "Zinc Sulfate Syrup",
    salts: "Zinc Sulfate 20mg/5ml",
    manufacturer: "FDC Limited",
    description: "Zinc supplement for diarrhea in children.",
    dosage: "10-20mg daily for 10-14 days",
    category: "Pediatric",
    sideEffects: "Nausea, metallic taste",
    suggestedPrice: 55
  },
  {
    name: "Calcium + D3 Syrup",
    salts: "Calcium + Vitamin D3",
    manufacturer: "USV Private Limited",
    description: "Pediatric bone health supplement.",
    dosage: "5-10ml daily",
    category: "Pediatric",
    sideEffects: "Constipation, nausea",
    suggestedPrice: 125
  },
  {
    name: "Gripe Water",
    salts: "Dill Oil + Sodium Bicarbonate",
    manufacturer: "Woodward's",
    description: "For infant colic and gas.",
    dosage: "2.5-5ml 2-3 times daily",
    category: "Pediatric",
    sideEffects: "Generally safe",
    suggestedPrice: 75
  },
  {
    name: "Bonnisan",
    salts: "Dill + Fennel + Mint (Herbal)",
    manufacturer: "Himalaya Wellness",
    description: "Herbal digestive for infants.",
    dosage: "2.5-5ml twice daily",
    category: "Pediatric",
    sideEffects: "Rare allergic reactions",
    suggestedPrice: 85
  },

  // ==================== AYURVEDIC & HERBAL ====================
  {
    name: "Liv 52",
    salts: "Caper Bush + Chicory + Other Herbs",
    manufacturer: "Himalaya Wellness",
    description: "Hepatoprotective for liver health.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Generally well tolerated",
    suggestedPrice: 145
  },
  {
    name: "Cystone",
    salts: "Didymocarpus + Saxifraga + Other Herbs",
    manufacturer: "Himalaya Wellness",
    description: "For kidney stones and UTI.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Rare GI upset",
    suggestedPrice: 175
  },
  {
    name: "Confido",
    salts: "Kokilaksha + Vanya Kahu + Other Herbs",
    manufacturer: "Himalaya Wellness",
    description: "For male reproductive health.",
    dosage: "1 tablet twice daily",
    category: "Ayurvedic",
    sideEffects: "Generally safe",
    suggestedPrice: 165
  },
  {
    name: "Tentex Forte",
    salts: "Ashwagandha + Shilajit + Kapikachhu",
    manufacturer: "Himalaya Wellness",
    description: "For male vitality and performance.",
    dosage: "1-2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Rarely GI upset",
    suggestedPrice: 195
  },
  {
    name: "Speman",
    salts: "Kokilaksha + Hygrophila + Other Herbs",
    manufacturer: "Himalaya Wellness",
    description: "For male fertility and sperm health.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Generally safe",
    suggestedPrice: 185
  },
  {
    name: "Septilin",
    salts: "Guggulu + Licorice + Tinospora",
    manufacturer: "Himalaya Wellness",
    description: "Immune modulator for recurrent infections.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Rare allergic reactions",
    suggestedPrice: 155
  },
  {
    name: "Diabecon",
    salts: "Gymnema + Pterocarpus + Shilajit",
    manufacturer: "Himalaya Wellness",
    description: "Herbal support for blood sugar management.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Hypoglycemia if combined with antidiabetics",
    suggestedPrice: 195
  },
  {
    name: "Mentat",
    salts: "Brahmi + Ashwagandha + Mandukaparni",
    manufacturer: "Himalaya Wellness",
    description: "Memory and cognitive enhancer.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Drowsiness (rare)",
    suggestedPrice: 175
  },
  {
    name: "Ashwagandha Capsules",
    salts: "Ashwagandha Extract 500mg",
    manufacturer: "Himalaya Wellness",
    description: "Adaptogen for stress and energy.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Drowsiness, GI upset",
    suggestedPrice: 195
  },
  {
    name: "Brahmi Capsules",
    salts: "Brahmi (Bacopa monnieri) Extract",
    manufacturer: "Himalaya Wellness",
    description: "For memory and cognitive function.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Nausea, drowsiness",
    suggestedPrice: 165
  },
  {
    name: "Triphala Churna",
    salts: "Amla + Haritaki + Bibhitaki",
    manufacturer: "Dabur",
    description: "Digestive cleanser and detoxifier.",
    dosage: "1 teaspoon at bedtime with warm water",
    category: "Ayurvedic",
    sideEffects: "Loose stools initially",
    suggestedPrice: 95
  },
  {
    name: "Chyawanprash",
    salts: "Amla + 40+ Herbs",
    manufacturer: "Dabur",
    description: "Immunity booster and rejuvenator.",
    dosage: "1-2 teaspoons twice daily",
    category: "Ayurvedic",
    sideEffects: "Weight gain if excessive",
    suggestedPrice: 295
  },
  {
    name: "Giloy Tablets",
    salts: "Tinospora cordifolia Extract",
    manufacturer: "Patanjali",
    description: "Immunity booster and fever reducer.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Hypoglycemia in diabetics",
    suggestedPrice: 85
  },
  {
    name: "Tulsi Drops",
    salts: "Ocimum sanctum Extract",
    manufacturer: "Organic India",
    description: "For immunity and respiratory health.",
    dosage: "5-10 drops in warm water twice daily",
    category: "Ayurvedic",
    sideEffects: "Blood thinning effect",
    suggestedPrice: 145
  },
  {
    name: "Shankhpushpi Syrup",
    salts: "Convolvulus pluricaulis Extract",
    manufacturer: "Dabur",
    description: "For memory, anxiety, and sleep.",
    dosage: "2-4 teaspoons twice daily",
    category: "Ayurvedic",
    sideEffects: "Drowsiness",
    suggestedPrice: 95
  },
  {
    name: "Arjuna Capsules",
    salts: "Terminalia arjuna Extract",
    manufacturer: "Himalaya Wellness",
    description: "For heart health and cholesterol.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Mild GI upset",
    suggestedPrice: 175
  },
  {
    name: "Guggulu Tablets",
    salts: "Commiphora mukul Extract",
    manufacturer: "Dabur",
    description: "For cholesterol and joint health.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "GI upset, skin rash",
    suggestedPrice: 145
  },
  {
    name: "Shatavari Capsules",
    salts: "Asparagus racemosus Extract",
    manufacturer: "Himalaya Wellness",
    description: "For female reproductive health.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Weight gain, nasal congestion",
    suggestedPrice: 195
  },
  {
    name: "Karela Capsules",
    salts: "Momordica charantia Extract",
    manufacturer: "Himalaya Wellness",
    description: "For blood sugar support.",
    dosage: "1 capsule twice daily before meals",
    category: "Ayurvedic",
    sideEffects: "Hypoglycemia, GI upset",
    suggestedPrice: 145
  },
  {
    name: "Shilajit Capsules",
    salts: "Purified Shilajit Extract",
    manufacturer: "Dabur",
    description: "For energy, vitality, and anti-aging.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Rare - dizziness, increased heart rate",
    suggestedPrice: 295
  },
  {
    name: "Hadjod Tablets",
    salts: "Cissus quadrangularis Extract",
    manufacturer: "Himalaya Wellness",
    description: "For bone health and fracture healing.",
    dosage: "2 tablets twice daily",
    category: "Ayurvedic",
    sideEffects: "Mild GI upset",
    suggestedPrice: 165
  },
  {
    name: "Neem Capsules",
    salts: "Azadirachta indica Extract",
    manufacturer: "Himalaya Wellness",
    description: "Blood purifier and skin health.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Hypoglycemia, infertility at high doses",
    suggestedPrice: 145
  },
  {
    name: "Curcumin (Turmeric)",
    salts: "Curcuma longa Extract 95% Curcuminoids",
    manufacturer: "Organic India",
    description: "Anti-inflammatory and antioxidant.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Blood thinning, GI upset",
    suggestedPrice: 395
  },
  {
    name: "Amla Capsules",
    salts: "Emblica officinalis Extract",
    manufacturer: "Dabur",
    description: "Vitamin C rich antioxidant.",
    dosage: "1-2 capsules daily",
    category: "Ayurvedic",
    sideEffects: "Hypoglycemia in diabetics",
    suggestedPrice: 125
  },
  {
    name: "Moringa Capsules",
    salts: "Moringa oleifera Extract",
    manufacturer: "Organic India",
    description: "Superfood for overall nutrition.",
    dosage: "1-2 capsules daily",
    category: "Ayurvedic",
    sideEffects: "Mild laxative effect",
    suggestedPrice: 245
  },
  {
    name: "Gokshura Capsules",
    salts: "Tribulus terrestris Extract",
    manufacturer: "Himalaya Wellness",
    description: "For urinary and reproductive health.",
    dosage: "1 capsule twice daily",
    category: "Ayurvedic",
    sideEffects: "Stomach upset, sleep problems",
    suggestedPrice: 175
  }
];

/**
 * Search medicine database with fuzzy matching
 * @param {string} query - Search query
 * @param {number} limit - Maximum results to return
 * @returns {Array} - Matching medicines
 */
function searchMedicines(query, limit = 10) {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  // Score each medicine based on match quality
  const scored = medicineDatabase.map(med => {
    let score = 0;
    const name = med.name.toLowerCase();
    const salts = med.salts.toLowerCase();
    const manufacturer = med.manufacturer.toLowerCase();
    
    // Exact name match (highest score)
    if (name === searchTerm) score += 100;
    // Name starts with query
    else if (name.startsWith(searchTerm)) score += 80;
    // Name contains query
    else if (name.includes(searchTerm)) score += 60;
    
    // Salt match
    if (salts.includes(searchTerm)) score += 40;
    
    // Manufacturer match
    if (manufacturer.includes(searchTerm)) score += 20;
    
    // Word boundary match (e.g., "met" matches "Metformin" better than "Promethazine")
    const words = name.split(' ');
    for (const word of words) {
      if (word.startsWith(searchTerm)) score += 30;
    }
    
    return { ...med, score };
  });
  
  // Filter and sort by score
  return scored
    .filter(med => med.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...med }) => med); // Remove score from output
}

/**
 * Get all unique categories in database
 */
function getCategories() {
  return [...new Set(medicineDatabase.map(m => m.category))];
}

/**
 * Get all unique manufacturers in database
 */
function getManufacturers() {
  return [...new Set(medicineDatabase.map(m => m.manufacturer))].sort();
}

/**
 * Get total count of medicines in database
 */
function getMedicineCount() {
  return medicineDatabase.length;
}

export {
  medicineDatabase,
  searchMedicines,
  getCategories,
  getManufacturers,
  getMedicineCount
};
