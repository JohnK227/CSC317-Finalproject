var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'CSC 317 App', name:"John King" });
});

router.get('/login', (req,res,next) => {
  res.render('login');
});

router.get('/registration', (req,res,next) => {
  res.render('registration');
});

router.get('/viewpost', (req,res,next) => {
  res.render('viewpost');
});

router.get('/postimage', (req,res,next) => {
  res.render('postimage');
});

module.exports = router;