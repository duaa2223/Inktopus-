// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true }
// });

// const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

// module.exports = AcademicYear;
// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
//   imageUrl: { type: String }
// });

// const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

// module.exports = AcademicYear;
// Models/AcademicYearModel.js
////////////////////////////////////////////////////////////
// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   imageUrl: { type: String },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true }
// });

// module.exports = mongoose.model('AcademicYear', academicYearSchema);
/////////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');

const academicYearSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nameAr: { type: String, required: true }, // الاسم بالعربية
  imageUrl: { type: String },
  description: { type: String },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  order: { type: Number, required: true }, // ترتيب السنة الدراسية
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// إنشاء فهرس مركب للكلية والترتيب
academicYearSchema.index({ college: 1, order: 1 }, { unique: true });

const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

module.exports = AcademicYear;