const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");
const productRouter = require("../routes/product-router");
const userRouter =  require("../routes/user-router");

router.get("/", mainController.index);

router.use("/product", productRouter);

router.use("/user", userRouter);

module.exports = router;
