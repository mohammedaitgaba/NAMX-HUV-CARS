const mongoose = require("mongoose");

const CodeSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Code", CodeSchema);
