// require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
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
const academicYearRoutes = require('./Routes/ResourceRoutes.js');
const cors = require('cors'); // استيراد مكتبة cors


app.use(bodyParser.json()); 
app.use(cookieParser())
// Middleware
// app.use(cors()); // تمكين CORS لجميع الطلبات
app.use(cors({
  origin: 'http://localhost:5173', // السماح بالطلبات من هذا النطاق
  credentials: true // السماح بإرسال الكوكيز مع الطلبات
}));

app.use(express.json()); // لتمكين معالجة JSON



// Connect to MongoDB
connectDB(); // الاتصال بقاعدة البيانات

// Routes
app.use('/api/habits', habitday); // استخدام المسارات الخاصة بالـ habits
app.use('/api',contentRoutes);
app.use('/api', collegeRoutes);
app.use('/api', academicYearRoutes);
app.use('/api/review',reviewRoutes)
app.use('/api/users',userRoutes)
// بدء الاستماع للطلبات على المنفذ المحدد
const PORT = process.env.PORT ;
// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
