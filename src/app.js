const express = require('express');
const bodyParser = require('body-parser');
const routerConfig = require('./routers');
const { swaggerConfig } = require('./middlewares/swagger');

module.exports = async () => {
  const app = new express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(...swaggerConfig);

  routerConfig.loadIn();

  app.use('/', routerConfig.routes);

  app.get('/', function (req, res) {
    res.status(200).json({
      name: 'Base Project',
      last_update: new Date()
    });
  });

  return app;
};