const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: false,
    },
    bornAt: {
        type: Date,
        default: Date.now(),
    }

}, { timestamps: true });

module.exports = mongoose.model("customer", customerSchema);