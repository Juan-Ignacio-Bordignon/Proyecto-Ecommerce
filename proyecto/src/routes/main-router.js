const express = require("express");
const router = express.Router();

//Controler
const mainController = require("../controller/main-controller");

//routers
const APIMainRouter = require("./api/api-main-router");
const productRouter = require("../routes/product-router");
const userRouter = require("../routes/user-router");

router.get("/", mainController.index);

// APIs
router.use("/api", APIMainRouter);

router.use("/product", productRouter);

router.use("/user", userRouter);

module.exports = router;
