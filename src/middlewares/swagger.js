const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { swagger: { path } } = require('../helper/settings');
const swaggerDoc = require('./../swagger.json');

const swaggerConfig = [
    path,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc)
]

module.exports = {
  swaggerConfig
};