var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var config = require('../db/config/config.js');
var Cache = require('../constructors/Cache.js');


module.exports = {

  getMenu: function(req, res) {
    var restaurantId = req.body.restaurantId;
    var date = moment().format('YYYYMMDD');

    var query = `https://api.foursquare.com/v2/venues/${restaurantId}/menu?` +
                `&client_id=${config.foursquare.clientId}` +
                `&client_secret=${config.foursquare.clientSecret}&v=${date}`;

    request(query, function(err, resp, body) {
      if (!err && resp.statusCode === 200) {
        console.log(data);
        var data = JSON.parse(body).response.menu.menus;


        // caches restaurant ids that correspond to empty menus so they may be filtered out
        if (data.count === 0) {
          emptyMenus.addData(restaurantId);
        }
        res.send(data.items);
      }
    });
  }
};
