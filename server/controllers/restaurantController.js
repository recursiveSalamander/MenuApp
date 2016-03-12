module.exports = {

  getRestaurants: function(req, res) {
    var lat = req.latitude;
    var long = req.longitude;
    var dummy = [
      {
        "id": "548c7da0498ea6aa0e8e5a1d",
        "name": "sweetgreen",
        "contact": {
          "phone": "3479873863",
          "formattedPhone": "(347) 987-3863",
          "twitter": "sweetgreen",
          "facebook": "291662151032213",
          "facebookUsername": "sweetgreenwilliamsburg",
          "facebookName": "sweetgreen"
        },
        "location": {
          "address": "162 N 4th St",
          "crossStreet": "at Bedford Ave",
          "lat": 40.71580379245556,
          "lng": -73.95923397970364,
          "distance": 3863,
          "postalCode": "11211",
          "cc": "US",
          "city": "Brooklyn",
          "state": "NY",
          "country": "United States",
          "formattedAddress": [
            "162 N 4th St (at Bedford Ave)",
            "Brooklyn, NY 11211",
            "United States"
          ]
        },
        "categories": [
          {
            "id": "4bf58dd8d48988d1bd941735",
            "name": "Salad Place",
            "pluralName": "Salad Places",
            "shortName": "Salad",
            "icon": {
              "prefix": "https://ss3.4sqi.net/img/categories_v2/food/salad_",
              "suffix": ".png"
            },
            "primary": true
          }
        ],
        "verified": true,
        "stats": {
          "checkinsCount": 3489,
          "usersCount": 1107,
          "tipCount": 50
        },
        "url": "http://sweetgreen.com",
        "hasMenu": true,
        "menu": {
          "type": "Menu",
          "label": "Menu",
          "anchor": "View Menu",
          "url": "http://www.sweetgreen.com/menu",
          "mobileUrl": "http://www.sweetgreen.com/menu",
          "externalUrl": "http://www.sweetgreen.com/menu"
        },
        "allowMenuUrlEdit": true,
        "specials": {
          "count": 0,
          "items": []
        },
        "hereNow": {
          "count": 4,
          "summary": "4 people are here",
          "groups": [
            {
              "type": "others",
              "name": "Other people here",
              "count": 4,
              "items": []
            }
          ]
        },
        "referralId": "v-1457810983",
        "venueChains": []
      },
      {
        "id": "5261525c11d2bf8a5e104a61",
        "name": "Baby's All Right",
        "contact": {
          "phone": "7185995800",
          "formattedPhone": "(718) 599-5800",
          "twitter": "babysallright"
        },
        "location": {
          "address": "146 Broadway",
          "crossStreet": "at Bedford Ave.",
          "lat": 40.710159455411855,
          "lng": -73.96345727999194,
          "distance": 3284,
          "postalCode": "11211",
          "cc": "US",
          "city": "Brooklyn",
          "state": "NY",
          "country": "United States",
          "formattedAddress": [
            "146 Broadway (at Bedford Ave.)",
            "Brooklyn, NY 11211",
            "United States"
          ]
        },
        "categories": [
          {
            "id": "4bf58dd8d48988d1e5931735",
            "name": "Music Venue",
            "pluralName": "Music Venues",
            "shortName": "Music Venue",
            "icon": {
              "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_",
              "suffix": ".png"
            },
            "primary": true
          }
        ],
        "verified": true,
        "stats": {
          "checkinsCount": 10184,
          "usersCount": 5473,
          "tipCount": 78
        },
        "url": "http://babysallright.com",
        "allowMenuUrlEdit": true,
        "specials": {
          "count": 0,
          "items": []
        },
        "events": {
          "count": 1,
          "summary": "Starchild and Gemma",
          "items": [
            {
              "id": "56bc3a6b498ed6ec079c8e3c",
              "name": "Starchild and Gemma",
              "categories": [
                {
                  "id": "4e0a4b91bd41eda0d6092f89",
                  "name": "Concert",
                  "pluralName": "Concerts",
                  "shortName": "Concert",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "startAt": 1457830800,
              "endAt": 1457852400,
              "allDay": false,
              "timeZone": "America/New_York",
              "text": "",
              "url": "http://www.songkick.com/concerts/26139458-starchild-at-babys-all-right?utm_source=4436&utm_medium=partner",
              "images": [],
              "provider": {
                "name": "songkick",
                "iconUrl": {
                  "prefix": "https://playfoursquare.s3.amazonaws.com/events/images/partners/sk/",
                  "sizes": [
                    20,
                    40
                  ],
                  "name": "/logo.png"
                },
                "urlText": "more info"
              },
              "stats": {
                "checkinsCount": 0,
                "usersCount": 0
              }
            }
          ]
        },
        "hereNow": {
          "count": 3,
          "summary": "3 people are here",
          "groups": [
            {
              "type": "others",
              "name": "Other people here",
              "count": 3,
              "items": []
            }
          ]
        },
        "referralId": "v-1457810983",
        "venueChains": []
      }
    ]
    res.send(dummy);
  }

};
}
