const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    full_name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
      validate(value) {
        return validator.isEmail(value);
      },
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    // ref basically means that mongoose would store the ObjectId values
    // and when you call populate using those ObjectIds would fetch and fill the documents for you.
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
