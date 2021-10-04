class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('This is /:slug router');
    }
}

module.exports = new NewsController;