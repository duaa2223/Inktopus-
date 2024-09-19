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
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/User');

// تسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// تسجيل الدخول والحصول على توكن وتخزينه في الكوكي
exports.loginUser = async (req, res) => {
  try {
    const { username, password, otp } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

    if (user.otp && user.otpExpiry > Date.now()) {
      if (user.otp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    }

    // إنشاء التوكن
    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // تخزين التوكن في الكوكي
    res.cookie('jwt', token, {
      httpOnly: true,  // حماية التوكن من الوصول عبر JavaScript (أمان ضد XSS)
      secure: process.env.NODE_ENV === 'production',  // تمكين HTTPS في بيئة الإنتاج
      maxAge: 3600000,  // مدة صلاحية الكوكي (1 ساعة)
      sameSite: 'Strict', // لمنع هجمات CSRF
    });

    // الاستجابة مع رسالة نجاح فقط
    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// الحصول على بيانات المستخدم
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); // استبعاد كلمة المرور من النتيجة
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// تحديث بيانات المستخدم
exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.userId, updates, { new: true }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// حذف حساب المستخدم (تحديث حالة isDeleted)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.userId, { isDeleted: true }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// الحصول على جميع المستخدمين (مخصص للمسؤولين)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isDeleted: false });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// الحصول على مستخدم معين (مخصص للمسؤولين)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

