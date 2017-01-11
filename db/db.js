var mongoose = require('mongoose');

var Suggestion = new mongoose.Schema({
  name:String,
  email:String,
  feedback:String
});

mongoose.model('Suggestion', Suggestion);
mongoose.connect('mongodb://matt:pokemon@ds161008.mlab.com:61008/bxscipac-suggestions');
