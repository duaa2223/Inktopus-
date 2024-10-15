// const mongoose = require ('mongoose');
// const UserSchema = new mongoose.Schema({
//     username:{type:String, required: true,unique:true},
//     password:{type:String,required:true}
// });

// module.exports = mongoose.model('User', UserSchema);
// Models/User.js
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     profilePicture: String, // صورة الملف الشخصي
//     role: {
//       type: String,
//       enum: ["reader", "publisher", "admin"],
//       default: "reader", // الدور الافتراضي هو قارئ
//     },
//     bio: String, // السيرة الذاتية
//     savedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }], // الكتب المحفوظة (بدل الوصفات)
//     publishedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }], // الكتب التي قام الناشر بنشرها
//     googleId: { type: String }, // في حال التسجيل باستخدام جوجل
//     facebookId: { type: String }, // في حال التسجيل باستخدام فيسبوك
//     isDeleted: { type: Boolean, default: false },
//     isActivated: { type: Boolean, default: true },
//     yearsOfExperience: { type: Number }, // للناشرين، سنوات الخبرة
//   },
//   { timestamps: true }
// );

// // تشفير كلمة المرور قبل الحفظ
// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// const User = mongoose.model("User", userSchema, "Users");
// module.exports = User;
//////////////////////////////////////////////////////////////////////////////////////////////
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     profilePicture: String,
//     role: {
//       type: String,
//       enum: ["reader", "publisher", "admin"],
//       default: "reader",
//     },
//     bio: String,
//     savedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
//     publishedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
//     googleId: { type: String },
//     facebookId: { type: String },
//     isDeleted: { type: Boolean, default: false },
//     isActivated: { type: Boolean, default: true },
//     yearsOfExperience: { type: Number },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema, "Users");
// module.exports = User;
//////////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: String,
    role: {
      type: String,
      enum: ["reader", "publisher", "admin"],
      default: "reader",
    },
    bio: String,
    savedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    publishedBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    googleId: { type: String },
    facebookId: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActivated: { type: Boolean, default: false }, // Default to false
    otp: String, 
    otpExpiry: Date,
    yearsOfExperience: { type: Number },
    publisherApplicationStatus: {
      type: String,
      enum: ["none", "pending", "approved", "rejected"],
      default: "none"
    },
  },
  { timestamps: true }
);

// const User = mongoose.model("User", userSchema, "Users");
const User = mongoose.models.User || mongoose.model("User", userSchema, "Users");
module.exports = User;
