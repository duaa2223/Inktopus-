// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const paypal = require('paypal-rest-sdk');

// paypal.configure({
//   mode: 'sandbox', // or 'live' for production
//   client_id: process.env.PAYPAL_CLIENT_ID,
//   client_secret: process.env.PAYPAL_CLIENT_SECRET
// });

// // Process credit card payment using Stripe
// const processPayment = async (req, res) => {
//   try {
//     const { amount, currency, paymentMethodId } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       payment_method: paymentMethodId,
//       confirm: true
//     });
//     res.json({ success: true, paymentIntent });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// // Create PayPal payment
// const createPayPalPayment = (req, res) => {
//   const { amount, currency } = req.body;
//   const payment = {
//     intent: 'sale',
//     payer: { payment_method: 'paypal' },
//     transactions: [{ amount: { total: amount, currency } }],
//     redirect_urls: {
//       return_url: 'http://localhost:3000/success',
//       cancel_url: 'http://localhost:3000/cancel'
//     }
//   };

//   paypal.payment.create(payment, (error, payment) => {
//     if (error) {
//       res.status(400).json({ success: false, message: error.message });
//     } else {
//       res.json({ success: true, payment });
//     }
//   });
// };

// module.exports = { processPayment, createPayPalPayment };
// src/controllers/paymentController.js
///////////////////////////////////////////////////////////////////////////////////////////////////////
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const paypal = require('@paypal/checkout-server-sdk');
// const { validationResult } = require('express-validator');
// const Order = require('../Models/OrderModel');

// // PayPal Client Configuration
// const environment = new paypal.core.SandboxEnvironment(
//   process.env.PAYPAL_CLIENT_ID,
//   process.env.PAYPAL_CLIENT_SECRET
// );
// const paypalClient = new paypal.core.PayPalHttpClient(environment);

// // Utility function to calculate order amount
// const calculateOrderAmount = async (items) => {
//   let total = 0;
//   for (let item of items) {
//     total += item.price * item.quantity;
//   }
//   return Math.round(total * 100); // Convert to cents for Stripe
// };

// // Process Stripe Payment
// exports.processStripePayment = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { token, order } = req.body;

//     // Calculate total amount
//     const amount = await calculateOrderAmount(order.items);

//     // Create payment with Stripe
//     const payment = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       payment_method: token.id,
//       confirm: true,
//       description: `Order for user ${req.user._id}`,
//     });

//     // Create order in database
//     const newOrder = new Order({
//       user: req.user._id,
//       items: order.items,
//       total: amount / 100, // Convert back from cents
//       paymentMethod: 'credit_card',
//       status: 'processing',
//       shippingAddress: order.shippingAddress,
//       paymentDetails: {
//         paymentId: payment.id,
//         status: payment.status
//       }
//     });

//     await newOrder.save();

//     res.json({
//       success: true,
//       order: newOrder,
//       paymentIntent: payment.client_secret
//     });

//   } catch (error) {
//     console.error('Payment processing error:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Payment processing failed'
//     });
//   }
// };

// // Process PayPal Payment
// exports.processPayPalPayment = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { order } = req.body;
//     const amount = await calculateOrderAmount(order.items);

//     // Create PayPal order
//     const request = new paypal.orders.OrdersCreateRequest();
//     request.prefer("return=representation");
//     request.requestBody({
//       intent: 'CAPTURE',
//       purchase_units: [{
//         amount: {
//           currency_code: 'USD',
//           value: (amount / 100).toFixed(2) // Convert cents to dollars
//         }
//       }]
//     });

//     const paypalOrder = await paypalClient.execute(request);

//     // Create order in database with pending status
//     const newOrder = new Order({
//       user: req.user._id,
//       items: order.items,
//       total: amount / 100,
//       paymentMethod: 'paypal',
//       status: 'pending',
//       shippingAddress: order.shippingAddress,
//       paymentDetails: {
//         orderId: paypalOrder.result.id,
//         status: paypalOrder.result.status
//       }
//     });

//     await newOrder.save();

//     res.json({
//       success: true,
//       orderID: paypalOrder.result.id
//     });

//   } catch (error) {
//     console.error('PayPal order creation error:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to create PayPal order'
//     });
//   }
// };

// // Capture PayPal Payment
// exports.capturePayPalPayment = async (req, res) => {
//   try {
//     const { orderID } = req.body;
    
//     const request = new paypal.orders.OrdersCaptureRequest(orderID);
//     const capture = await paypalClient.execute(request);

//     // Update order status in database
//     await Order.findOneAndUpdate(
//       { 'paymentDetails.orderId': orderID },
//       {
//         status: 'processing',
//         'paymentDetails.status': capture.result.status
//       }
//     );

//     res.json({
//       success: true,
//       captureID: capture.result.id
//     });

//   } catch (error) {
//     console.error('PayPal capture error:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Payment capture failed'
//     });
//   }
// };

// // Get Order Status
// exports.getOrderStatus = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.orderId);
//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         error: 'Order not found'
//       });
//     }

//     res.json({
//       success: true,
//       order
//     });

//   } catch (error) {
//     console.error('Error fetching order:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to fetch order status'
//     });
//   }
// };
//////////////////////////////////////////////////////////////////////////////////////////////
// const paypal = require('@paypal/checkout-server-sdk');
// const Order = require('../Models/OrderModel'); // تأكد من مسار النموذج صحيح

// // إعداد PayPal
// const environment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
// const paypalClient = new paypal.core.PayPalHttpClient(environment);

// // وظيفة حساب المبلغ الإجمالي
// const calculateTotalAmount = (items) => {
//   return items.reduce((total, item) => total + item.price * item.quantity, 0);
// };

// // معالجة الدفع عبر PayPal
// exports.processPayPalPayment = async (req, res) => {
//   try {
//     const { items, shippingAddress } = req.body;

//     // حساب المبلغ الإجمالي
//     const totalAmount = calculateTotalAmount(items);

//     // إنشاء طلب PayPal
//     const request = new paypal.orders.OrdersCreateRequest();
//     request.prefer("return=representation");
//     request.requestBody({
//       intent: 'CAPTURE',
//       purchase_units: [{
//         amount: {
//           currency_code: 'USD',
//           value: totalAmount.toFixed(2), // تحويل إلى دولارات
//         }
//       }]
//     });

//     const paypalOrder = await paypalClient.execute(request);

//     // إنشاء الطلب في قاعدة البيانات
//     const order = new Order({
//       user: req.user._id,
//       items,
//       total: totalAmount,
//       paymentMethod: 'paypal',
//       shippingAddress,
//     });

//     await order.save();

//     res.json({ success: true, orderID: paypalOrder.result.id });
//   } catch (error) {
//     console.error('PayPal payment error:', error);
//     res.status(500).json({ success: false, error: 'PayPal payment failed' });
//   }
// };

// // تأكيد الدفع عبر PayPal
// exports.capturePayPalPayment = async (req, res) => {
//   try {
//     const { orderID } = req.body;
//     const request = new paypal.orders.OrdersCaptureRequest(orderID);
//     const capture = await paypalClient.execute(request);

//     // تحديث حالة الطلب في قاعدة البيانات
//     await Order.findOneAndUpdate(
//       { 'paymentMethod': 'paypal', 'total': capture.result.purchase_units[0].amount.value },
//       { status: 'paid' }
//     );

//     res.json({ success: true, captureID: capture.result.id });
//   } catch (error) {
//     console.error('PayPal capture error:', error);
//     res.status(500).json({ success: false, error: 'Payment capture failed' });
//   }
// };
///////////////////////////////////////////////////////////////////////////////////
// const paypal = require('@paypal/checkout-server-sdk');
// const Order = require('../Models/OrderModel');

// // تحقق من القيم المحملة من ملف .env
// console.log('PayPal Client ID:', process.env.PAYPAL_CLIENT_ID);
// console.log('PayPal Secret:', process.env.PAYPAL_CLIENT_SECRET);
// require('dotenv').config();
// // PayPal configuration
// const environment = process.env.NODE_ENV === 'production'
//   ? new paypal.core.LiveEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
//   : new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);

// const paypalClient = new paypal.core.PayPalHttpClient(environment);

// // Create PayPal order
// // exports.createPayPalOrder = async (req, res) => {
// //   try {
// //     const { items, shippingAddress, total } = req.body;

// //     const request = new paypal.orders.OrdersCreateRequest();
// //     request.prefer("return=representation");
// //     request.requestBody({
// //       intent: 'CAPTURE',
// //       purchase_units: [{
// //         amount: {
// //           currency_code: 'USD',
// //           value: total.toFixed(2),
// //           breakdown: {
// //             item_total: {
// //               currency_code: 'USD',
// //               value: total.toFixed(2)
// //             }
// //           }
// //         },
// //         items: items.map(item => ({
// //           name: item.book.title || 'Book',
// //           unit_amount: {
// //             currency_code: 'USD',
// //             value: item.price.toFixed(2)
// //           },
// //           quantity: item.quantity
// //         }))
// //       }],
// //       application_context: {
// //         shipping_preference: 'SET_PROVIDED_ADDRESS',
// //         user_action: 'PAY_NOW'
// //       }
// //     });

// //     const order = await paypalClient.execute(request);

// //     // Create preliminary order in database
// //     const newOrder = new Order({
// //       items: items.map(item => ({
// //         book: item.book,
// //         quantity: item.quantity,
// //         price: item.price
// //       })),
// //       shippingAddress,
// //       total,
// //       paymentMethod: 'paypal',
// //       paymentId: order.result.id,
// //       status: 'pending'
// //     });

// //     await newOrder.save();

// //     res.json({
// //       orderID: order.result.id,
// //       status: 'CREATED'
// //     });

// //   } catch (error) {
// //     console.error('PayPal order creation error:', error);
// //     res.status(500).json({
// //       success: false,
// //       error: 'Failed to create PayPal order'
// //     });
// //   }
// // };
// const axios = require('axios');

// exports.createPayPalOrder = async (req, res) => {
//   try {
//     const { items, shippingAddress, total } = req.body;

//     const request = new paypal.orders.OrdersCreateRequest();
//     request.prefer("return=representation");
//     request.requestBody({
//       intent: 'CAPTURE',
//       purchase_units: [{
//         amount: {
//           currency_code: 'USD',
//           value: total.toFixed(2),
//           breakdown: {
//             item_total: {
//               currency_code: 'USD',
//               value: total.toFixed(2)
//             }
//           }
//         },
//         items: items.map(item => ({
//           name: item.book.title || 'Book',
//           unit_amount: {
//             currency_code: 'USD',
//             value: item.price.toFixed(2)
//           },
//           quantity: item.quantity
//         }))
//       }],
//       application_context: {
//         shipping_preference: 'SET_PROVIDED_ADDRESS',
//         user_action: 'PAY_NOW'
//       }
//     });

//     const order = await paypalClient.execute(request);

//     // قم بإنشاء طلب مبدئي في قاعدة البيانات
//     const newOrder = new Order({
//       items: items.map(item => ({
//         book: item.book,
//         quantity: item.quantity,
//         price: item.price
//       })),
//       shippingAddress,
//       total,
//       paymentMethod: 'paypal',
//       paymentId: order.result.id,
//       status: 'pending'
//     });

//     await newOrder.save();

//     res.json({
//       orderID: order.result.id,
//       status: 'CREATED'
//     });
//   } catch (error) {
//     console.error('PayPal order creation error:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Failed to create PayPal order'
//     });
//   }
// };

// exports.capturePayPalPayment = async (req, res) => {
//   try {
//     const { orderID } = req.body;

//     const request = new paypal.orders.OrdersCaptureRequest(orderID);
//     const capture = await paypalClient.execute(request);

//     if (capture.result.status === 'COMPLETED') {
//       // قم بتحديث حالة الطلب في قاعدة البيانات
//       const order = await Order.findOneAndUpdate(
//         { paymentId: orderID },
//         { 
//           status: 'paid',
//           paymentDetails: capture.result
//         },
//         { new: true }
//       );

//       res.json({
//         success: true,
//         order: {
//           id: order._id,
//           total: order.total,
//           status: order.status
//         }
//       });
//     } else {
//       throw new Error('Payment not completed');
//     }
//   } catch (error) {
//     console.error('PayPal capture error:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Payment capture failed'
//     });
//   }
// };
// // Capture PayPal payment
// // exports.capturePayPalPayment = async (req, res) => {
// //   try {
// //     const { orderID } = req.body;
    
// //     const request = new paypal.orders.OrdersCaptureRequest(orderID);
// //     const capture = await paypalClient.execute(request);

// //     if (capture.result.status === 'COMPLETED') {
// //       // Update order status in database
// //       const order = await Order.findOneAndUpdate(
// //         { paymentId: orderID },
// //         { 
// //           status: 'paid',
// //           paymentDetails: capture.result
// //         },
// //         { new: true }
// //       );

// //       res.json({
// //         success: true,
// //         order: {
// //           id: order._id,
// //           total: order.total,
// //           status: order.status
// //         }
// //       });
// //     } else {
// //       throw new Error('Payment not completed');
// //     }
// //   } catch (error) {
// //     console.error('PayPal capture error:', error);
// //     res.status(500).json({
// //       success: false,
// //       error: 'Payment capture failed'
// //     });
// //   }
// // };

// // Process credit card payment
// // exports.processCreditCardPayment = async (req, res) => {
// //     try {
// //       const { items, shippingAddress, paymentDetails, total } = req.body;
  
// //       // هنا نتحقق من صحة تفاصيل الدفع
// //       if (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
// //         return res.status(400).json({
// //           success: false,
// //           error: 'Invalid payment details'
// //         });
// //       }
  
// //       // محاكاة نجاح الدفع (يمكنك تعديل هذا لاحقًا لتكامل مع مزود خدمة الدفع)
// //       const isPaymentSuccessful = true; // أو يمكنك استخدام منطق أكثر تعقيدًا
  
// //       if (!isPaymentSuccessful) {
// //         throw new Error('Payment processor error');
// //       }
  
  
// //       const order = new Order({
// //         user: req.body.user, // تأكد من تمرير معرف المستخدم بشكل صحيح
// //         items: items.map(item => ({
// //           content: item.content, // تأكد من استخدام الحقل الصحيح
// //           quantity: item.quantity,
// //           price: item.price
// //         })),
// //         shippingAddress,
// //         total,
// //         paymentMethod: 'credit',
// //         status: 'pending', // استخدام حالة صحيحة
// //         paymentDetails: {
// //           last4: paymentDetails.cardNumber.slice(-4)
// //         }
// //       });
      
// //       await order.save();
  
// //       res.json({
// //         success: true,
// //         order: {
// //           id: order._id,
// //           total: order.total,
// //           status: order.status
// //         }
// //       });
// //     } catch (error) {
// //       console.error('Credit card payment error:', error);
// //       res.status(500).json({
// //         success: false,
// //         error: error.message || 'Payment failed'
// //       });
// //     }
// //   };
  

// exports.processCreditCardPayment = async (req, res) => {
//   try {
//     const { items, shippingAddress, paymentDetails, total } = req.body;

//     // قم بالتحقق من صحة تفاصيل الدفع
//     if (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
//       return res.status(400).json({
//         success: false,
//         error: 'Invalid payment details'
//       });
//     }

//     // هنا قم بإنشاء طلب الدفع باستخدام مزود خدمة الدفع الذي تختاره (مثل Stripe أو Braintree)
//     const paymentResponse = await stripeClient.charges.create({
//       amount: Math.round(total * 100), // تحويل المبلغ إلى سنتات
//       currency: 'usd',
//       source: paymentDetails.cardNumber,
//       exp_month: paymentDetails.expiryDate.split('/')[0],
//       exp_year: paymentDetails.expiryDate.split('/')[1],
//       cvc: paymentDetails.cvv
//     });

//     if (paymentResponse.status !== 'succeeded') {
//       throw new Error('Payment processor error');
//     }

//     // إذا تم الدفع بنجاح، قم بإنشاء الطلب في قاعدة البيانات
//     const order = new Order({
//       user: req.user._id, // تأكد من إرفاق معرف المستخدم بشكل صحيح
//       items: items.map(item => ({
//         content: item.content,
//         quantity: item.quantity,
//         price: item.price
//       })),
//       shippingAddress,
//       total,
//       paymentMethod: 'credit',
//       status: 'paid',
//       paymentDetails: {
//         last4: paymentDetails.cardNumber.slice(-4)
//       }
//     });

//     await order.save();

//     res.json({
//       success: true,
//       order: {
//         id: order._id,
//         total: order.total,
//         status: order.status
//       }
//     });
//   } catch (error) {
//     console.error('Credit card payment error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message || 'Payment failed'
//     });
//   }
// };




// orderController.js
const Order = require('../Models/OrderModel');
const Cart = require('../Models/CartModel');
const jwt = require('jsonwebtoken');

exports.createOrder = async (req, res) => {
  try {
      console.log("Received order request:", req.body);
      const token = req.cookies.token; // احصل على التوكن
      console.log("Token from cookie:", token); // تحقق من الكوكي

      if (!token) {
          return res.status(401).json({ message: 'No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;

      const { shippingAddress, paymentMethod, items, total } = req.body;
      const order = new Order({
          user: userId,
          items,
          total,
          paymentMethod,
          shippingAddress,
          status: 'pending'
      });

      await order.save();
      await Cart.findOneAndDelete({ user: userId });

      res.status(201).json(order);
  } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

// PayPal payment controller
exports.capturePayPalPayment = async (req, res) => {
  try {
    const { orderID } = req.body;
    const order = await Order.findById(orderID);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = 'processing';
    await order.save();

    res.json({ success: true, order });
  } catch (error) {
    console.error('PayPal capture error:', error);
    res.status(500).json({ message: 'Error processing PayPal payment' });
  }
};

// دالة لاسترداد تفاصيل الطلب باستخدام orderId
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate('items.content'); // تأكد من أن لديك العلاقة الصحيحة هنا
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order details', error: error.message });
  }
};