const express = require("express");
const router = express.Router();

//          Users
//Controler
let userController = require("../../controller/api/api-users-controller");
//Routes
router.get("/users", userController.allUsers);
router.get("/users/:id", userController.userById);
router.post("/users/login", userController.proccesLogin)

//          Products
//Controler
const productController = require("../../controller/api/api-product-controller");
//Routes
router.use("/product/:id", productController.productById);
router.use("/product", productController.allProducts);

module.exports = router;
