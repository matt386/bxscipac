var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('index', {title:'The Bronx Science Pokémon Appreciation Club!'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {title:'About'});
});

router.get('/links', function(req, res, next) {
  res.render('links', {title:'Links'});
});

module.exports = router;
