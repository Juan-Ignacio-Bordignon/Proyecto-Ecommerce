const { check } = require("express-validator");

let validateLogin = [
    check("email")
        .notEmpty().withMessage("debes completar el email").bail(),
    check("password")
        .notEmpty().withMessage("debes completar la contraseña").bail(),
];

module.exports = validateLogin;