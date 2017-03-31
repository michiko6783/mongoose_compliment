// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');
var Compliment = require('Compliment');

//just in case...
// var schema = new mongoose.Schema({
//   name: {type: String, required: true }
// });
// var Unit = mongoose.model('Unit', schema);

// Make this available to our other files
module.exports = Compliment;
