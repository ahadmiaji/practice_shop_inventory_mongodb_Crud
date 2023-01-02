const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    orderId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        default: false,
    },
    price: {
        type: Number,
        required: true
    },
    vat: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("productorder", productOrderSchema);