const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
// const authenticateToken = require('../Middleware/auth');

// مسار التسجيل
// router.post('/register', registerUser);

// مسار التحقق من OTP
router.post('/verify-otp', userController.verifyOTP); 

// Route لإنشاء مستخدم جديد أو تسجيل مستخدم جديد
router.post('/register', userController.registerUser);  

// Route لتسجيل الدخول وإرجاع توكن JWT
router.post('/login', userController.loginUser); 

// // Route للحصول على معلومات المستخدم المحمي بالـ token
// router.get('/profile', authenticateToken, userController.getProfile);

// // Route لتحديث ملف المستخدم (محمية بالـ token)
// router.put('/profile', authenticateToken, userController.updateProfile);

// // Route لحذف مستخدم (محمية بالـ token)
// router.delete('/profile', authenticateToken, userController.deleteUser);

// Route لاسترجاع قائمة الكتب المحفوظة للمستخدم (محمية بالـ token)
// router.get('/saved-books', authenticateToken, userController.getSavedBooks);

module.exports = router;
