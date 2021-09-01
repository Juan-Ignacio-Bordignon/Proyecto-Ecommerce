const express = require("express");
const router = express.Router();
const controller = require("../controller/product-controller");

router.get("/creat", controller.creat);

router.get("/edit/:id", controller.edit);

module.exports = router;
