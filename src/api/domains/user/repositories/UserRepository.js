class UserRepository {
  constructor(params = {}) {
    // super(params);
    this.tableName = params.tableName || 'users';
    this.dao = params.dao || null;
  }

  listUsers({ userId }) {
    try {

    } catch (err) {
      console.error(error)
    }
  }
}

module.exports = UserRepository;
