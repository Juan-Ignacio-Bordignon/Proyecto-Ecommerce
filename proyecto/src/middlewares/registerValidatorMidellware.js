const { check } = require("express-validator");

let validateRegister = [
    check("user-name")
        .notEmpty().withMessage("debes completar el nombre de usuario").bail()
        .isLength({ min: 5, max: 30 }).withMessage("El nombre de usuario debe tener entre 5 y 30 caracteres"),
    check("email")
        .notEmpty().withMessage("debes completar el email").bail()
        .isEmail().withMessage("debes completar con un email válido"),
    check("password")
        .notEmpty().withMessage("debes completar la contraseña").bail()
        .isLength({min: 8}).isLength("la contraseña debe tener como minimo 8 caracteres"),
    check("confirm-password")
        .notEmpty().withMessage("debes completar la confitmación de contraseña").bail()    
];

module.exports = validateRegister;