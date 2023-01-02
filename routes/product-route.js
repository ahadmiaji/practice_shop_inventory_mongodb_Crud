const express = require("express");
const { getAllProduct, createProduct, updateProduct, getProductInfo, deleteProduct } = require("../controllers/product-controller");


const router = express.Router();

router.get("/", getAllProduct);
router.post("/", createProduct);
router.put("/", updateProduct);
router.get("/:id", getProductInfo);
router.delete("/:id", deleteProduct);

module.exports = router;