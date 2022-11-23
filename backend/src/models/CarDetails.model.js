const mongoose = require("mongoose");
const Details = mongoose.model(
    "Details",
    new mongoose.Schema({
        key : {
            type:String,
            required:true,
        },
        value:{
            type:String,
            required:true,
        }
    })
)
module.exports = Details