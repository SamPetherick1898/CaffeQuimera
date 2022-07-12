const { Schema, model } = require("mongoose")

const branchSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    employees: {
        type: Number,
        default: 1
    },
    founded: {
        type: Date,
    },
    style: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    zoom: {
        type: Number,
        required: true
    },
}, { timestamps: true })


module.exports = model("Branch", branchSchema)
