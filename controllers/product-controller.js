const Product = require("../src/models/product-model");


const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getProductInfo = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const updateData = req.body;
        const productInfo = await Product.findById(req.body.id);

        if (!productInfo) {
            const customError = new Error("Invalid Product.");
            customError.statusCode = 400;
            throw customError;
        }

        const productData = new Product(productInfo);
        let isChanged = false;


        if (updateData.name && productInfo.name !== updateData.name) {
            isChanged = true;
            productData.name = updateData.name;
        }
        if (updateData.slug && productInfo.slug !== updateData.slug) {
            isChanged = true;
            productData.slug = updateData.slug;
        }
        if (updateData.referece && productInfo.referece !== updateData.referece) {
            isChanged = true;
            productData.referece = updateData.referece;
        }
        if (updateData.price && productInfo.price !== updateData.price) {
            isChanged = true;
            productData.price = updateData.price;
        }
        if (updateData.vat && productInfo.vat !== updateData.vat) {
            isChanged = true;
            productData.vat = updateData.vat;
        }
        if (updateData.stockAble && productInfo.stockAble !== updateData.stockAble) {
            isChanged = true;
            productData.stockAble = updateData.stockAble;
        }



        if (isChanged) {
            const updateProduct = await productData.save();

            return res.json({
                success: true,
                statusCode: 200,
                product: updateProduct
            });
        }
    } catch (error) {
        console.log("Error: ", err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ id: req.params.id });
        res.status(200).json({ message: "product is deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { getAllProduct, getProductInfo, createProduct, updateProduct, deleteProduct };