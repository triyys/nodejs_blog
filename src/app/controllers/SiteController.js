const ProductModel = require('../models/ProductModel');
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        ProductModel.find({})
            .then(products => {
                return res.render('home', {
                    products: multipleMongooseToObject(products)
                })
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;