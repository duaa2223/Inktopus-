const express = require('express');
const router = express.Router();
const auth= require('./../Middleware/auth')
const contentController = require('../Controllers/ContentController');

// إضافة محتوى جديد
router.post('/add',auth, contentController.createContent); 

// استعراض جميع المحتويات
router.get('/contents', contentController.getAllContents);  

// تحديث محتوى
router.put('/contents/:id',auth, contentController.updateContent); 

// حذف محتوى
// router.put('/contents/del/:id',auth, contentController.softDeleteContent);
//فلتر
// router.get('/contents/filter', contentController.getFilteredContents);

router.delete('/contents/del/:id', auth, contentController.deleteContent);
// مسار للحصول على تفاصيل كتاب معين
router.get('/book/:id', contentController.getBookDetails);    

// راوت لجلب المحتويات المفلترة باستخدام المسار مع المعلمات
router.get('/college/:collegeId/year/:yearId', contentController.getFilteredContents);

// مسار للحصول على كتب ناشر معين

// الراوت لجلب المحتويات الخاصة بناشر معين
router.get('/publisher', auth, contentController.getPublisherContents); 

// في ملف ContentRoutes.js
router.get('/top-selling', contentController.getTopSellingContent); 


// مسار لزيادة عدد مرات الشراء بناءً على معرف المحتوى
router.patch('/content/:contentId/increment-purchase', contentController.incrementPurchaseCount);

router.get('/content/:contentId/purchase-count', contentController.getPurchaseCount);


module.exports = router;
