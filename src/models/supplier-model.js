const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model("supplier", supplierSchema);