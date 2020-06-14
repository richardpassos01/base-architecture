const UserFactory = require('../factories/user');
const userController = UserFactory.getController();

exports.loadIn = function loadIn(
  server,
  controller = userController
) {
  server.get(
    '/users/list',
    (...args) => controller.listUsers(...args)
  );
};
