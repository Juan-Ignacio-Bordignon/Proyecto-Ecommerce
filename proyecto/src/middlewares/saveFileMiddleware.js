//Multer
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images"));
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.filename + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});
const uploadFile = multer({ storage });

module.exports = uploadFile;
