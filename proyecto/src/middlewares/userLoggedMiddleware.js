const user = require("../services/usersService");

function userLoggedMiddleware(req, res, next) {
    let isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userInCookie = user.findUserByEmail(emailInCookie);

    if(userInCookie){
        req.session.userLogged = userInCookie;
    }

    if(req.session.userLogged){
        isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    res.locals.isLogged = isLogged;

    next();
}
module.exports = userLoggedMiddleware;
