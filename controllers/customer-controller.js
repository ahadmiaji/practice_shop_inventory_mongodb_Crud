const { default: mongoose } = require("mongoose");
const Customer = require("../src/models/customer-model");

const getAllCustomer = async (req, res) => {
    try {
        const customer = await Customer.find();
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getCustomerInfo = async (req, res) => {
    try {
        const customer = await Customer.findOne({ id: req.pramas.id });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createCustomer = async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body);
        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCustomer = async (req, res) => {
    try {
        const updateData = req.body;
        const customerInfo = await Customer.findById(req.body.id);

        if (!customerInfo) {
            const customError = new Error("Invalid Customer.");
            customError.statusCode = 400;
            throw customError;
        }

        const customerData = new Customer(customerInfo);
        let isChanged = false;

        if (updateData.quantity && customerInfo.quantity !== updateData.quantity) {
            isChanged = true;
            customerData.quantity = updateData.quantity;
        }
        if (updateData.updatedAt && customerInfo.updatedAt !== updateData.updatedAt) {
            isChanged = true;
            customerData.updatedAt = updateData.updatedAt;
        }


        if (isChanged) {
            const updateCustomer = await customerData.save();

            return res.json({
                success: true,
                statusCode: 200,
                customer: updateCustomer
            });
        }
    } catch (error) {
        console.log("Error: ", err);
    }
};

const deleteCustomer = async (req, res) => {
    try {
        await Customer.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "Customer has been deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllCustomer, getCustomerInfo, createCustomer, updateCustomer, deleteCustomer };