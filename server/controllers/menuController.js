var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var config = require('../db/config/config.js');

module.exports = {

  getMenu: function(req, res) {
    var restaurantId = req.body ? req.body.restaurant : '564e615c498e2597e77f0c39';
    console.log('++line 11 inside getMenu in menuController.js',req);
    var date = moment().format('YYYYMMDD');

    var query = `https://api.foursquare.com/v2/venues/${restaurantId}/menu?` +
                `&client_id=${config.foursquare.clientId}` +
                `&client_secret=${config.foursquare.clientSecret}&v=${date}`;

    request(query, function(err, resp, body) {
      if (!err && resp.statusCode === 200) {
        var data = JSON.parse(body).response.menu.menus.items;

        res.send(data);
      }
    });

    // delete dummy[0].meta;
    // delete dummy[0].response.menu.provider;
    // var menus = dummy[0].response.menu.menus.items;
    // for(var i=0; i<menus.length; i++){
    //   var menu_name = menus[i].name.toLowerCase();
    //   delete menus[i].menuId;
    //   delete menus[i].description;
    //   if(menu_name.includes('spirit') || menu_name.includes('beer') || menu_name.includes('wine') || menu_name.includes('whiskey')){
    //     delete menus[i];
  }
};
