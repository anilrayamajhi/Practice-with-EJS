var
  usersRouter = require('express').Router(),
  usersController = require('../controllers/users.js');

usersRouter.route('/')
  .get(usersController.index)
  .post(usersController.create);

usersRouter.route('/:id')
  .get(usersController.show)
  .patch(usersController.update)
  .delete(usersController.destroy);

module.exports = usersRouter;
