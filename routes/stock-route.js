const express = require("express");
const { getAllStock, createStock, updateStock, getStockInfo, deleteStock } = require("../controllers/stock-controller");



const router = express.Router();

router.get("/", getAllStock);
router.post("/", createStock);
router.put("/", updateStock);
router.get("/:id", getStockInfo);
router.delete("/:id", deleteStock);

module.exports = router;




