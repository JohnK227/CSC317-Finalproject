var PostModel = require('../models/post');
const {getCommentsForPost} = require('../models/comments');
const {getPostById, getRecentPosts} = require('../models/post');
const {getNRecentPosts} = require('../models/post');
const postsMiddleware ={}

postsMiddleware.getRecentPosts = async function(req, res, next) {
    try{
        let results = await PostModel.getNRecentPosts(8);
        res.locals.results = results;
        if(results.length == 0){
            req.flash('error', 'There are no posts created');

        }
        next();
    }
    catch(err) {
        next(err)
    }
}


postsMiddleware.getPostById = async function(req, res, next) {

    try {
        let postId = req.params.id;
        let results = await getPostById(postId);
        if(results && results.length){
            res.locals.currentPost = results[0]
            next();
        }else{
            res.redirect('/')
        }
    } catch (error) {
        next(error)
    }
        }
    
postsMiddleware.getCommentsByPostId = async function(req, res, next) {
    let postId = req.params.id;
    try {
        
        let results = await getCommentsForPost(postId)
            res.locals.currentPost.comment = results;
            next();
        }catch(err) {
            next(err);
        }
    }

module.exports = postsMiddleware;