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
