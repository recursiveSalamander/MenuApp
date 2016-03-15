var jsonParser = require('body-parser').json();
var restaurantController = require('../controllers/restaurantController.js');
var menuController = require('../controllers/menuController.js');

module.exports = function(app, express) {

  app.use(jsonParser);

  app.use('/', express.static(__dirname + '/../../client'));

  app.get('/api/restaurants', jsonParser ,restaurantController.getRestaurants);
  app.get('/api/menu', jsonParser ,menuController.getMenu);
};
