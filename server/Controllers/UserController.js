// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User'); 

// // register new user 
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;
    
//     // hash pass
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // creat new user 
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // login and tack token 
// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // find user 
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     // is password correct
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     // cerat token jwt 
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require ('../Models/User.js');
// // register new user 
//  exports.registerUser = async(req,res) => {
//     try {
//         const {username,password} =req.body;
//         //hash password 
//         const hashpassword = await bcrypt.hash(password,10);
//         //creat new user
//         const newUser = new User({username,password:hashpassword});
//         await newUser.save();
//  res.status(201).json({message: 'User registered successfully' });
//     }
//     catch(error){
//         res.status(500).json({message: error.message });
//     }
// };
// // login and tack token 
// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // find user 
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     // is password correct
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     // cerat token jwt 
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
//////////////////////////////////////////////////////////////
// Controllers/userController.js
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');

// // تسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // التحقق من وجود الحقول المطلوبة
//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     // تحقق مما إذا كان اسم المستخدم موجودًا بالفعل
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     // تشفير كلمة المرور
//     const newPassword = 'securepassword123'; // كلمة مرور جديدة للتجربة
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     console.log('Hashed Password:', hashedPassword);
    

//     // إنشاء مستخدم جديد
//     const newUser = new User({ username, password: hashpassword });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تسجيل الدخول والحصول على توكن
// // exports.loginUser = async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     // التحقق من وجود الحقول المطلوبة
// //     if (!username || !password) {
// //       return res.status(400).json({ message: 'Username and password are required' });
// //     }

// //     // البحث عن المستخدم
// //     const user = await User.findOne({ username });
// //     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

// //     // التحقق من صحة كلمة المرور
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

// //     // إنشاء توكن JWT
// //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

// //     res.json({ token });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     console.log('User found:', user);
//     console.log('Password entered:', password);
//     console.log('Password stored:', user.password);

//     const isMatch = await bcrypt.compare(newPassword, hashedPassword);
// console.log('Password match:', isMatch);


//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

///////////////////////////////////////////////////////////////////work session 
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');

// // تسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'Username, email, and password are required' });
//     }

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تسجيل الدخول والحصول على توكن
// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password, otp } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     if (user.otp && user.otpExpiry > Date.now()) {
//       if (user.otp !== otp) {
//         return res.status(400).json({ message: 'Invalid OTP' });
//       }
//     }
//     const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password'); // استبعاد كلمة المرور من النتيجة
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تحديث بيانات المستخدم
// exports.updateProfile = async (req, res) => {
//   try {
//     const updates = req.body;
//     const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // حذف حساب المستخدم (تحديث حالة isDeleted)
// exports.deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.user._id, { isDeleted: true }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // الحصول على جميع المستخدمين (مخصص للمسؤولين)
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({ isDeleted: false });
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // الحصول على مستخدم معين (مخصص للمسؤولين)
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// ////////////////////////////////////////////////////////////////////////////////////////////////////otp
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');

// // إعداد البريد الإلكتروني
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // تسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: 'Username, email, password, and confirmPassword are required' });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate OTP
//     const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       otp,
//       otpExpiry
//     });

//     await newUser.save();

//     // Send OTP via email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP code is ${otp}. It is valid for 10 minutes.`
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: 'User registered successfully. Please check your email for the OTP.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تحقق من OTP وتسجيل الدخول
// exports.verifyOtpAndLogin = async (req, res) => {
//   try {
//     const { email, otp, password } = req.body;

//     if (!email || !otp || !password) {
//       return res.status(400).json({ message: 'Email, OTP, and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     if (user.otp !== otp || user.otpExpiry < Date.now()) {
//       return res.status(400).json({ message: 'Invalid or expired OTP' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     user.otp = undefined; // Clear OTP
//     user.otpExpiry = undefined; // Clear OTP expiry
//     user.isActivated = true; // Activate user
//     await user.save();

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تسجيل الدخول للمستخدمين الموجودين
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     if (!user.isActivated) {
//       return res.status(400).json({ message: 'Account not activated. Please check your email for OTP verification.' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
//////////////////////////////////////////////////////////////////otp
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../Models/User');

// // إعداد البريد الإلكتروني
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // تسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     // التحقق من الحقول المطلوبة
//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: 'Username, email, password, and confirmPassword are required' });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     // تحقق من عدم وجود المستخدم
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // تشفير كلمة المرور
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // توليد OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpiry = Date.now() + 10 * 60 * 1000; // صالح لمدة 10 دقائق

//     // إنشاء مستخدم جديد
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       otp,
//       otpExpiry
//     });

//     await newUser.save();

//     // إرسال OTP عبر البريد الإلكتروني
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP code is ${otp}. It is valid for 10 minutes.`
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: 'User registered successfully. Please check your email for the OTP.' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// // تحقق من OTP وتسجيل الدخول
// exports.verifyOtpAndLogin = async (req, res) => {
//   try {
//     const { email, otp, password } = req.body;

//     if (!email || !otp || !password) {
//       return res.status(400).json({ message: 'Email, OTP, and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     // تحقق من صحة الـ OTP
//     if (user.otp !== otp || user.otpExpiry < Date.now()) {
//       return res.status(400).json({ message: 'Invalid or expired OTP' });
//     }

//     // تحقق من صحة كلمة المرور
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     // تفعيل المستخدم
//     user.otp = undefined; // حذف OTP
//     user.otpExpiry = undefined; // حذف وقت انتهاء الـ OTP
//     user.isActivated = true; // تفعيل المستخدم
//     await user.save();

//     // توليد توكن JWT
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// // تسجيل الدخول للمستخدمين الموجودين
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     // التحقق من تفعيل الحساب
//     if (!user.isActivated) {
//       return res.status(400).json({ message: 'Account not activated. Please check your email for OTP verification.' });
//     }

//     // تحقق من صحة كلمة المرور
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     // توليد توكن JWT
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

////////////////////////////////////////////cookie 
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');

// // تسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'Username, email, and password are required' });
//     }

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تسجيل الدخول والحصول على توكن وتخزينه في الكوكي
// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password, otp } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     if (user.otp && user.otpExpiry > Date.now()) {
//       if (user.otp !== otp) {
//         return res.status(400).json({ message: 'Invalid OTP' });
//       }
//     }

//     // إنشاء التوكن
//     const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // تخزين التوكن في الكوكي
//     res.cookie('jwt', token, {
//       httpOnly: true,  // حماية التوكن من الوصول عبر JavaScript (أمان ضد XSS)
//       secure: process.env.NODE_ENV === 'production',  // تمكين HTTPS في بيئة الإنتاج
//       maxAge: 3600000,  // مدة صلاحية الكوكي (1 ساعة)
//       sameSite: 'Strict', // لمنع هجمات CSRF
//     });

//     // الاستجابة مع رسالة نجاح فقط
//     res.status(200).json({ message: 'Logged in successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // الحصول على بيانات المستخدم
// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password'); // استبعاد كلمة المرور من النتيجة
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تحديث بيانات المستخدم
// exports.updateProfile = async (req, res) => {
//   try {
//     const updates = req.body;
//     const user = await User.findByIdAndUpdate(req.user.userId, updates, { new: true }).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // حذف حساب المستخدم (تحديث حالة isDeleted)
// exports.deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.user.userId, { isDeleted: true }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // الحصول على جميع المستخدمين (مخصص للمسؤولين)
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({ isDeleted: false });
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // الحصول على مستخدم معين (مخصص للمسؤولين)
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
///////////////////////////////////////////////////
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');
// // const sendOTPEmail = require('../utils/sendOTPEmail'); // افترض وجود دالة لإرسال الـOTP عبر البريد الإلكتروني

// // // تسجيل مستخدم جديد
// // exports.registerUser = async (req, res) => {
// //   try {
// //     const { username, email, password } = req.body;

// //     if (!username || !email || !password) {
// //       return res.status(400).json({ message: 'Username, email, and password are required' });
// //     }

// //     const existingUser = await User.findOne({ username });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'Username already exists' });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // إنشاء مستخدم جديد مع تعيين OTP
// //     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // توليد رقم عشوائي (OTP)
// //     const otpExpiry = Date.now() + 10 * 60 * 1000; // صلاحية OTP لـ 10 دقائق

// //     const newUser = new User({ username, email, password: hashedPassword, otp, otpExpiry });
// //     await newUser.save();

// //     // إرسال OTP إلى البريد الإلكتروني
// //     await sendOTPEmail(email, otp);

// //     res.status(201).json({ message: 'User registered successfully. Please check your email for the OTP.' });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// const sendOTPEmail = require('../utils/sendOTPEmail');
// const users = {}; // يمكنك استخدام قاعدة بيانات لتخزين معلومات المستخدمين

// const registerUser = async (req, res) => {
//     const { email } = req.body;
    
//     // هنا يمكنك توليد OTP عشوائي
//     const otp = Math.floor(100000 + Math.random() * 900000); // توليد OTP مكون من 6 أرقام
    
//     // تخزين OTP في الذاكرة (يمكنك استخدام قاعدة بيانات)
//     users[email] = { otp, verified: false };

//     // إرسال OTP إلى البريد الإلكتروني
//     await sendOTPEmail(email, otp);

//     res.status(200).send('Check your email for the OTP.');
// };

// const verifyOTP = (req, res) => {
//     const { email, otp } = req.body;

//     // التحقق من أن الرمز المدخل يتطابق مع ما تم تخزينه
//     if (users[email] && users[email].otp === otp) {
//         users[email].verified = true; // تحديث حالة التحقق
//         res.status(200).send('User registered successfully!');
//     } else {
//         res.status(400).send('Invalid OTP. Please try again.');
//     }
// };

// module.exports = {
//     registerUser,
//     verifyOTP,
// };

// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password, otp } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     if (!user.otp || user.otpExpiry < Date.now()) {
//       return res.status(400).json({ message: 'OTP has expired, please request a new one.' });
//     }

//     if (user.otp !== otp) {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }

//     // إزالة OTP بعد التحقق الناجح
//     user.otp = null;
//     user.otpExpiry = null;
//     await user.save();

//     // إنشاء التوكن
//     const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     const refreshToken = jwt.sign({ userId: user._id.toString() }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

//     // تخزين التوكن في الكوكي
//     res.cookie('jwt', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 3600000,
//       sameSite: 'Strict',
//     });

//     // تخزين refresh token
//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 أيام
//       sameSite: 'Strict',
//     });

//     res.status(200).json({ message: 'Logged in successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.refreshToken = async (req, res) => {
//   const { refreshToken } = req.cookies;

//   if (!refreshToken) {
//     return res.status(401).json({ message: 'Refresh token not found, please log in again.' });
//   }

//   try {
//     const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
//     const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // تحديث التوكن في الكوكي
//     res.cookie('jwt', newToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 3600000, // 1 ساعة
//       sameSite: 'Strict',
//     });

//     res.status(200).json({ message: 'Token refreshed successfully' });
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid refresh token, please log in again.' });
//   }
// };

////////////////////////////////////////////////////////
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');
// const sendOTPEmail = require('../utils/sendOTPEmail');
// const users = {}; // يمكنك استخدام قاعدة بيانات لتخزين معلومات المستخدمين

// تسجيل مستخدم جديد
// const registerUser = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         if (!username || !email || !password) {
//             return res.status(400).json({ message: 'Username, email, and password are required' });
//         }

//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const otp = Math.floor(100000 + Math.random() * 900000).toString(); // توليد OTP مكون من 6 أرقام
//         const otpExpiry = Date.now() + 10 * 60 * 1000; // صلاحية OTP لـ 10 دقائق

//         const newUser = new User({ username, email, password: hashedPassword, otp, otpExpiry });
//         await newUser.save();

//         // إرسال OTP إلى البريد الإلكتروني
//         await sendOTPEmail(email, otp);
//         res.status(201).json({ message: 'User registered successfully. Please check your email for the OTP.' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // التحقق من OTP
// const verifyOTP = (req, res) => {
//     const { email, otp } = req.body;

//     if (users[email] && users[email].otp === otp) {
//         users[email].verified = true; // تحديث حالة التحقق
//         res.status(200).send('User registered successfully!');
//     } else {
//         res.status(400).send('Invalid OTP. Please try again.');
//     }
// };

// تسجيل مستخدم جديد
// const registerUser = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         if (!username || !email || !password) {
//             return res.status(400).json({ message: 'Username, email, and password are required' });
//         }

//         // const otp = Math.floor(100000 + Math.random() * 900000).toString(); // توليد OTP
//         // const otpExpiry = Date.now() + 10 * 60 * 1000; // صلاحية OTP لـ 10 دقائق

//         // // تخزين معلومات المستخدم مؤقتاً
//         // users[email] = { username, password: await bcrypt.hash(password, 10), otp, otpExpiry };
//         const otp = Math.floor(100000 + Math.random() * 900000).toString();
//         const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 دقائق من الآن
      
//         users[email] = { username, password: await bcrypt.hash(password, 10), otp, otpExpiry };

        
//         // إرسال OTP إلى البريد الإلكتروني
//         await sendOTPEmail(email, otp);
//         res.status(200).json({ message: 'OTP sent successfully. Please check your email.' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// التحقق من OTP
// const verifyOTP = async (req, res) => {
//     const { email, otp } = req.body;

//     if (users[email] && users[email].otp === otp && users[email].otpExpiry > Date.now()) {
//         const { username, password } = users[email];

//         // إنشاء مستخدم جديد في قاعدة البيانات
//         const newUser = new User({ username, email, password });
//         await newUser.save();

//         // إزالة معلومات المستخدم من الذاكرة المؤقتة
//         delete users[email];

//         res.status(200).json({ message: 'User registered successfully!' });
//     } else {
//         res.status(400).send('Invalid OTP or OTP has expired. Please try again.');
//     }
// };
// const verifyOTP = async (req, res) => {
//   console.log('Request Body:', req.body); // إضافة هذه السطر
//   const { email, otp } = req.body;
  
//   console.log('Email:', email);
//   console.log('OTP:', otp);
//   console.log('User Data:', users[email]);

//   if (users[email] && users[email].otp === otp && users[email].otpExpiry > Date.now()) {
//       const { username, password } = users[email];

//       // إنشاء مستخدم جديد
//       const newUser = new User({ username, email, password });
//       await newUser.save();

//       delete users[email];

//       return res.status(200).json({ message: 'User registered successfully!' });
//   } else {
//       return res.status(400).send('Invalid OTP or OTP has expired. Please try again.');
//   }
// };
// const verifyOTP = async (req, res) => {
//   const { email, otp } = req.body; // هذه السطر يجب أن يعمل بشكل صحيح

//   console.log("Request Body:", req.body); // عرض الطلب
//   console.log("Email:", email); // تحقق من البريد
//   console.log("OTP:", otp); // تحقق من الـ OTP

//   if (users[email] && users[email].otp === otp && users[email].otpExpiry > Date.now()) {
//       const { username, password } = users[email];

//       // إنشاء مستخدم جديد في قاعدة البيانات
//       const newUser = new User({ username, email, password });
//       await newUser.save();

//       // إزالة معلومات المستخدم من الذاكرة المؤقتة
//       delete users[email];

//       res.status(200).json({ message: 'User registered successfully!' });
//   } else {
//       res.status(400).send('Invalid OTP or OTP has expired. Please try again.');
//   }
// };
////////////////////////////////////////////////////////////////
// const verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;

//   console.log("Request Body:", req.body);
//   console.log("Email:", email);
//   console.log("OTP:", otp);

//   if (!email || !otp) {
//     return res.status(400).json({ message: 'Email and OTP are required' });
//   }

//   if (users[email] && users[email].otp === otp && users[email].otpExpiry > Date.now()) {
//     const { username, password } = users[email];

//     try {
//       const newUser = new User({ username, email, password });
//       await newUser.save();

//       delete users[email];

//       const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//       res.status(200).json({ 
//         message: 'User registered successfully!',
//         token: token,
//         user: {
//           id: newUser._id,
//           username: newUser.username,
//           email: newUser.email
//         }
//       });
//     } catch (error) {
//       console.error('Error saving user:', error);
//       res.status(500).json({ message: 'Error registering user' });
//     }
//   } else {
//     res.status(400).json({ message: 'Invalid OTP or OTP has expired. Please try again.' });
//   }
// };
////////////////////////////////////////////////////////////////////////////////
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../Models/User');
// const sendOTPEmail = require('../utils/sendOTPEmail');
// const users = {}; // يمكنك استخدام قاعدة بيانات لتخزين معلومات المستخدمين


// const registerUser = async (req, res) => {
//   try {
//       const { username, email, password } = req.body;

//       if (!username || !email || !password) {
//           return res.status(400).json({ message: 'Username, email, and password are required' });
//       }

//       // const otp = Math.floor(100000 + Math.random() * 900000).toString(); // توليد OTP
//       // const otpExpiry = Date.now() + 10 * 60 * 1000; // صلاحية OTP لـ 10 دقائق

//       // // تخزين معلومات المستخدم مؤقتاً
//       // users[email] = { username, password: await bcrypt.hash(password, 10), otp, otpExpiry };
//       const otp = Math.floor(100000 + Math.random() * 900000).toString();
//       const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 دقائق من الآن
    
//       users[email] = { username, password: await bcrypt.hash(password, 10), otp, otpExpiry };

      
//       // إرسال OTP إلى البريد الإلكتروني
//       await sendOTPEmail(email, otp);
//       res.status(200).json({ message: 'OTP sent successfully. Please check your email.' });
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// };

// const verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;

//   console.log("Request Body:", req.body);
//   console.log("Email:", email);
//   console.log("OTP:", otp);

//   if (!email || !otp) {
//     return res.status(400).json({ message: 'Email and OTP are required' });
//   }

//   // تأكد من أن `users` معرف وأن له قيمة
//   if (!users || !users[email]) {
//     return res.status(400).json({ message: 'User not found or OTP expired' });
//   }

//   if (users[email].otp === otp && users[email].otpExpiry > Date.now()) {
//     const { username, password } = users[email];

//     try {
//       const newUser = new User({ username, email, password });
//       await newUser.save();

//       delete users[email];

//       const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//       res.status(200).json({ 
//         message: 'User registered successfully!',
//         token: token,
//         user: {
//           id: newUser._id,
//           username: newUser.username,
//           email: newUser.email
//         }
//       });
//     } catch (error) {
//       console.error('Error saving user:', error);
//       res.status(500).json({ message: 'Error registering user' });
//     }
//   } else {
//     res.status(400).json({ message: 'Invalid OTP or OTP has expired. Please try again.' });
//   }
// };
// // تسجيل الدخول
// const loginUser = async (req, res) => {
//     try {
//         const { username, password, otp } = req.body;

//         if (!username || !password) {
//             return res.status(400).json({ message: 'Username and password are required' });
//         }

//         const user = await User.findOne({ username });
//         if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//         if (!user.otp || user.otpExpiry < Date.now()) {
//             return res.status(400).json({ message: 'OTP has expired, please request a new one.' });
//         }

//         if (user.otp !== otp) {
//             return res.status(400).json({ message: 'Invalid OTP' });
//         }

//         // إزالة OTP بعد التحقق الناجح
//         user.otp = null;
//         user.otpExpiry = null;
//         await user.save();

//         // إنشاء التوكن
//         const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         const refreshToken = jwt.sign({ userId: user._id.toString() }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

//         // تخزين التوكن في الكوكي
//         res.cookie('jwt', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             maxAge: 3600000,
//             sameSite: 'Strict',
//         });

//         // تخزين refresh token
//         res.cookie('refreshToken', refreshToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             maxAge: 7 * 24 * 60 * 60 * 1000, // 7 أيام
//             sameSite: 'Strict',
//         });

//         res.status(200).json({ message: 'Logged in successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // تحديث التوكن
// const refreshToken = async (req, res) => {
//     const { refreshToken } = req.cookies;

//     if (!refreshToken) {
//         return res.status(401).json({ message: 'Refresh token not found, please log in again.' });
//     }

//     try {
//         const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
//         const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         // تحديث التوكن في الكوكي
//         res.cookie('jwt', newToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             maxAge: 3600000, // 1 ساعة
//             sameSite: 'Strict',
//         });

//         res.status(200).json({ message: 'Token refreshed successfully' });
//     } catch (error) {
//         res.status(401).json({ message: 'Invalid refresh token, please log in again.' });
//     }
// };

// module.exports = {
//     registerUser,
//     verifyOTP,
//     loginUser,
//     refreshToken,
// };
////////////////////////////////////////////////////////////////////////
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/User');
const sendOTPEmail = require('../utils/sendOTPEmail');
const users = {}; // يمكنك استخدام قاعدة بيانات لتخزين معلومات المستخدمين

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  // تحقق من الحقول المطلوبة
  if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  // توليد OTP وصلاحيته
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 دقائق

  // تخزين بيانات المستخدم مع الـ OTP
  const newUser = new User({ username, email, password: await bcrypt.hash(password, 10), otp, otpExpiry });
  await newUser.save(); // حفظ المستخدم في قاعدة البيانات

  // إرسال OTP إلى البريد الإلكتروني
  await sendOTPEmail(email, otp);
  res.status(200).json({ message: 'OTP sent successfully. Please check your email.' });
};

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  console.log("Received email:", email);
  console.log("Received OTP:", otp);

try{
  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  // البحث عن المستخدم في قاعدة البيانات
  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    console.log("User not found with email:", email);
    console.log("Invalid OTP or OTP expired");
    return res.status(400).json({ message: 'Invalid OTP or OTP has expired. Please try again.' });
  }
  // إزالة الـ OTP بعد التحقق الناجح
  user.otp = null; // يجب أن تصبح null بعد التحقق
  user.otpExpiry = null; // يجب أن تصبح null بعد التحقق
  user.isActivated = true; // تفعيل الحساب
  await user.save(); // حفظ التغييرات في قاعدة البيانات

  // // إنشاء التوكن
  // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // إنشاء التوكن
const token = jwt.sign(
  { 
    userId: user._id.toString(), 
    role: user.role // إضافة الـ role إلى التوكن
  }, 
  process.env.JWT_SECRET, 
  { expiresIn: '1h' }
);

  res.cookie('token', token, { httpOnly: true });
  return res.status(201).json({  message: 'OTP verified successfully. User is logged in.' });
} catch (err) {
  console.error('Error in register:', err.message);
  return res.status(500).json({ message: 'Server error' });
}
};

// تسجيل الدخول
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid username or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

       
        // // إنشاء التوكن
        // const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // // const refreshToken = jwt.sign({ userId: user._id.toString() }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
// إنشاء التوكن
const token = jwt.sign(
  { 
    userId: user._id.toString(), 
    role: user.role // إضافة الـ role إلى التوكن
  }, 
  process.env.JWT_SECRET, 
  { expiresIn: '1h' }
);

        // تخزين التوكن في الكوكي
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
            sameSite: 'Strict', 
        });

        // تخزين refresh token
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     maxAge: 7 * 24 * 60 * 60 * 1000, // 7 أيام
        //     sameSite: 'Strict',
        // });

        res.status(200).json({ message: 'Logged in successfully', role: user.role  });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}; 


const getLoginStatus = async (req, res) => {
  try {
    // التحقق من وجود التوكن في الكوكي
    const token = req.cookies.token;
    if (!token) {
      // return res.status(200).json({ isLoggedIn: false, role: user.role  });
      return res.status(200).json({ isLoggedIn: false, role: null }); // استخدم null بدلاً من user.role
    }

    // التحقق من صحة التوكن
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(200).json({ isLoggedIn: false });
    }

    // res.status(200).json({ isLoggedIn: true });
    res.status(200).json({ isLoggedIn: true, role: user.role }); // أضف role هن
  } catch (error) {
    console.error('Error in getLoginStatus:', error);
    res.status(200).json({ isLoggedIn: false });
  }
};


const logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};

// تحديث التوكن
// const refreshToken = async (req, res) => {
//     const { refreshToken } = req.cookies;

//     if (!refreshToken) {
//         return res.status(401).json({ message: 'Refresh token not found, please log in again.' });
//     }

//     try {
//         const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
//         const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         // تحديث التوكن في الكوكي
//         res.cookie('jwt', newToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             maxAge: 3600000, // 1 ساعة
//             sameSite: 'Strict',
//         });

//         res.status(200).json({ message: 'Token refreshed successfully' });
//     } catch (error) {
//         res.status(401).json({ message: 'Invalid refresh token, please log in again.'});
//     }
// };


const getUserProfile = async (req, res) => {
  try {
    // التحقق من وجود التوكن في الكوكي
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // التحقق من صحة التوكن
    const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verifytoken.userId).select('-password'); // استثناء كلمة المرور من البيانات المعادة

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // إرسال بيانات المستخدم
    res.status(200).json({
      username: user.username,
      email: user.email,
      profilePicture: user.profilePicture,
      role: user.role,
      bio: user.bio,
      savedBooks: user.savedBooks,
      publishedBooks: user.publishedBooks,
      yearsOfExperience: user.yearsOfExperience,
      // يمكنك إضافة المزيد من المعلومات هنا حسب الحاجة
    });
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
    registerUser,
    verifyOTP,
    loginUser,
    getLoginStatus,
    logout,
    getUserProfile
    // refreshToken,
};
