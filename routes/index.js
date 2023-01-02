const { Router } = require("express");

const productRouter = require("./product-route");
const customerRouter = require("./customer-route");
const orderRouter = require("./order-route");
const productorderRouter = require("./product_order-route");
const stockRouter = require("./stock-route");
const supplierRouter = require("./supplier-route");
const supplyingRouter = require("./supplying-route");

const router = Router();
router.use("/api/v1/product", productRouter);
router.use("/api/v1/customer", customerRouter);
router.use("/api/v1/order", orderRouter);
router.use("/api/v1/productorder", productorderRouter);
router.use("/api/v1/stock", stockRouter);
router.use("/api/v1/supplier", supplierRouter);
router.use("/api/v1/supplying", supplyingRouter);



router.get("/", (req, res) => {
    res.send("welcome to the  CRUD multiple schema server");
});


router.all("*", (req, res) => {
    res.send("404 not Found");
});

module.exports = router;