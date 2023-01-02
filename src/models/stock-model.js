const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        default: false,
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    }

}, { timestamps: true });

module.exports = mongoose.model("stock", stockSchema);