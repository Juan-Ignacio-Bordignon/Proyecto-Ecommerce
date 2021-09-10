const express = require("express");
const router = express.Router();
const controller = require("../controller/product-controller");

//Multer
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,"../../public/images"));
    },
    filename: function(req, file, cb){
        cb(null, file.filename+"-"+Date.now());
    }
})
const uploadFile = multer({storage});
//
//Create and save product
router.get("/creat", controller.creat);
router.post("/creat", uploadFile.single("img"), controller.save);

router.get("/detail/:id", controller.detail);

//Edit and update
router.get("/edit/:id", controller.edit);
router.patch("/edit/:id", uploadFile.single("img"), controller.update)

module.exports = router;