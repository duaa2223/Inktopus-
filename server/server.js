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
const ResourceRoutes = require('./Routes/ResourceRoutes.js'); 
const cartRoutes = require('./Routes/CartRoutes.js');
const applicationRoutes = require('./Routes/publisherRoutes.js');
const paymentRoutes = require('./Routes/PaymentRoutes');

const cors = require('cors'); // استيراد مكتبة cors
const auth = require('./Middleware/auth.js');
const checkRole = require('./Middleware/checkRole');

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
app.use('/dashboard', auth, checkRole('admin'));
// Routes
app.use('/api/habits', habitday); // استخدام المسارات الخاصة بالـ habits
app.use('/api/content',contentRoutes); 
app.use('/api', ResourceRoutes);
app.use('/api/review',reviewRoutes)
app.use('/api/users',userRoutes)  
app.use('/api/cart',cartRoutes) 
app.use('/api/payment',auth, paymentRoutes);
app.use('/api/application',auth,applicationRoutes)
// بدء الاستماع للطلبات على المنفذ المحدد
const PORT = process.env.PORT ;
// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
