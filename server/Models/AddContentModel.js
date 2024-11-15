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
// const mongoose = require('mongoose');

// const contentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   titleAr: { type: String, required: true }, // العنوان بالعربية
//   author: { type: String, required: true },
//   author_info: { type: String }, // وصف قصير عن المؤلف
//   description: { type: String },
//   cover_image: { type: String },
//   additional_images: [{ type: String }], // صور إضافية
//   price: { type: Number, default: 0 },
//   file_url: { type: String },
//   content_type: { type: String, enum: ['book', 'article'], required: true },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
//   academic_year: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
//   // specialization: { type: String },
//   specialization: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialization', required: true },
//   publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // الناشر من المستخدمين
//   isDeleted: { type: Boolean, default: false },
//   isActive: { type: Boolean, default: true },
//   downloads: { type: Number, default: 0 }, // عدد مرات التحميل
//   views: { type: Number, default: 0 }, // عدد مرات العرض
//   promo_videos: [{ type: String }], // روابط الفيديوهات الترويجية
// }, { timestamps: true });

// // إنشاء فهرسات
// contentSchema.index({ college: 1, academic_year: 1, specialization: 1 });
// contentSchema.index({ content_type: 1 });
// contentSchema.index({ isActive: 1, isDeleted: 1 });

// const Content = mongoose.model('Content', contentSchema);

// module.exports = Content;
/////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');

// تعريف النموذج مع إضافة التحقق
const contentSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'العنوان مطلوب'],
    trim: true
  },
  titleAr: { 
    type: String, 
    required: [true, 'العنوان بالعربية مطلوب'],
    trim: true
  },
  author: { 
    type: String, 
    required: [true, 'اسم المؤلف مطلوب'],
    trim: true
  },
  author_info: { 
    type: String,
    trim: true
  },
  description: { 
    type: String,
    trim: true
  },
  cover_image: { 
    type: String,
    required: [true, 'صورة الغلاف مطلوبة']
  },
  additional_images: [{
    type: String,
    validate: {
      validator: function(v) {
        // التحقق من صحة روابط الصور
        return /^https?:\/\/.+/.test(v);
      },
      message: 'رابط الصورة غير صالح'
    }
  }],
  price: { 
    type: Number,
    default: 0,
    min: [0, 'السعر يجب أن يكون 0 أو أكثر']
  },
  file_url: { 
    type: String,
    required: [true, 'رابط الملف مطلوب'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'رابط الملف غير صالح'
    }
  },
  content_type: { 
    type: String, 
    enum: {
      values: ['book', 'article'],
      message: 'نوع المحتوى يجب أن يكون كتاب أو مقال'
    },
    required: true 
  },
  college: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'College', 
    required: [true, 'الكلية مطلوبة']
  },
  academic_year: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'AcademicYear', 
    required: [true, 'السنة الدراسية مطلوبة']
  },
  specialization: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Specialization', 
    required: [true, 'التخصص مطلوب']
  },
  publisher: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'الناشر مطلوب']
  },
  isDeleted: { 
    type: Boolean, 
    default: false 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  downloads: { 
    type: Number, 
    default: 0,
    min: 0
  },
  views: { 
    type: Number, 
    default: 0,
    min: 0
  },
  purchaseCount: {
    type: Number,
    default: 0,
    min: 0
  },
  promo_videos: [{
    type: String,
    validate: {
      validator: function(v) {
        // التحقق من صحة روابط الفيديو
        return /^https?:\/\/.+/.test(v);
      },
      message: 'رابط الفيديو غير صالح'
    }
  }]
}, { 
  timestamps: true
});

// الفهارس
contentSchema.index({ college: 1, academic_year: 1, specialization: 1 });
contentSchema.index({ content_type: 1 });
contentSchema.index({ isActive: 1, isDeleted: 1 });

// دالة للتحقق قبل الحفظ
contentSchema.pre('save', async function(next) {
  try {
    // التحقق من وجود الكلية
    const College = mongoose.model('College');
    const collegeExists = await College.findById(this.college);
    if (!collegeExists) throw new Error('الكلية غير موجودة');

    // التحقق من وجود السنة الدراسية
    const AcademicYear = mongoose.model('AcademicYear');
    const yearExists = await AcademicYear.findById(this.academic_year);
    if (!yearExists) throw new Error('السنة الدراسية غير موجودة');

    // التحقق من وجود التخصص
    const Specialization = mongoose.model('Specialization');
    const specExists = await Specialization.findById(this.specialization);
    if (!specExists) throw new Error('التخصص غير موجود');

    // التحقق من وجود الناشر
    const User = mongoose.model('User');
    const publisherExists = await User.findById(this.publisher);
    if (!publisherExists) throw new Error('الناشر غير موجود');

    next();
  } catch (error) {
    next(error);
  }
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;