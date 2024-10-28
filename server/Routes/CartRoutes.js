// const express = require('express');
// const router = express.Router();
// const { getCart, addToCart, removeFromCart } = require('../Controllers/CartController');
// const { protect } = require('../middleware/authMiddleware');

// // تأكد من أن جميع الوظائف (getCart, addToCart, removeFromCart) معرفة في ملف cartController

// router.get('/', protect, getCart);  // تأكد من أن getCart موجودة ومعرفة بشكل صحيح
// router.post('/add', protect, addToCart);
// router.post('/remove', protect, removeFromCart);

// module.exports = router;
/////////////////////////////////// work
const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart,updateQuantity, clearCart } = require('../Controllers/CartController');
const auth = require('../Middleware/auth');

router.get('/get', auth,getCart); 
router.post('/add',auth, addToCart);  
router.delete('/remove',auth,removeFromCart); 
router.put('/update-quantity',auth, updateQuantity);
router.delete('/clear', auth, clearCart);

module.exports = router