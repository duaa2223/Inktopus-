// const mongoose = require('mongoose');

// const collegeSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   imageUrl: { type: String } 
// });

// const College = mongoose.model('College', collegeSchema);

// module.exports = College;
///////////////////////////////////////////////////////
const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  nameAr: { type: String, required: true }, // الاسم بالعربية
  imageUrl: { type: String },
  description: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const College = mongoose.model('College', collegeSchema);

module.exports = College;