class NewsController {
    // GET /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('ok nhe');
    }
}

module.exports = new NewsController();
