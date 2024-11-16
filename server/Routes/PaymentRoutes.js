// const express = require('express');
// const { processPayment, createPayPalPayment } = require('../controllers/paymentController');
// const router = express.Router();

// // Route for credit card payment
// router.post('/credit', processPayment);

// // Route for PayPal payment
// router.post('/paypal', createPayPalPayment);

// module.exports = router;
// src/routes/paymentRoutes.js
////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const router = express.Router();
// const { check } = require('express-validator');
// const paymentController = require('../Controllers/PaymentController');
// const authMiddleware = require('../Middleware/auth');

// // Validation middleware
// const orderValidation = [
//   check('order.items').isArray().notEmpty(),
//   check('order.shippingAddress').notEmpty(),
//   check('order.shippingAddress.address').notEmpty(),
//   check('order.shippingAddress.city').notEmpty(),
//   check('order.shippingAddress.postalCode').notEmpty(),
//   check('order.shippingAddress.country').notEmpty(),
// ];

// // Routes
// router.post(
//   '/stripe/process',
//   authMiddleware,
//   [...orderValidation, check('token').notEmpty()],
//   paymentController.processStripePayment
// );

// router.post(
//   '/paypal/create',
//   authMiddleware,   
//   orderValidation,
//   paymentController.processPayPalPayment
// );

// router.post(
//   '/paypal/capture',
//   authMiddleware,
//   check('orderID').notEmpty(),
//   paymentController.capturePayPalPayment
// );

// router.get(
//   '/order/:orderId',
//   authMiddleware,
//   paymentController.getOrderStatus
// );

// module.exports = router;
///////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const { check } = require('express-validator');
// const paymentController = require('../Controllers/PaymentController');
// const authMiddleware = require('../Middleware/auth');

// const router = express.Router();

// // التحقق من البيانات المدخلة
// const orderValidation = [
//   check('items').isArray().notEmpty(),
//   check('shippingAddress').notEmpty(),
//   check('shippingAddress.address').notEmpty(),
//   check('shippingAddress.city').notEmpty(),
//   check('shippingAddress.postalCode').notEmpty(),
//   check('shippingAddress.country').notEmpty(),
// ];

// // Routes
// router.post('/paypal/create', authMiddleware, orderValidation, paymentController.processPayPalPayment);
// router.post('/paypal/capture', authMiddleware, check('orderID').notEmpty(), paymentController.capturePayPalPayment);






// module.exports = router;




// In your routes file
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../Controllers/PaymentController');

// router.post('/create-paypal-order', paymentController.createPayPalOrder);  
// router.post('/capture-paypal-payment', paymentController.capturePayPalPayment);
// router.post('/process-credit-card', paymentController.processCreditCardPayment);  

// module.exports = router;
const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/PaymentController');
const auth = require('../Middleware/auth'); 
router.post('/orders', auth, orderController.createOrder);
router.get('/orders/:orderId',  orderController.getOrderById); 
// router.post('/orders', orderController.createOrder); 
router.get('/user-orders', orderController.getOrdersByUser);
router.post('/payment/paypal/capture',auth, orderController.capturePayPalPayment);

router.get('/sales/total',auth, orderController.getTotalSales); 
router.get('/orders', auth, orderController.getAllOrders);  
router.patch('/orders/:orderId/status', auth, orderController.updateOrderStatus);
module.exports = router;