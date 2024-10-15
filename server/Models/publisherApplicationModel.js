// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const publisherApplicationSchema = new Schema(
//   {
//     user: { type: Schema.Types.ObjectId, ref: "User", required: true },
//     bio: { type: String, required: true },
//     yearsOfExperience: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending"
//     },
//     adminNotes: { type: String },
//   },
//   { timestamps: true }
// );

// const PublisherApplication = mongoose.model("PublisherApplication", publisherApplicationSchema);
// module.exports = PublisherApplication;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const publisherApplicationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bio: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },
    adminNotes: { type: String },
  },
  { timestamps: true }
);

// التأكد من عدم تعريف النموذج مسبقًا
const PublisherApplication = mongoose.models.PublisherApplication || mongoose.model("PublisherApplication", publisherApplicationSchema);

module.exports = PublisherApplication;
