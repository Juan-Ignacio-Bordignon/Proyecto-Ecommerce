const express = require("express");
const router = express.Router();
const controller = require("../controller/product-controller");
const uploadFile = require("../middlewares/saveFileMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const productCreateMiddleware = require("../middlewares/productCreateMiddleware");
const productUpdateMiddleware = require("../middlewares/productUpdateMiddleware");

//Create and save product
router.get("/create", adminMiddleware, controller.create);
router.post(
    "/create",
    uploadFile.single("img"),
    productCreateMiddleware,
    controller.save
);

router.get("/detail/:id", controller.detail);

//Edit and update
router.get("/edit/:id", adminMiddleware, controller.edit);
router.patch(
    "/edit/:id",
    uploadFile.single("img"),
    productUpdateMiddleware,
    controller.update
);

//delete
router.delete("/:id", controller.destroy);

//search
router.get("/results", controller.search);

module.exports = router;
