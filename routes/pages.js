var
  pagesRouter = require('express').Router(),
  pagesController = require('../controllers/pages.js');

// pagesRouter.get('/', function(req, res) {
//   var users = ["Anil", "Tiff", "David"];
//   res.render('index.ejs', {title: "EJS is amazing!", loopUsers: users});
// });

pagesRouter.get('/', pagesController.index);

pagesRouter.get('/about', pagesController.about);

pagesRouter.get('/contact', pagesController.contact);

module.exports = pagesRouter;
