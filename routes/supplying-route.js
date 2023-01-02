const express = require("express");
const { getAllSupplying, createSupplying, updateSupplying, getSupplyingInfo, deleteSupplying } = require("../controllers/supplying-controller");



const router = express.Router();

router.get("/", getAllSupplying);
router.post("/", createSupplying);
router.put("/", updateSupplying);
router.get("/:id", getSupplyingInfo);
router.delete("/:id", deleteSupplying);

module.exports = router;