const express = require("express");
const { getAllSupplier, createSupplier, updateSupplier, getSupplierInfo, deleteSupplier } = require("../controllers/supplier-controller");



const router = express.Router();

router.get("/", getAllSupplier);
router.post("/", createSupplier);
router.put("/", updateSupplier);
router.get("/:id", getSupplierInfo);
router.delete("/:id", deleteSupplier);

module.exports = router;