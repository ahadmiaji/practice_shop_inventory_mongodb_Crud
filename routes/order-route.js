const express = require("express");
const { getAllOrder, createOrder, updateOrder, getOrderInfo, deleteOrder } = require("../controllers/order-controller");


const router = express.Router();

router.get("/", getAllOrder);
router.post("/", createOrder);
router.put("/", updateOrder);
router.get("/:id", getOrderInfo);
router.delete("/:id", deleteOrder);

module.exports = router;