const mongoose = require("mongoose");
const { UserRole } = require("../../shared/role");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: UserRole,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    id: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("guides", {
  ref: "UserGuide",
  localField: "_id",
  foreignField: "user_id",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
