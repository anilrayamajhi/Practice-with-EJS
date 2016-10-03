var User = require('../models/User.js');

module.exports = {
  index: function(req, res){
    User.find({}, function(err, user){
      res.json(user);
    });
  },

  create: function(req, res) {
      User.create(req.body, function(err, user) {
        if(err) return res.json({message: "User not created"});
        res.json({message: "User created", user: user});
      });
  },

  show: function(req, res) {
    User.findById(req.params.id, function(err, user) {
      res.json(user);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
      res.json(user);
    });
  },

  destroy: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err) {
      res.json({message: "Deleted the User!!"});
    });
  }
};
