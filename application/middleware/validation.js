const checkUsername = (username) => {
        let usernameChecker = /^\D\w{2,}$/;
        return usernameChecker.test(username);

}

const checkPassword = (password) => {
    let passwordChecker = /^\D\d{2,}$/;
        return passwordChecker.test(password);

}

const checkemail = (email) => {
    let emailChecker = /^\D{2,}$/;
        return emailChecker.test(email);

}


const registerValidator = (req, res, next) => {
    
}

const loginValidator = (req, res, next) => {}
    


module.exports = {registerValidator, loginValidator}