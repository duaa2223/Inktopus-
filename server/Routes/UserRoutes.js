const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const checkRole = require('../Middleware/checkRole'); // Middleware للتحقق من الدور

const auth= require('../Middleware/auth');

// مسار التسجيل
// router.post('/register', registerUser);

// مسار التحقق من OTP
router.post('/verify-otp', userController.verifyOTP); 

// Route لإنشاء مستخدم جديد أو تسجيل مستخدم جديد
router.post('/register', userController.registerUser);  

// Route لتسجيل الدخول وإرجاع توكن JWT
router.post('/login', userController.loginUser); 


router.get('/status', userController.getLoginStatus);

// مسار لتسجيل الخروج
router.post('/logout', userController.logout);

// نقطة النهاية الجديدة لجلب بيانات المستخدم
router.get('/profile', userController.getUserProfile); 

// استرجاع جميع المستخدمين
router.get('/users', userController.getAllUsers); 

// مسار لتعديل حالة المستخدم، متاح فقط للمستخدمين الذين لديهم دور "admin"
// router.put('/users/:userId/toggle-activation', auth, checkRole('admin'), userController.toggleUserActivation);

router.get('/users/:userId/toggle-activation', auth, userController.toggleUserActivation);

// update password 
router.put('/users/update-password', userController.updateUserPassword);  

// المسار الخاص بالتحقق من حالة تسجيل الدخول
// router.get('/auth/status', authenticateToken, userController.getLoginStatus );
// Route لتسجيل الخروج
// router.post('/logout', userController.logoutUser);
// // Route للحصول على معلومات المستخدم المحمي بالـ token
// router.get('/profile', authenticateToken, userController.getProfile);

// // Route لتحديث ملف المستخدم (محمية بالـ token)
// router.put('/profile', authenticateToken, userController.updateProfile);

// // Route لحذف مستخدم (محمية بالـ token)
// router.delete('/profile', authenticateToken, userController.deleteUser);

// Route لاسترجاع قائمة الكتب المحفوظة للمستخدم (محمية بالـ token)
// router.get('/saved-books', authenticateToken, userController.getSavedBooks);

module.exports = router;
