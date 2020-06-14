class UserController {
  listUsers(req, res, next) {
    return this.service.listUsers()
      .then(requirement => res.json({ users }))
      .catch(err => this.errorHandler(err, req, res, next));
  }
}

module.exports = UserController;
