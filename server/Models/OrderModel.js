const mongoose = require('mongoose');

// مخطط العنصر في الطلب
const orderItemSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

// مخطط الطلب
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] },
  paymentMethod: { type: String, required: true },
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  }
}, { timestamps: true }); // تمكين إنشاء حقول createdAt و updatedAt تلقائيًا

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;