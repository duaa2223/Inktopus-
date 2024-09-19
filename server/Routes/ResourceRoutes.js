
const express = require('express');
const router = express.Router();
const { getAllColleges } = require('../Controllers/ResourceController'); 

// الحصول على جميع الكليات
router.get('/colleges', getAllColleges);

module.exports = router;
