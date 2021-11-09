const newsRouter = require('./news');
const productsRouter = require('./products');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    
    app.use('/news', newsRouter);
    app.use('/products', productsRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);
    
    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;