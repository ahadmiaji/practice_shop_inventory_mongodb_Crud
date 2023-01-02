const Supplier = require("../src/models/supplier-model");

const getAllSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.find();
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getSupplierInfo = async (req, res) => {
    try {
        const supplier = await Supplier.findOne({ id: req.pramas.id });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createSupplier = async (req, res) => {
    try {
        const newSupplier = await Supplier.create(req.body);
        res.status(200).json(newSupplier);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateSupplier = async (req, res) => {
    try {
        const updateData = req.body;
        const supplierInfo = await Supplier.findById(req.body.id);

        if (!supplierInfo) {
            const customError = new Error("Invalid Supplier.");
            customError.statusCode = 400;
            throw customError;
        }

        const supplierData = new Supplier(supplierInfo);
        let isChanged = false;

        if (updateData.name && supplierInfo.name !== updateData.name) {
            isChanged = true;
            supplierData.name = updateData.name;
        }
        if (updateData.slug && supplierInfo.slug !== updateData.slug) {
            isChanged = true;
            supplierData.slug = updateData.slug;
        }



        if (isChanged) {
            const updateSupplier = await supplierData.save();

            return res.json({
                success: true,
                statusCode: 200,
                supplier: updateSupplier
            });
        }
    } catch (error) {
        console.log("Error: ", err);
    }
};



const deleteSupplier = async (req, res) => {
    try {
        await Supplier.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "Supplier is removed" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { getAllSupplier, getSupplierInfo, createSupplier, updateSupplier, deleteSupplier };