const express = require("express");
const { getAllCustomer, createCustomer, updateCustomer, getCustomerInfo, deleteCustomer } = require("../controllers/customer-controller");



const router = express.Router();

router.get("/", getAllCustomer);
router.post("/", createCustomer);
router.put("/", updateCustomer);
router.get("/:id", getCustomerInfo);
router.delete("/:id", deleteCustomer);

module.exports = router;


// const express = require("express");



// const router = express.Router();

// router.get("/",);
// router.post("/",);
// router.put("/",);
// router.get("/:id",);
// router.delete("/:id",);

// module.exports = router;