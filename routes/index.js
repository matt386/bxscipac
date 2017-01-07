var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('index', {title: "Bronx Science Pokémon Appreciation Club"});
});

module.exports = router;
