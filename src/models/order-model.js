const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    orderedAt: {
        type: Date,
        default: Date.now(),
    }

}, { timestamps: true });

module.exports = mongoose.model("order", orderSchema);