// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true }
// });

// const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

// module.exports = AcademicYear;
// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
//   imageUrl: { type: String }
// });

// const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

// module.exports = AcademicYear;
// Models/AcademicYearModel.js
////////////////////////////////////////////////////////////
// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   imageUrl: { type: String },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true }
// });

// module.exports = mongoose.model('AcademicYear', academicYearSchema);
/////////////////////////////////////////////////////////////////////////
// const mongoose = require('mongoose');

// const academicYearSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   nameAr: { type: String, required: true }, // الاسم بالعربية
//   imageUrl: { type: String },
//   description: { type: String },
//   college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
//   order: { type: Number, required: true }, // ترتيب السنة الدراسية
//   isActive: { type: Boolean, default: true },
// }, { timestamps: true });

// // إنشاء فهرس مركب للكلية والترتيب
// academicYearSchema.index({ college: 1, order: 1 }, { unique: true });

// const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);

// module.exports = AcademicYear;
//////////////////////////////////////////////////////////////////////////////////////////////
// models/AcademicYear.js
////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');

const academicYearSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nameAr: { type: String, required: true },
  imageUrl: { type: String },
  description: { type: String },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
  order: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// إنشاء الفهارس المركبة بحيث تكون فريدة فقط داخل نفس الكلية
academicYearSchema.index(
  { college: 1, name: 1 },
  { unique: true }
);

academicYearSchema.index(
  { college: 1, nameAr: 1 },
  { unique: true }
);

academicYearSchema.index(
  { college: 1, order: 1 },
  { unique: true }
);

// التحقق قبل الحفظ
academicYearSchema.pre('save', async function(next) {
  try {
    // التحقق من عدم وجود سنة دراسية بنفس الترتيب في نفس الكلية
    const existingWithOrder = await this.constructor.findOne({
      college: this.college,
      order: this.order,
      _id: { $ne: this._id }
    });

    if (existingWithOrder) {
      throw new Error(`يوجد بالفعل سنة دراسية بالترتيب ${this.order} في هذه الكلية`);
    }

    // التحقق من عدم وجود سنة دراسية بنفس الاسم في نفس الكلية
    const existingWithName = await this.constructor.findOne({
      college: this.college,
      $or: [
        { name: this.name },
        { nameAr: this.nameAr }
      ],
      _id: { $ne: this._id }
    });

    if (existingWithName) {
      throw new Error('يوجد بالفعل سنة دراسية بنفس الاسم في هذه الكلية');
    }

    next();
  } catch (error) {
    next(error);
  }
});

const AcademicYear = mongoose.model('AcademicYear', academicYearSchema);
module.exports = AcademicYear;
