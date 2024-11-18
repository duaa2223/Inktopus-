
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