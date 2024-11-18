
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