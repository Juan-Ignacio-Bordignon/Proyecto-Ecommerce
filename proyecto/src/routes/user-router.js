const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

router.get("/cart", controller.cart);

router.get("/register", controller.register);
//router.post('/', userController.saveUser); 

router.get("/login", controller.login);

module.exports = router;
