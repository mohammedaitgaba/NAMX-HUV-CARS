const mongoose = require("mongoose");
const Car = mongoose.model(
    "cars",
    new mongoose.Schema({
        Name: {
            type: String,
            required: true
        },
        Engine: {
            type: Number,
            required: true
        },
        Colors: [{
                Doors: {
                    colorNAME: {
                        type: String,
                    },
                    colorCode: {
                        type: String,
                    }
                }
            },
            {
                wheels: {
                    colorNAME: {
                        type: String,
                    },
                    colorCode: {
                        type: String,
                    }

                }
            },
            {
                Roof: {
                    colorNAME: {
                        type: String,
                    },
                    colorCode: {
                        type: String,
                    }
                }
            }
        ],
        Price: {
            type: Number,
            required: true
        }


    })
)
module.exports = Car
