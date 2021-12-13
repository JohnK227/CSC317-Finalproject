var express = require('express');
var router = express.Router();
var db = require("../config/database");
const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
var PostModel = require("../models/post")
var PostError = require('../helpers/error/PostError');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/upload");
    },
    filename: function (req, file, cb) {
        let fileExt = file.mimetype.split('/')[1]
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${fileExt}`);
    }
});

var uploader = multer({ storage: storage });

router.get('/search', (req, res, next) => {
    try {
        let searchTerm = req.query.search;
        if (!searchTerm) {
            res.send({
                resultsStatus: "info",
                message: "no info given search",
                results: []
            });
        } else {
            let results = PostModel.search(searchTerm)
            if (results.length) {
                res.send({
                    resultsStatus: "info",
                    message: `${results.length} results found`,
                    results: results
                });
            } else {
                let results = PostModel.getNRecentPosts(8);
                res.send({
                    message: "none results in found",
                    results: results
                });
            }
        }
    } catch (err) {
         next(err)
}
})



router.post('/createPost', uploader.single("submitImage"), (req, res, next) => {
    let fileUploaded = req.file.path;
    let fileAsThumbnail = `thumbnail-${req.file.filename}`;
    let destinationOfThumbnail = req.file.destination + "/" + fileAsThumbnail;
    let title = req.body.title;
    let description = req.body.description;
    let fk_userId = req.session.userId;



    sharp(fileUploaded)
        .resize(200)
        .toFile(destinationOfThumbnail)
        .then(() => {
            return PostModel.create(
                title,
                description,
                fileUploaded,
                destinationOfThumbnail,
                fk_userId,
            )
        })
        .then((postWasCreated) => {
            if (postWasCreated) {
                req.flash(`success`, "Your post creates successfully");
                res.redirect("/home");

            } else {
                throw new PostError('post count be create',
                    '/postimage',
                    200)
            }
        })
        .catch((err) => {
            if (err instanceof PostError) {
                errorPrint(err.getMessage())





                req.flash('error', err.getMessage());
                res.status(err.getStatus());
                res.redirect(err.getRedirectedURL());
            } else {
                next(err);
            }

        })
});

module.exports = router;