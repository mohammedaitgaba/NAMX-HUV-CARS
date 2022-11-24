const mongoose = require("mongoose");
const PreOrders = mongoose.model(
  "PreOrders",
  new mongoose.Schema({
    id_car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cars",
    },
    details:[
      {
        key:{
          type:String,
          required:true
        },
        value:{
          type:String,
          required:true
        }
      }
    ]
  })
);
module.exports = PreOrders;
