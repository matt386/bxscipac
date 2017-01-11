var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Suggestion = mongoose.model('Suggestion');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

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

router.get('/people', function(req, res, next) {
  res.render('people', {title:'People'});
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
  //nodemailer stuff
  var message = {
    from:req.body.email,
    // Comma separated list of recipients
    to: 'pokemonappreciationclub@gmail.com',
    // Subject of the message
    subject: 'Feedback from '+req.body.name, //
    // plaintext body
    text: req.body.feedback
  };
  transporter.sendMail(message, function (error, info) {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
  });
  //end nodemailer stuff
  s.save(function(err, questions, count){
    res.redirect('/thanks');
  });
});

router.get('/thanks', function(req, res, next) {
  res.render('thanks', {title:'Thanks!'});
});

module.exports = router;
