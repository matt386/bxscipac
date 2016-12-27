var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.send('hi paul');
});

module.exports = router;
