// orderController.js
const Order = require('../Models/OrderModel');
const Cart = require('../Models/CartModel');
const jwt = require('jsonwebtoken');
const Content = require('../Models/AddContentModel')
const updatePurchaseCount = async (contentId) => {
  try {
    const content = await Content.findById(contentId);
    if (!content) {
      throw new Error('Content not found');
    }
    content.purchaseCount += 1;
    await content.save();
    return content.purchaseCount;
  } catch (error) {
    console.error('Error updating purchase count:', error);
    throw error;
  }
};

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

      for (const item of items) {
        await updatePurchaseCount(item.content); // item.content يجب أن يكون هو الـ ID الخاص بالمحتوى
      }

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



// دالة لجلب جميع الطلبات الخاصة بمستخدم معين
exports.getOrdersByUser = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const sure = jwt.verify(token, process.env.JWT_SECRET);
    const userId = sure.userId;

    const orders = await Order.find({ user: userId }).populate('items.content');

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this user.' });
    }

    res.json(orders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ message: 'Error fetching user orders', error: error.message });
  }
};

///////////////////
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status' });
  }
};

exports.getTotalSales = async (req, res) => {
  try {
    // احصل على جميع الطلبات المكتملة فقط
    const orders = await Order.find({
      status: { $in: ['shipped', 'delivered', 'processing'] }
    });

    // احسب إجمالي المبيعات
    const totalSales = orders.reduce((total, order) => total + (order.total || 0), 0);

    // احسب عدد الطلبات
    const totalOrders = orders.length;

    // احسب متوسط قيمة الطلب
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

    // إحصائيات حسب حالة الطلب
    const ordersByStatus = await Order.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
          totalAmount: { $sum: "$total" }
        }
      }
    ]);

    res.json({
      totalSales: totalSales,
      totalOrders: totalOrders,
      averageOrderValue: averageOrderValue,
      ordersByStatus: ordersByStatus,
      currency: "$" 
    });

  } catch (error) {
    console.error('Error calculating total sales:', error);
    res.status(500).json({ 
      message: 'Error calculating total sales', 
      error: error.message 
    });
  }
};