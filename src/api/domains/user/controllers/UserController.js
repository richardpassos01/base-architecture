class UserController {
  constructor(params) {
    this.service = params.service;
  }

  listUsers(req, res, next) {
    const { userId } = req.query;

    return this.service.listUsers({ userId })
      .then(users => res.json(users))
      .catch(err => this.errorHandler(err, req, res, next));
  }
}

module.exports = UserController;
