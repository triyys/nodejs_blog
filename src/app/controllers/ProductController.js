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
}

module.exports = new ProductController;