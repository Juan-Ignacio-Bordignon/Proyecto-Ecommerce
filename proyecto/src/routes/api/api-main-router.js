const express = require("express");
const router = express.Router();
const APIproductRouter = require("./api-product-router");

//Controler
let userController = require("../../controller/api/api-users-controller");
//Users
router.get("/users", userController.allUsers);
router.get("/users/:id", userController.userById);

router.use("/product");
router.use("/product/:id");

module.exports = router;
