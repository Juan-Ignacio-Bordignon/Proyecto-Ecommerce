const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

router.get("/cart", userController.cart);

router.get("/register", userController.register);
router.post('/register', userController.saveUser); 

router.get("/login", userController.login);

module.exports = router;