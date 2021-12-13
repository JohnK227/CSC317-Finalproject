

var express = require('express');
const app = require('../app');
var router = express.Router();



const { errorPrint } = require("../helpers/debug/debugprinters");
const { successPrint } = require("../helpers/debug/debugprinters");
const UserError = require("../helpers/error/UserError");
const { registerValidator, loginValidator } = require('../middleware/validation')

var bcrypt = require('bcrypt')


var db = require('../config/database');
const UserModel = require("../models/Users");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {

  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  UserModel.usernameExists(username)
    .then((userNameDoesExist) => {
      if (userNameDoesExist) {
        throw new UserError(
          "Registration failed: username exists",
          "/registration",
          200
        )} else {
        return UserModel.emailExists(email);
      }
    })
    .then((emailDoesExist) => {
      if (emailDoesExist) {
        throw new UserError("email exists",
          '/registration',
          200
        )}else {
        return UserModel.create(username, password, email);
      }
    })
    .then((createdUserId) => {
      if (createdUserId < 0) {
        throw new UserError(
          "Server error",
          "/registration",
          500
        )}else {

    successPrint("user.js --> user created");
    req.flash('success', 'user account has been made');
    res.redirect("/login");

      }
    })
    .catch((err) => {
      errorPrint("user couldnt be made", err);
      if (err instanceof UserError) {
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
    } 
    else {
      next(err);
    }
  })
})


router.post('/login', (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;


  UserModel.authenticate(username, password)

    .then((loggedUserId) => {
      if (loggedUserId > 0) {
        successPrint(`User ${username} is logged in`);
        req.flash('success', 'user logged in');
        req.session.username = username;
        req.session.userId = loggedUserId;
        res.locals.logged = true;
        res.redirect("/");

      } else {
        throw new UserError("invalid", "/login", 200);
      }
    })
    .catch((err) => {
      errorPrint("user login failed");
      if (err instanceof UserError) {
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect('/login')



      }
      else {
        next(err);
      }
    })
})

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      errorPrint("session couldnt be destroyed");
      next(err);
    } else {
      successPrint("session was destroyed good");
      res.clearCookie('csid');
      res.json({ status: "OK", message: "user is logged out" })
    }
  })
});



module.exports = router;
