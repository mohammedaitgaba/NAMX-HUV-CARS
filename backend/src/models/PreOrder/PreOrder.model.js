const mongoose = require("mongoose");
const PreOrders = mongoose.model(
  "PreOrders",
  new mongoose.Schema({
    id_car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cars",
    },
    Maker:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    Details:[
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
    ],
    Confirmed:{
      type:Boolean,
      default:false
    },
    Deleted:{
      type:Boolean,
      default:false
    },
    
  },{ timestamps: true })
);
module.exports = PreOrders;
