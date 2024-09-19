// const jwt = require('jsonwebtoken');

// // Middleware للتحقق من التوكن
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  
//   if (token == null) return res.status(401).json({ message: 'Token required' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => { 
//     if (err) return res.status(403).json({ message: 'Invalid token' });

//     req.user = user; // بعدفك التشفير للتوكن وضعت البيانات في user ثم اسندت قيمته ل  req.user
//     next();
//   });
// };

// module.exports = authenticateToken;
///////////////////////////////////////////////////////////////
// const jwt = require('jsonwebtoken');

// // Middleware للتحقق من التوكن
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization; // استخدام req.headers.authorization
//   const token = authHeader && authHeader.split(' ')[1]; // استخراج التوكن
  
//   if (!token) {
//     return res.status(401).json({ message: 'Token required' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // استخدام 'decoded' لتوضيح البيانات
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }

//     req.user = decoded; // تخزين البيانات المفككة من التوكن في req.user
//     console.log(user);
//     next();
//   });
// };

// module.exports = authenticateToken;
//////////////////////////////////////////////////////////////////////
// const jwt = require('jsonwebtoken');

// // Middleware للتحقق من التوكن
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  
//   if (token == null) return res.status(401).json({ message: 'Token required' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => { 
//     if (err) return res.status(403).json({ message: 'Invalid token' });

//     // تأكد من أن المتغير user يتم تعريفه بشكل صحيح
//     console.log(user); // تحقق من محتوى الـ user هنا
//     req.user = user; // اسناد البيانات التي تم فك تشفيرها للـ req.user
//     console.log(req.user)
//     next();
//   });
// };

// module.exports = authenticateToken;
////////////////////////////////////////////////////session
// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  
//   if (token == null) return res.status(401).json({ message: 'Token required' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => { 
//     if (err) return res.status(403).json({ message: 'Invalid token' });

//     console.log("user from token:", user); // تحقق من محتوى الـ user هنا
//     req.user = user; // اسناد البيانات التي تم فك تشفيرها للـ req.user
//     next();
//   });
// };

// module.exports = authenticateToken;
////////////////////////////////////////cookie
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // الحصول على التوكن من الكوكي
  const token = req.cookies.jwt;

  if (!token) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    // تخزين بيانات المستخدم المستخرجة من التوكن في req.user
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
