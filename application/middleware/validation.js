const checkUsername = (username) => {
        let usernameChecker = /^\D\w{2,}$/;
        return usernameChecker.test(username);

}

const checkPassword = (password) => {
    let passwordChecker = /^\D{2,}$/;
        return passwordChecker.test(password);

}

const checkemail = (email) => {
    let emailChecker = /^\D{2,}$/;
        return emailChecker.test(email);

}


const registerValidator = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    if(!checkUsername(username)){
        req.flash('error', 'invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkPassword(password)){
        req.flash('error', 'invalid password')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkemail(email)){
        req.flash('error', 'invalid email')
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
        req.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkPassword(password)){
        req.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }

    if(!checkemail(email)){
        req.flash('invalid')
        req.session.save(err => {
            res.redirect("/registration")
        })
    }else{
        next();
    }
    
}

module.exports = {registerValidator, loginValidator}