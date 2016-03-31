var raccoon = require('raccoon');
var config = require('../db/config/config.js');

raccoon.connect(config.redis.port, config.redis.url, config.redis.password);
