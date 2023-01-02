require("dotenv").config();

const server = {
    app: {
        port: process.env.PORT || 5003
    },

    db: {
        url: process.env.DB_URL ||
            "mongodb://localhost:27017/Shop_Inventory",
    },
};

module.exports = server;