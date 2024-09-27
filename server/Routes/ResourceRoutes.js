
const express = require('express');
const router = express.Router();
const { getAllColleges } = require('../Controllers/ResourceController'); 
const { getAcademicYearsByCollege } = require('../Controllers/ResourceController');
// get level
router.get('/academic-years/:collegeId', getAcademicYearsByCollege );

// الحصول على جميع الكليات
router.get('/colleges', getAllColleges);

module.exports = router;
