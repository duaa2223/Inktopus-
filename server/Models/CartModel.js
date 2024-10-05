const mongoose = require('mongoose');

// مخطط العنصر في السلة
const cartItemSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, default: 1, required: true }
});

// مخطط السلة
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
  isActive: { type: Boolean, default: true },
}, { timestamps: true }); // تمكين إنشاء حقول createdAt و updatedAt تلقائيًا

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;