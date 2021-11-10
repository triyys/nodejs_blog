const ProductModel = require('../models/ProductModel');
const { multipleMongooseToObject } = require('../../utils/mongoose')

class MeController {
    // [GET] /me/stored/products
    storedProducts(req, res, next) {
        ProductModel.find({})
            .then(products => {
                return res.render('me/stored-products', {
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
    }
    
    // [GET] /me/stored/products
    trashProducts(req, res, next) {
        ProductModel.findDeleted({})
            .then(products => {
                return res.render('me/trash-products', {
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController;