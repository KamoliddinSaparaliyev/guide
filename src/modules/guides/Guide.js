const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    id: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

guideSchema.virtual("guides", {
  ref: "UserGuide",
  localField: "_id",
  foreignField: "guide_id",
});

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;
