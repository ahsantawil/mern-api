const { validationResult } = require('express-validator');

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const img = req.body.img;
    const body = req.body.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    } 

    const result = {
        message: 'Create Blog Post Success',
        data: {
            post_id: 1,
            title : title,
            Image   : img,
            body: body,
            createdAt: "12/07/2020",
            author: {
                id: 1,
                name: "Ahsan"
            }
        }
    }
    res.status(201).json(result);
}