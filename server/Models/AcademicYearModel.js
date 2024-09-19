const mongoose = require('mongoose');

const academicYearSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

module.exports = AcademicYear;
