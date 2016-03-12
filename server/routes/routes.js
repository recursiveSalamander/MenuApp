var restaurantController = require('../controllers/restaurantController.js');

module.exports = function(app, express) {



  app.use('/', express.static(__dirname + '/../../client'));

  app.get('/api/restaurantList', restaurantController.getRestaurants);
};
