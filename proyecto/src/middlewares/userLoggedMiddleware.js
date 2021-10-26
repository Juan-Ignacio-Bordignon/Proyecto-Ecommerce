const user = require("../services/usersService");

async function userLoggedMiddleware(req, res, next) {
    let isLogged = false;
    let isAdmin = false;
    let userInCookie;

    let emailInCookie = req.cookies.userEmail;

    if (emailInCookie) {
        userInCookie = await user.findUserByEmail(emailInCookie);
    }

    if (userInCookie) {
        req.session.userLogged = userInCookie[0];
    }

    if (req.session.userLogged) {
        isLogged = true;
        console.log(req.session.userLogged)
        res.locals.userLogged = req.session.userLogged;
    }

    if (req.session.userLogged && req.session.userLogged.admin == "1") {
        isAdmin = true;
    }

    res.locals.isLogged = isLogged;
    res.locals.isAdmin = isAdmin;
    next();
}
module.exports = userLoggedMiddleware;
