const mongoose = require("mongoose");
const CarColors = mongoose.model(
  "CarColors",
  new mongoose.Schema({
    Key: {
      type: String,
      required: true,
      unique: true,
    },
    Value: {
      type: String,
      required: true,
    },
  })
);
module.exports = CarColors;
