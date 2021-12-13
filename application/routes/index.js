var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userLoggedIn
const {getRecentPosts, getPostById} = require('../middleware/postsMiddleware')
const {getCommentsByPostId} = require('../middleware/postsMiddleware')
const { registerValidator, loginValidator } = require('../middleware/validation')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'CSC 317 App', name:"John King" });
});

router.get('/login', loginValidator, (req,res,next) => {
  res.render('login');
});

router.get('/home', getRecentPosts, (req,res,next) => {
  res.render('home');
});


router.get('/registration', registerValidator, (req,res,next) => {
  res.render('registration');
});

router.get('/viewpost', (req,res,next) => {
  res.render('viewpost');
});

router.use('/postImage', isLoggedIn);
router.get('/postimage', (req,res,next) => {
  res.render('postimage');
});router.get('/post/:id(\\d+)', getPostById, getCommentsByPostId, (req, res, next) => {
  
      res.render('viewpost', {title: `post ${req.params.id}`});
    
})

module.exports = router;