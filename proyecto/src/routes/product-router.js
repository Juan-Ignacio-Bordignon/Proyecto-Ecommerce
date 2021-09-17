const express = require("express");
const router = express.Router();
const controller = require("../controller/product-controller");
const uploadFile = require("../middlewares/saveFileMiddleware");

//Create and save product
router.get("/create", controller.creat);
router.post("/create", uploadFile.single("img"), controller.save);

router.get("/detail/:id", controller.detail);

//Edit and update
router.get("/edit/:id", controller.edit);
router.patch("/edit/:id", uploadFile.single("img"), controller.update);

//delete
router.delete("/:id",controller.destroy);

module.exports = router;