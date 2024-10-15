// Middleware للتحقق من دور المستخدم
const checkRole = (role) => {
    return (req, res, next) => {
      // تأكد أن المستخدم قد تم التحقق منه في Middleware التوكن
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      // تحقق من أن دور المستخدم يطابق الدور المطلوب
      if (req.user.role !== role) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }
  
      next(); // إذا كان الدور صحيحًا، استمر
    };
  };
  
  module.exports = checkRole;
  