const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/User');
const sendOTPEmail = require('../utils/sendOTPEmail');
const users = {}; // يمكنك استخدام قاعدة بيانات لتخزين معلومات المستخدمين

// const registerUser = async (req, res) => {
//   const { username, email, password } = req.body;
//   // تحقق من الحقول المطلوبة
//   if (!username || !email || !password) {
//       return res.status(400).json({ message: 'Username, email, and password are required' });
//   }

//   // توليد OTP وصلاحيته
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 دقائق

//   // تخزين بيانات المستخدم مع الـ OTP
//   const newUser = new User({ username, email, password: await bcrypt.hash(password, 10), otp, otpExpiry });
//   await newUser.save(); // حفظ المستخدم في قاعدة البيانات

//   // إرسال OTP إلى البريد الإلكتروني
//   await sendOTPEmail(email, otp);
//   res.status(200).json({ message: 'OTP sent successfully. Please check your email.' });
// };

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check required fields
    if (!username || !email || !password) {
      return res.status(400).json({ 
        status: 'error',
        error: 'required_fields',
        message: 'Username, email, and password are required' 
      });
    }

    // Check for existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        status: 'error',
        error: 'duplicate_email',
        message: 'Email is already registered, please use a different email'
      });
    }

    // Check for existing username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        status: 'error',
        error: 'duplicate_username',
        message: 'Username is already taken, please choose another one'
      });
    }

    // Generate OTP and expiry
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes

    // Create new user
    const newUser = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      otp,
      otpExpiry
    });

    await newUser.save();
    await sendOTPEmail(email, otp);

    return res.status(200).json({
      status: 'success',
      message: 'OTP sent successfully. Please check your email.'
    });

  } catch (error) {
    console.error('Error in register:', error);
    // Check if this is a MongoDB duplicate key error
    if (error.code === 11000) {
      if (error.keyPattern.email) {
        return res.status(400).json({
          status: 'error',
          error: 'duplicate_email',
          message: 'Email is already registered, please use a different email'
        });
      }
      if (error.keyPattern.username) {
        return res.status(400).json({
          status: 'error',
          error: 'duplicate_username',
          message: 'Username is already taken, please choose another one'
        });
      }
    }

    return res.status(500).json({
      status: 'error',
      error: 'server_error',
      message: 'Registration failed. Please try again later.'
    });
  }
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
      password: user.password,
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

// update password
const updateUserPassword = async (req, res) => {
  try {
    // Check if there is a token in the cookie
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the token
    const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verifytoken.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the password
    const { currentPassword, newPassword } = req.body;

    // Verify the current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password and update the user
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error in updateUserPassword:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// دالة لاسترجاع جميع المستخدمين
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'username email role isActivated').exec(); // تحديد الحقول المطلوبة
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
};

// دالة لتعديل حالة المستخدم (نشط/غير نشط)
const toggleUserActivation = async (req, res) => {
  try {
    const { userId } = req.params; // ID المستخدم المراد تعديله
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // تعديل حالة التفعيل
    user.isActivated = !user.isActivated;
    await user.save();

    res.status(200).json({ message: "User activation status updated", isActivated: user.isActivated });
  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({ error: "An error occurred while updating user status" });
  }
};



module.exports = {
    registerUser,
    verifyOTP,
    loginUser,
    getLoginStatus,
    logout,
    getUserProfile,
    getAllUsers,
    toggleUserActivation,
    updateUserPassword 
    // refreshToken,
};
