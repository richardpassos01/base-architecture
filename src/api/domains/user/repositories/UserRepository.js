class UserRepository {
  constructor(params = {}) {
    this.tableName = params.tableName || 'users';
    this.dao = params.dao || null;
  }

  listUsers({ userId }) {
    try {
     return userId;
    } catch (err) {
      console.error(error)
    }
  }
}

module.exports = UserRepository;
