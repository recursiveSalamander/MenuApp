var restaurantController = require('../controllers/restaurantController.js');
var menuController = require('../controllers/menuController.js');

module.exports = function(app, express) {

  app.use('/', express.static(__dirname + '/../../client'));

  app.get('/api/restaurantList', restaurantController.getRestaurants);
  app.get('/api/menu', menuController.getMenu);
};
