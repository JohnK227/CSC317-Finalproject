const checkUsername = (username) => {
        let usernameChecker = /^\D\w{2,}$/;
        return usernameChecker.test(username);

}

const checkPassword = (password) => {
    let passwordChecker = /^\D\w\d{2,}$/;
        return passwordChecker.test(password);

}

const checkEmail = (email) => {
    let emailChecker = /^\D\w\W{2,}$/;
        return emailChecker.test(email);

}


const registerValidator = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    if(!checkUsername(username)){
        res.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkPassword(password)){
        res.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkemail(email)){
        res.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }
    
}

const loginValidator = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    if(!checkUsername(username)){
        res.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkPassword(password)){
        res.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkemail(email)){
        res.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }
    
}

module.exports = {registerValidator, loginValidator}