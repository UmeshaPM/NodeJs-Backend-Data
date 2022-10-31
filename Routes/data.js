const express = require("express");

const storeData = require("../controllers/data");

const routerData = express.Router();

routerData.route("/Content")
.get(storeData.apicontroller);
module.exports = routerData;