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

router.get("/creat", uploadFile.single("img"), controller.creat);

router.get("/detail/:id", uploadFile.single("img"), controller.detail);

router.get("/edit/:id", controller.edit);

module.exports = router;
