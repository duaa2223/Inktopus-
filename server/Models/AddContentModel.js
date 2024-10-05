// const mongoose = require('mongoose');

// const contentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   description: { type: String },
//   cover_image: { type: String },
//   price: { type: Number },
//   file_url: { type: String },
//   content_type: { type: String, enum: ['book', 'article'], required: true },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
//   academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
//   specialization: { type: String }, 
//   isDeleted: { type: Boolean, default: false },
// }, { timestamps: true });


// // إنشاء فهرسات
// contentSchema.index({ college: 1 });
// contentSchema.index({ academic_year: 1 });
// contentSchema.index({ specialization: 1 });
// contentSchema.index({ content_type: 1 });
// const Content = mongoose.model('Content', contentSchema);

// module.exports = Content;
////////////////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titleAr: { type: String, required: true }, // العنوان بالعربية
  author: { type: String, required: true },
  author_info: { type: String }, // وصف قصير عن المؤلف
  description: { type: String },
  cover_image: { type: String },
  additional_images: [{ type: String }], // صور إضافية
  price: { type: Number, default: 0 },
  file_url: { type: String },
  content_type: { type: String, enum: ['book', 'article'], required: true },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
  // specialization: { type: String },
  specialization: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialization', required: true },
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // الناشر من المستخدمين
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  downloads: { type: Number, default: 0 }, // عدد مرات التحميل
  views: { type: Number, default: 0 }, // عدد مرات العرض
  promo_videos: [{ type: String }], // روابط الفيديوهات الترويجية
}, { timestamps: true });

// إنشاء فهرسات
contentSchema.index({ college: 1, academic_year: 1, specialization: 1 });
contentSchema.index({ content_type: 1 });
contentSchema.index({ isActive: 1, isDeleted: 1 });

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;