const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

const validationRegister = require("../middlewares/registerValidatorMidellware");
const validationLogin = require("../middlewares/loginValidationMiddleware.js")

//cart
router.get("/cart", userController.cart);

//register
router.get("/register", userController.register);
router.post('/register', validationRegister, userController.saveUser); 

//login
router.get("/login", userController.login);
router.post("/login",validationLogin,userController.proccesLogin)

module.exports = router;