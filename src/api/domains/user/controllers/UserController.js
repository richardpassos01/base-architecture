const logger = require('../../../../helper/logger');

class UserController {
  constructor(params) {
    this.service = params.service;
  }

  listUsers(req, res, next) {
    const { userId } = req.query;

    return this.service.listUsers({ userId })
      .then(users => res.json(users))
      .catch(err => logger.error(err));
  }


  create(req, res, next) {
    const { name } = req.body;
    
    return this.service.create({ name })
      .then(user => res.json(user))
      .catch(err => logger.error(err));
  }
}

module.exports = UserController;
