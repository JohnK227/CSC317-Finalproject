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
    
    
}

const loginValidator = (req, res, next) => {
    
    
}

module.exports = {registerValidator, loginValidator}