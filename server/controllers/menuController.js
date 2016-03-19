var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var config = require('../db/config/config.js');

var test = 'hello world!';

module.exports = {

  getMenu: function(req, res) {
    var restaurantId = req.body.restaurantId;
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
  }
};
