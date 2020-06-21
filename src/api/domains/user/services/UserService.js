const logger = require('../../../../helper/logger');
const { redis: { key, action } } = require('../../../../helper/enumHelper');

class UserService {
  constructor(params = {}) {
    this.repository = params.repository;
    this.redis = params.redis;
  }

  async listUsers({ userId = null }) {
    try {
      const rediKey = key(userId, action.users.list);
      const cachedUsers = await this.redis.get(rediKey);

      if (cachedUsers) {
        return cachedUsers;
      }
      const users = this.repository.listUsers({ userId });

      return users;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

module.exports = UserService;
