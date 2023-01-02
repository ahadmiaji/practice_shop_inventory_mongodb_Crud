const mongoose = require("mongoose");

const supplyingSchema = new mongoose.Schema({
    supplierId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderedAt: {
        type: Number,
        required: true
    },
    arrivesAt: {
        type: Date,
        default: Date.now(),
    },
    arrived: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("supplying", supplyingSchema);