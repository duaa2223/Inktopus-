// const mongoose = require('mongoose');

// const SpecializationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
//   academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
// });

// module.exports = mongoose.model('Specialization', SpecializationSchema);
////////////////////////////////////////////////////////////////////////////////////

// models/Specialization.js
const mongoose = require('mongoose');

const SpecializationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
});

// إنشاء فهرس لمنع تكرار الاسم في نفس السنة الدراسية
SpecializationSchema.index(
  { name: 1, college: 1, academic_year: 1 }, 
  { unique: true }
);

module.exports = mongoose.model('Specialization', SpecializationSchema);
