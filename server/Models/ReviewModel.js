const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  content: { type: String, required: true }, // نص الرد
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // المرجع إلى المستخدم الذي قام بالرد
}, { timestamps: true });

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true }, // نص المراجعة
  rating: { type: Number, required: true, min: 1, max: 5 }, // تقييم من 1 إلى 5
  content_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true }, // المرجع إلى المحتوى
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // المرجع إلى المستخدم
  replies: [replySchema] // ردود على المراجعة
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
