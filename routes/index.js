var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Suggestion = mongoose.model('Suggestion');

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

router.get('/news', function(req, res, next) {
  res.render('news', {title:'News'});
});

router.get('/links', function(req, res, next) {
  res.render('links', {title:'Links'});
});

router.get('/feedback', function(req, res, next) {
  res.render('feedback', {title:'Feedback'});
});

router.post('/feedback', function(req, res, next) {
  var s = new Suggestion(
    {
      name:req.body.name,
      email:req.body.email,
      feedback:req.body.feedback
    }
  );
  s.save(function(err, questions, count){
    res.redirect('/thanks');
  });
});

router.get('/thanks', function(req, res, next) {
  res.render('thanks', {title:'Thanks!'});
});

module.exports = router;
