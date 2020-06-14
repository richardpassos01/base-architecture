const UsetRepository = require('../repositories/UserRepository');
const logger = require('../../../../helper/logger');

const { redis: { key, action } } = require('../../../../helper/enumHelper');

class UserService {
  constructor(params = {}) {
    super(params);
    this.repository = params.repository || new UsetRepository();
    this.redis = params.redis;
  }

  listUsers({ userId = null }) {
    try {
      const rediKey = key(userId, action.users.list);
      const cachedUsers = this.redis.get(rediKey);

      if(cachedUsers) {
        return cachedUsers;
      }

      return this.repository.listUsers({ userId });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

module.exports = UserService;
