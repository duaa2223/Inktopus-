const mongoose = require('mongoose');

const SpecializationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
});

module.exports = mongoose.model('Specialization', SpecializationSchema);
