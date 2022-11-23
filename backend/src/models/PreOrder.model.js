const mongoose = require("mongoose");
const PreOrders = mongoose.model(
    "PreOrders",
    new mongoose.Schema({
        id_car : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cars",
        },
        id_detail : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Details",
        },
        key:{
            type : String,
            required : true,
        },
        value: {
            type : String,
            required : true,
        }
    })
)
module.exports = PreOrders
