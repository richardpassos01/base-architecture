const express = require('express');
const routerConfig = require('./routers')

module.exports = async () => {
  const app = new express();

  routerConfig.loadIn();

  app.use('/', routerConfig.routes);

  app.use(express.json());

  app.get('/', function (req, res) {
    res.status(200).json({
      name: 'Base Project',
      last_update: new Date()
    });
  });

  return app;
};