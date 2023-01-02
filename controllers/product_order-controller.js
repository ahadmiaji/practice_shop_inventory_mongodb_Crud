const ProductOrder = require("../src/models/product_order-model");

const getAllProductOrder = async (req, res) => {
    try {
        const productorder = await ProductOrder.find();
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getProductOrderInfo = async (req, res) => {
    try {
        const productorder = await ProductOrder.findOne({ id: req.pramas.id });
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createProductOrder = async (req, res) => {
    try {
        const newProductOrder = await ProductOrder.create(req.body);
        res.status(200).json(newProductOrder);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateProductOrder = async (req, res) => {
    try {
        const updateData = req.body;
        const productorderInfo = await ProductOrder.findById(req.body.id);

        if (!productorderInfo) {
            const customError = new Error("Invalid ProductOrder.");
            customError.statusCode = 400;
            throw customError;
        }

        const productorderData = new ProductOrder(productorderInfo);
        let isChanged = false;

        if (updateData.quantity && productorderInfo.quantity !== updateData.quantity) {
            isChanged = true;
            productorderData.quantity = updateData.quantity;
        }
        if (updateData.updatedAt && productorderInfo.updatedAt !== updateData.updatedAt) {
            isChanged = true;
            productorderData.updatedAt = updateData.updatedAt;
        }




        if (isChanged) {
            const updateProductOrder = await productorderData.save();

            return res.json({
                success: true,
                statusCode: 200,
                productorder: updateProductOrder
            });
        }
    } catch (error) {
        console.log("Error: ", err);
    }
};



const deleteProductOrder = async (req, res) => {
    try {
        await ProductOrder.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "ProductOrder is removed" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { getAllProductOrder, getProductOrderInfo, createProductOrder, updateProductOrder, deleteProductOrder };