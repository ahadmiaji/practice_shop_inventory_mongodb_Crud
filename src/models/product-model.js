const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    referece: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    vat: {
        type: Number,
        required: true
    },
    stockAble: {
        type: Number,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model("product", productSchema);