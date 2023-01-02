const Order = require("../src/models/order-model");

const getAllOrder = async (req, res) => {
    try {
        const order = await Order.find();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOrderInfo = async (req, res) => {
    try {
        const order = await Order.findById({ id: req.params.id });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateOrder = async (req, res) => {
    try {
        const updateData = req.body;
        const orderInfo = await Order.findById(req.body.id);
        if (!orderInfo) {
            const customError = new Error("Invalid Order.");
            customError.statusCode = 400;
            throw customError;
        }
        const orderData = new Order(orderInfo);
        let isChanged = false;

        if (updateData.customerId && orderInfo.customerId !== updateData.customerId) {
            isChanged = true;
            orderData.customerId = updateData.customerId;
        }
        if (updateData.orderedAt && orderInfo.orderedAt !== updateData.orderedAt) {
            isChanged = true;
            orderData.orderedAt = updateData.orderedAt;
        }

        if (isChanged) {
            const updateOrder = await orderData.save();
            return res.json({
                success: true,
                statusCode: 200,
                order: updateOrder
            });
        }

    } catch (error) {
        console.log("Error :", err);
    }
};

const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete({ id: req.params.id });
        res.status(200).json({ message: "Order is deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllOrder, getOrderInfo, createOrder, updateOrder, deleteOrder };