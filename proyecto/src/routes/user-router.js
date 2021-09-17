const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

const validationRegister = require("../middlewares/registerValidatorMidellware");

router.get("/cart", userController.cart);

router.get("/register", userController.register);
router.post('/register', validationRegister, userController.saveUser); 

router.get("/login", userController.login);

module.exports = router;