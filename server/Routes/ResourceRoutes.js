
// const express = require('express');
// const router = express.Router();
// const { getAllColleges } = require('../Controllers/ResourceController'); 
// const { getAcademicYearsByCollege } = require('../Controllers/ResourceController');
// // get level
// router.get('/academic-years/:collegeId', getAcademicYearsByCollege );

// // الحصول على جميع الكليات
// router.get('/colleges', getAllColleges);

// module.exports = router;
const express = require('express');
const router = express.Router();
const {
  getAllColleges,
  getAcademicYearsByCollege,
  createCollege,
  createAcademicYear,
  createSpecialization,
  updateSpecialization,
  deleteSpecialization,
  getAllSpecializations,
  getSpecializationsByCollegeAndYear,
  deleteCollege,
  deleteAcademicYear,
  updateCollege,
  updateAcademicYear

} = require('../Controllers/ResourceController');

// colleges
// الحصول على جميع الكليات
router.get('/colleges', getAllColleges);

// إضافة كلية جديدة
router.post('/colleges', createCollege); 

//academic-years
// الحصول على المراحل الدراسية الخاصة بكل كلية
router.get('/academic-years/:collegeId', getAcademicYearsByCollege); 

// إضافة سنة دراسية جديدة
router.post('/academic-years', createAcademicYear);  

// specializations
// إضافة تخصص جديد
router.post('/specializations', createSpecialization); 

// تعديل تخصص
router.put('/specializations/:id', updateSpecialization);

// حذف تخصص
router.delete('/specializations/:id/', deleteSpecialization);  


//حذف كلية 
router.delete('/college/:id/', deleteCollege);  

//حذف سنه 
router.delete('/academic-years/:id', deleteAcademicYear);

// عرض جميع التخصصات
router.get('/specializations', getAllSpecializations); 

router.put('/colleges/:id', updateCollege);


// تحديث مرحلة دراسية
router.put('/academic-years/:id', updateAcademicYear);


// عرض جميع التخصصات
// router.get('/specializations/:id', getAllSpecializations);
// جلب التخصصات بناءً على الكلية والسنة الأكاديمية
// router.get('/specializations/college/:collegeId/year/:yearId', getSpecializations);

// جلب التخصصات بناءً على الكلية والسنة الأكاديمية
// router.get('/specializations/college/:collegeId/year/:yearId', getSpecializationsByCollegeAndYear);

router.get('/specializations/college/:collegeId/year/:yearId', getSpecializationsByCollegeAndYear);
// console.log('Route hit!');

module.exports = router;
