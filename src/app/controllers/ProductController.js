const ProductModel = require('../models/ProductModel')
const { mongooseToObject } = require('../../utils/mongoose')

class ProductController {
    // [GET] /products/:slug
    show(req, res, next) {
        ProductModel.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('products/show', { product: mongooseToObject(product) });
            })
            .catch(next);
    }

    // [GET] /products/create
    create(req, res, next) {
        res.render('products/create', {});
    }

    // [POST] /products/store
    store(req, res, next) {
        ProductModel.create(req.body)
            .then(() => res.redirect('/'))
            .catch(error => {})
    }
}

module.exports = new ProductController;