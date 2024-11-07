// scripts/resetIndexes.js
const mongoose = require('mongoose');
const { resetIndexes } = require('../models/AcademicYear');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Masterpiece', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    await resetIndexes();
    console.log('تم إعادة تعيين الفهارس بنجاح');
    
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('حدث خطأ:', error);
    process.exit(1);
  }
}

main();