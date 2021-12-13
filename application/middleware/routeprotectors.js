const { errorPrint } = require("../helpers/debug/debugprinters");
const { successPrint } = require("../helpers/debug/debugprinters");
    
    const routeProtectors = {};

    routeProtectors.userLoggedIn = function(req, res, next) {
        if(req.session.username){
                successPrint('UserLoggedIn')
                next();
        }else{
                
            req.flash('error', 'You must be logged in to create a post!');
            res.redirect('/login');
        }
    }



    module.exports = routeProtectors;