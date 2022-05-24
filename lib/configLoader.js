'use strict';

var logger  = require('./logger'),
    env     = process.env.NODE_ENV,
    mongoUsername = process.env.MONGO_USERNAME,
    mongoPassword = process.env.MONGO_PASSWORD,
    mongoHost = process.env.MONGO_HOST,
    mongoDB = process.env.MONGO_DB;

if (!env) {
  env = 'development';
} 

logger.log('Node environment: ' + env);
logger.log('loading config.' + env + '.json');

let config = require('../config/config.' + env + '.json');

if (mongoUsername && mongoPassword) {
  config.databaseConfig.username = mongoUsername;
  config.databaseConfig.password = mongoPassword;
}

if (mongoHost) {
 config.databaseConfig.host = mongoHost;
}

if (mongoDB) {
  config.databaseConfig.database = mongoDB;
}

module.exports = config;
