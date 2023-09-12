const mongoose = require("mongoose");

const userGuideSchema = new mongoose.Schema(
  {
    guide_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    completed: { type: Boolean, default: false },
  },
  {
    id: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userGuideSchema.virtual("guide", {
  justOne: true,
  ref: "Guide",
  localField: "guide_id",
  foreignField: "_id",
});

const UserGuide = mongoose.model("UserGuide", userGuideSchema);

module.exports = UserGuide;
