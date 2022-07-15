const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DrinksSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minLength: 2,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        min: 0,
        required: true
    },
    url: {
        type: String,
        default: "https://i.pinimg.com/originals/8d/2b/6c/8d2b6ce2edb9d2ec42679022bdec8611.png",
        minLength: 14
    },
    milk: {
        type: String,
        enum: ["almendras", "avena", "coco", "regular"],
    },
    addons: {
        type: [String],
    }
}, { timestamps: true })

//Export to use in other files

module.exports = mongoose.model("Drink", DrinksSchema)