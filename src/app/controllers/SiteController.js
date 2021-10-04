const ProductModel = require('../models/ProductModel');

class SiteController {

    // [GET] /
    index(req, res, next) {
        ProductModel.find({})
            .then(products => res.render('home', {
                products: products,
            }))
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;