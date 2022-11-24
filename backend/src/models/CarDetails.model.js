const mongoose = require("mongoose");
const Details = mongoose.model(
    "Details",
    new mongoose.Schema({
        Car : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cars",
        },
        Key : {
            type:String,
            required:true,
            unique:true
        },
        Value:{
            type:[String],
            required:true,
        },

        isDeleted: {
            type: Boolean,
            default: false
        },
    })
)
module.exports = Details