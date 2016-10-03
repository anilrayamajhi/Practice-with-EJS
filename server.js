var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  ejsLayouts = require('express-ejs-layouts'),
  pagesRoutes = require('./routes/pages.js'),
  usersRoutes = require('./routes/users.js');
//
mongoose.connect('mongodb://localhost/ejs-practice', function(err) {
  if (err) return console.log(err);
  console.log("Connceted to MongoDB (ejs-practice)");
});

/////Middleware////
app.use(logger('dev'));
app.use(bodyParser.json());

/////Setting///
app.set('view engine', 'ejs');

//////Middleware//////
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

app.use('/', pagesRoutes);
app.use('/api', usersRoutes);
app.use('*', function(req, res){
  res.render('errPage', {title: "Fuck \nits 404!"});
});

app.listen(3000, function(err) {
  if(err) return console.log(err);
  console.log("Server running on 3000.");
});
