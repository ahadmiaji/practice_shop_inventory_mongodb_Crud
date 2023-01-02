const { default: mongoose } = require("mongoose");
const Stock = require("../src/models/stock-model");

const getAllStock = async (req, res) => {
    try {
        const stock = await Stock.find();
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getStockInfo = async (req, res) => {
    try {
        const stock = await Stock.findOne({ id: req.pramas.id });
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createStock = async (req, res) => {
    try {
        const newStock = await Stock.create(req.body);
        res.status(200).json(newStock);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateStock = async (req, res) => {
    try {
        const updateData = req.body;
        const stockInfo = await Stock.findById(req.body.id);

        if (!stockInfo) {
            const customError = new Error("Invalid Stock.");
            customError.statusCode = 400;
            throw customError;
        }

        const stockData = new Stock(stockInfo);
        let isChanged = false;

        if (updateData.quantity && stockInfo.quantity !== updateData.quantity) {
            isChanged = true;
            stockData.quantity = updateData.quantity;
        }
        if (updateData.updatedAt && stockInfo.updatedAt !== updateData.updatedAt) {
            isChanged = true;
            stockData.updatedAt = updateData.updatedAt;
        }




        if (isChanged) {
            const updateStock = await stockData.save();

            return res.json({
                success: true,
                statusCode: 200,
                stock: updateStock
            });
        }
    } catch (error) {
        console.log("Error: ", err);
    }
};



const deleteStock = async (req, res) => {
    try {
        await Stock.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "Stock is removed" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllStock, getStockInfo, createStock, updateStock, deleteStock };