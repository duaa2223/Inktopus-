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
////////////////////////////////////////cookie my
// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   try {
//   // الحصول على التوكن من الكوكي
//   const token = req.cookies.token;

//   // if (!token) return res.status(401).json({ message: 'Token required' });
//   if (!token) {
//     return res.status(401).json({ errorMessage: "Unauthorized" });
//   }

//   const verified = jwt.verify(token, process.env.JWT_SECRET);
//   req.user = verified.userId;
//   console.log("req.user: ", req.user);
//   next();
// } catch (err) {
//   console.error(err);
//   res.status(401).json({ errorMessage: "Unauthorized" });
// }
// };

// module.exports = authenticateToken;


// const jwt = require("jsonwebtoken"); // obada
// require("dotenv").config();

// const auth = (req, res, next) => {
//   const token = req.cookies.token;

//   console.log("Received token:", token);
//   try {
//     if (!token) {
//       return res
//         .status(401)
//         .json({ loggedIn: false, message: "No token provided" });
//     }
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     req.body.userId = user.id;
//     console.log("Token verified successfully. User ID:", req.user);
//     next();
//   } catch (error) {
//     console.error("Error verifying token:", error.message);
//     res.status(500).send("Error verifying token: " + error.message);
//   }
// };
// module.exports = auth;
//////////////////////////////////////////////work
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const auth = (req, res, next) => {
//   const token = req.cookies.token; // الحصول على التوكن من الكوكي

//   console.log("Received token:", token);
//   try {
//     if (!token) {
//       return res
//         .status(401)
//         .json({ loggedIn: false, message: "No token provided" });
//     }
//     const user = jwt.verify(token, process.env.JWT_SECRET); // التحقق من التوكن
//     req.user = user; 
//     req.body.userId = user.id;
//     console.log("Token verified successfully. User ID:", req.user);
//     next();
//   } catch (error) {
//     console.error("Error verifying token:", error.message);
//     res.status(500).send("Error verifying token: " + error.message);
//   }
// };

// module.exports = auth;
////////////////////////////////////////////////
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const auth = (req, res, next) => {
//   console.log("Cookies:", req.cookies);
//   const token = req.cookies.token;
//   console.log("Received token:", token);


//   if (!token) {
//     return res
//       .status(401)
//       .json({ loggedIn: false, message: "No token provided" });
//   }

//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     req.user = { id: user.userId }; 
    
//      // تخزين المعرف في req.user.id
//     // req.body.userId = user.userId;  هذه الاصلية قبل ان اضيف التي بالاعلى ليعمل ال فورم الاضافة 
//     console.log("Token verified successfully. User ID:", user.userId); // تم تعديل هذا السطر
//     next();
//   } catch (error) {
//     console.error("Error verifying token:", error.message);
//     if (error.name === 'TokenExpiredError') {
//       return res
//         .status(401)
//         .json({ loggedIn: false, message: "Token expired" });
//     }
//     return res
//       .status(403)
//       .json({ loggedIn: false, message: "Invalid token" });
//   }
// };

// module.exports = auth;

///////////////////////////////////////////////////////////////
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  const token = req.cookies.token;
  console.log("Received token:", token);

  if (!token) {
    return res
      .status(401)
      .json({ loggedIn: false, message: "No token provided" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    
    // إضافة الـ userId والـ role إلى req.user
    req.user = { id: user.userId, role: user.role };

    console.log("Token verified successfully. User ID:", user.userId);
    console.log("User role:", user.role);

    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);
    if (error.name === 'TokenExpiredError') {
      return res
        .status(401)
        .json({ loggedIn: false, message: "Token expired" });
    }
    return res
      .status(403)
      .json({ loggedIn: false, message: "Invalid token" });
  }
};

module.exports = auth;
