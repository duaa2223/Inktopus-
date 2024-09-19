const express = require('express');
const router = express.Router();
const contentController = require('../Controllers/ContentController');

// إضافة محتوى جديد
router.post('/contents/add', contentController.createContent); 

// استعراض جميع المحتويات
router.get('/contents', contentController.getAllContents);

// تحديث محتوى
router.put('/contents/:id', contentController.updateContent); 

// حذف محتوى
router.put('/contents/del/:id', contentController.softDeleteContent);
//فلتر
router.get('/contents/filter', contentController.getFilteredContents);
module.exports = router;
