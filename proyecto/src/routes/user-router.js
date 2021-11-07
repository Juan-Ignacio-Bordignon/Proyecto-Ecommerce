const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

const validationRegister = require("../middlewares/registerValidatorMidellware");
const validationLogin = require("../middlewares/loginValidationMiddleware.js");
const guestMiddleware = require("../middlewares/guestMiddleware");

//cart
router.get("/cart", userController.cart);
router.get("/cart/:id", userController.addCart);

//register
router.get("/register", guestMiddleware, userController.register);
router.post("/register", validationRegister, userController.saveUser);

//login
router.get("/login", guestMiddleware, userController.login);
router.post("/login", validationLogin, userController.proccesLogin);

module.exports = router;
