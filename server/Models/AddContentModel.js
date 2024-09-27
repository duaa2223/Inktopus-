const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  cover_image: { type: String },
  price: { type: Number },
  file_url: { type: String },
  content_type: { type: String, enum: ['book', 'article'], required: true },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
  specialization: { type: String }, 
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });


// إنشاء فهرسات
contentSchema.index({ college: 1 });
contentSchema.index({ academic_year: 1 });
contentSchema.index({ specialization: 1 });
contentSchema.index({ content_type: 1 });
const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
