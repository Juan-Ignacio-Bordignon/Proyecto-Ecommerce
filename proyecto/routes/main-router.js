const express = require("express");
const router = express.Router();
const controller = require("../controller/main-controller");

router.get("/", controller.index);

router.get("/detail", controller.detail);

router.get("/cart", controller.cart);

router.get("/register", controller.register);

router.get("/login", controller.login);

module.exports = router;
