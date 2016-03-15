var restaurantController = require('../controllers/restaurantController.js');
var menuController = require('../controllers/menuController.js');
var userAuthController = require('../controllers/userAuthController.js');

module.exports = function(app, express) {

  app.use('/', express.static(__dirname + '/../../client'));

  app.get('/api/restaurants', restaurantController.getRestaurants);
  app.get('/api/menu', menuController.getMenu);
  app.get('/api/signin', userAuthController.signUp);
};
