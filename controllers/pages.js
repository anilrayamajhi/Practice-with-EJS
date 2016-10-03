var User = require('../models/User.js');

module.exports = {
  index : function(req, res) {
    User.find({}, function(err, users){
    res.render('index', {title: "EJS is amazing!", loopUsers: users});
    });
  },

  about: function(req, res) {
    res.render('about', {title: "About!!!"});
  },

  contact: function(req, res) {
    res.render('contact', {title: "Contact!!!"});
  }
};
