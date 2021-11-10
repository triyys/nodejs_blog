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

    // [GET] /products/:id/edit
    edit(req, res, next) {
        ProductModel.findById(req.params.id)
            .then(product => {
                res.render('products/edit', { product: mongooseToObject(product) });
            })
    }

    // [PUT] /products/:id
    update(req, res, next) {
        ProductModel.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next);
    }

    // [DELETE] /products/:id
    delete(req, res, next) {
        ProductModel.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /products/store
    store(req, res, next) {
        ProductModel.create(req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new ProductController;