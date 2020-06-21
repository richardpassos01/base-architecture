class UserRepository {
  constructor(params = {}) {
    this.mongo = params.mongo;
  }

  async listUsers({ userId }) {
    try {
      const { User, AuditLog } = await this.mongo.models();
      const findAll = userId ? { _id: userId } : null;

      const users = await User.find(findAll).sort('-createdAt');

      await AuditLog.create({
        date: new Date(),
        log: {
          type: 'list',
          data: users
        }
      });

      return users;
    } catch (err) {
      console.error(err)
    }
  }

  async create({ name }) {
    try {
      const { User, AuditLog } = await this.mongo.models();

      const user = await User.create({
        name
      });

      await AuditLog.create({
        date: new Date(),
        log: {
          type: 'create',
          data: user
        }
      });

      return user;
    } catch (err) {
      console.error(err)
    }
  }

  async listAllUsers() {
    
  }
}

module.exports = UserRepository;
