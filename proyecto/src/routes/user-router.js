const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

const validationRegister = require("../middlewares/registerValidatorMidellware");
const validationLogin = require("../middlewares/loginValidationMiddleware.js");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//cart
router.get("/cart", userController.cart);
router.get("/cart/buy/:id", userController.cartBuy);
router.get("/cart/:id", authMiddleware, userController.addCart);

//register
router.get("/register", guestMiddleware, userController.register);
router.post("/register", validationRegister, userController.saveUser);

//login
router.get("/login", guestMiddleware, userController.login);
router.post("/login", validationLogin, userController.proccesLogin);

//logout
router.get("/logout", userController.logout);
module.exports = router;
