var
  mongoose = require('mongoose'),

  //establish allowed properties of a fruit
  userSchema = mongoose.Schema({
    name: String,
    email: String
  });

module.exports = mongoose.model('User', userSchema);
