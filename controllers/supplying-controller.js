const Supplying = require("../src/models/supplying-model");

const getAllSupplying = async (req, res) => {
    try {
        const supplying = await Supplying.find();
        res.status(200).json(supplying);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSupplyingInfo = async (req, res) => {
    try {
        const supplying = await Supplying.findOne({ id: req.pramas.id });
        res.status(200).json(supplying);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createSupplying = async (req, res) => {
    try {
        const newSupplying = await Supplying.create(req.body);
        res.status(200).json(newSupplying);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateSupplying = async (req, res) => {
    try {
        const updateData = req.body;
        const supplyingInfo = await Supplying.findById(req.body.id);

        if (!supplyingInfo) {
            const customError = new Error("Invalid Supplying.");
            customError.statusCode = 400;
            throw customError;
        }

        const supplyingData = new Supplying(supplyingInfo);
        let isChanged = false;

        if (updateData.supplierId && supplyingInfo.supplierId !== updateData.supplierId) {
            isChanged = true;
            supplyingData.supplierId = updateData.supplierId;
        }
        if (updateData.productId && supplyingInfo.productId !== updateData.productId) {
            isChanged = true;
            supplyingData.productId = updateData.productId;
        }
        if (updateData.quantity && supplyingInfo.quantity !== updateData.quantity) {
            isChanged = true;
            supplyingData.quantity = updateData.quantity;
        }
        if (updateData.orderedAt && supplyingInfo.orderedAt !== updateData.orderedAt) {
            isChanged = true;
            supplyingData.orderedAt = updateData.orderedAt;
        }
        if (updateData.arrivesAt && supplyingInfo.arrivesAt !== updateData.arrivesAt) {
            isChanged = true;
            supplyingData.arrivesAt = updateData.arrivesAt;
        }
        if (updateData.arrived && supplyingInfo.arrived !== updateData.arrived) {
            isChanged = true;
            supplyingData.arrived = updateData.arrived;
        }



        if (isChanged) {
            const updateSupplying = await supplyingData.save();

            return res.json({
                success: true,
                statusCode: 200,
                supplying: updateSupplying
            });
        }
    } catch (error) {
        console.log("Error: ", err);
    }
};

const deleteSupplying = async (req, res) => {
    try {
        await Supplying.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "Supplying has been deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllSupplying, getSupplyingInfo, createSupplying, updateSupplying, deleteSupplying };