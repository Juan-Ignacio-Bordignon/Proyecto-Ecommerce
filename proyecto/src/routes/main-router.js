const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");
const productRouter = require("../routes/product-router");
const userRouter =  require("../routes/user-router");
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

router.get("/", mainController.index);

router.use("/product", productRouter);

router.use("/user", userRouter);

module.exports = router;
