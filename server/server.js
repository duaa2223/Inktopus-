const express = require('express');
// const mongoose = require('mongoose');
const connectDB = require('./Config/db');
require('dotenv').config(); // تحميل المتغيرات من ملف .env
const app = express();
const habitday = require('./Routes/HabitRoutes.js');
const contentRoutes = require('./Routes/ContentRoutes');
const reviewRoutes = require('./Routes/ReviewRoutes');
const userRoutes = require('./Routes/UserRoutes')
const collegeRoutes = require('./Routes/ResourceRoutes.js'); 
// const collegeRoutes = require('./Routes/CollegeRoutes');
// const academicYearRoutes = require('./Routes/AcademicYearRoutes');
const cors = require('cors'); // استيراد مكتبة cors

// Middleware
app.use(cors()); // تمكين CORS لجميع الطلبات
app.use(express.json()); // لتمكين معالجة JSON



// Connect to MongoDB
connectDB(); // الاتصال بقاعدة البيانات

// Routes
app.use('/api/habits', habitday); // استخدام المسارات الخاصة بالـ habits
app.use('/api',contentRoutes);
// app.use('/api', collegeRoutes);
// app.use('/api', academicYearRoutes);
app.use('/api/review',reviewRoutes)
app.use('/api/users',userRoutes)
app.use('/api', collegeRoutes);
// بدء الاستماع للطلبات على المنفذ المحدد
const PORT = process.env.PORT ;
// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
