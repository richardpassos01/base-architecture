const Controller = require('../controllers/UserController');
const Service = require('../services/UserService');
const Repository = require('../repositories/UserRepository');

const Redis = require('../../../../config/database/models/redis');

let redis;

class UserFactory {
  creatreController(params = {}) {
    const service = params.service || this.createService();

    return new Controller({ service });
  }

  createService(params = {}) {
    const repository = params.repository || this.createRepository();
    redis = redis || new Redis();

    return new Service({ repository });
  }

  createRepository() {
    return new Repository();
  }
}

module.exports = new UserFactory();
