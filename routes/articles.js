var express = require("express");
var router = express.Router();

Article = require('../models/article.js');

// GET home page
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
		if(err){
			res.send(err);
		} else {
			res.render('articles', { 
				title: 'All Articles',
				articles: articles
			 });
		}
	});
});

router.get('/show/:id', function(req, res, next) {
  Article.getArticleById([req.params.id], function(err, article){
		if(err){
			res.send(err);
		} else {
			res.render('article', {
				article: article
			 });
		}
	});
});

router.get('/category/:category_id', function(req, res, next) {
  res.render('articles');
});

router.delete('/delete/:id', function(req, res){
	var query = {_id: [req.params.id]};
    Article.remove(query, function(err){
        if(err){
				res.send('Error: '+err);
        } else {
            res.status(204).send();
        }
    });
});


module.exports = router;