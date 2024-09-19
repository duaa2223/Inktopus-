const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middleware/auth');
const { createBook, getBooks, getBookssfillter,updateBook, deleteBook,complateBook} = require('../Controllers/habitController');
const {loginUser,registerUser} = require('../Controllers/UserController');
// تسجيل مستخدم جديد
router.post('/register', registerUser);  

// تسجيل الدخول والحصول على توكن
router.post('/login', loginUser);
//Add book 
router.post('/addbook',authenticateToken, createBook);  
// Add Habit
// router.post('/add', addHabit);
// Get Habits
router.get('/get',authenticateToken, getBooks);  
// get habites fillter
router.get('/getfillter',authenticateToken,getBookssfillter);  
// Update Habit
router.put('/update/:id',authenticateToken, updateBook); 
//completed
router.put('/complate/:id',authenticateToken,complateBook);
// Delete Habit
router.put('/delete/:id',authenticateToken, deleteBook);

module.exports = router;
