const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");
const productRouter = require("../routes/product-router");

router.get("/", mainController.index);

router.get("/detail/:id", mainController.detail);

router.get("/cart", mainController.cart);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

router.use("/product", productRouter);

module.exports = router;
