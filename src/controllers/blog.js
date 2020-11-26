const { validationResult } = require('express-validator');
const BlogPost = require('../models/db_blog');

exports.createBlogPost = (req, res, next) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    } 
    
    if (!req.file) {
        const err = new Error('Image Harus diupload');
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    const post = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {
            uid: 1,
            name: 'Ahsan Ta\'wil'
        }
    });

    post.save()
        .then(result => {
                res.status(201).json({
                    message: 'Create Blog Post Success',
                    data: result
                });
        })
        .catch (err => {
            console.log('err: ', err);
    });
    
}