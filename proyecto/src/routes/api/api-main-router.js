const express = require("express");
const router = express.Router();
// const productController = require("../../controller/api/api-product-controller");

//          Users
//Controler
let userController = require("../../controller/api/api-users-controller");
//Routes
router.get("/users", userController.allUsers);
router.get("/users/:id", userController.userById);

//          Products

/*router.use("/product,    ");
router.use("/product/:id,   ");*/

module.exports = router;
