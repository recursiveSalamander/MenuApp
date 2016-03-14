var request = require('request');
var _ = require('lodash');
var moment = require('moment');

var config = require('../db/config/config.js');

module.exports = {

  getRestaurants: function(req, res) {
    var lat = req.latitude || '34.02';
    var long = req.longitude || '-118.49';
    var date = moment().format('YYYYMMDD');

    var query = `https://api.foursquare.com/v2/venues/search?ll=${lat},${long}` +
                `&limit=50&categoryId=4bf58dd8d48988d1c4941735&client_id=${config.foursquare.clientId}` +
                `&client_secret=${config.foursquare.clientSecret}&v=${date}`;

    request(query, function(err, resp, body) {
      if (!err && resp.statusCode === 200) {
        var data = JSON.parse(body).response.venues;

        data = _.filter(data, function(element) {
          return element.hasMenu;
        });

        res.send(data);
      }
    });
  }

};
