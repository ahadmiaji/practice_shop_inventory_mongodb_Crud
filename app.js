const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRoute = require("./routes/index");

app.use(indexRoute);

module.exports = app;