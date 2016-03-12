module.exports = {

  getMenu: function(req, res) {
    //dummy data for sweetgreens menu
    var dummy = [
      {
        "meta": {
          "code": 200,
          "requestId": "56e4990f498ed996bb4cea71"
        },
        "response": {
          "menu": {
            "provider": {
              "name": "yext",
              "attributionImage": "https://www.yext-static.com/cms/pl-synced/pl-synced.png",
              "attributionLink": "https://www.yext.com/?ref=Foursquare"
            },
            "menus": {
              "count": 1,
              "items": [
                {
                  "menuId": "yext-56c50451cd106d54c69d17ce",
                  "name": "Menu",
                  "entries": {
                    "count": 4,
                    "items": [
                      {
                        "sectionId": "56c50451cd106d54c69d17cf",
                        "name": "Winter Menu: Seasonal Items Are Sourced From Our Local Partners",
                        "entries": {
                          "count": 7,
                          "items": [
                            {
                              "entryId": "56c50451cd106d54c69d17d0",
                              "name": "Bento Bowl",
                              "description": "Roasted steelhead, organic wild rice, organic baby spinach, cucumber, shredded cabbage, tomato, nori furikake, miso sesame ginger dressing"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d1",
                              "name": "Warm Lentil Bowl",
                              "description": "Organic quinoa + farro, lentils + chickpeas, bok choy, cilantro, peppers, red onion, roasted chicken, carrot chili vinaigrette"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d2",
                              "name": "Apples + Butternut Squash",
                              "description": "Shredded kale, organic mesclun, butternut squash, apples, blue cheese, raisins, umami walnuts, balsamic vinaigrette"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d3",
                              "name": "Organic Lentil Chickpea Soup",
                              "description": "This 100% organic soup is made with hearty lentils and chickpeas with diced carrots, onions and celery"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d4",
                              "name": "Organic Butternut Squash",
                              "description": "A smooth and rich soup to warm you up in cold weather"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d5",
                              "name": "Matcha Fresca",
                              "description": "This all-natural, antioxidant-rich green tea drink with a hint of lemon boosts your metabolism and your brainpower."
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d6",
                              "name": "Chamomile Mint Iced Tea",
                              "description": "Slow down with this calming herbal tea, made in-house daily"
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "56c50451cd106d54c69d17d7",
                        "name": "Signature Greens: Made with Fresh, Organic Produce That Is Locally Sourced Each Season. Dressing Comes On the Side.",
                        "entries": {
                          "count": 6,
                          "items": [
                            {
                              "entryId": "56c50451cd106d54c69d17d8",
                              "name": "Rad Thai",
                              "description": "Organic arugula + organic mesclun, sprouts, carrots, shredded cabbage, spicy sunflower seeds, cucumbers, basil, citrus shrimp, spicy cashew dressing"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17d9",
                              "name": "Kale Caesar",
                              "description": "Shredded kale + chopped romaine, tomatoes, shaved parmesan, parmesan crisp, roasted chicken, fresh lime squeeze, caesar dressing"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17da",
                              "name": "Spicy Sabzi",
                              "description": "Organic baby spinach + shredded kale, spicy quinoa, spicy broccoli, raw beets, carrots, sprouts, basil, roasted organic tofu, sriracha, carrot chili vinaigrette"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17db",
                              "name": "Guacamole Greens",
                              "description": "Organic mesclun, tomatoes, red onion, tortilla chips, avocado, roasted chicken, fresh lime squeeze, lime cilantro jalapeño vinaigrette"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17dc",
                              "name": "Avocobbo",
                              "description": "Shredded kale + chopped romaine, tomatoes, raw corn, avocado, bacon, egg, roasted chicken, blue cheese dressing"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17dd",
                              "name": "Hummus Tahina",
                              "description": "Shredded kale + chopped romaine, tomatoes, red onion, cucumbers, pita chips, local feta, housemade hummus, baked falafel, cucumber tahini yogurt"
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "56c50451cd106d54c69d17de",
                        "name": "Signature Grains: Made with Fresh, Organic Produce That Is Locally Sourced Each Season. Dressing Comes On the Side.",
                        "entries": {
                          "count": 3,
                          "items": [
                            {
                              "entryId": "56c50451cd106d54c69d17df",
                              "name": "Earth Bowl",
                              "description": "Quinoa + farro, organic arugula, tomatoes, raw corn, organic chickpeas, spicy broccoli, organic white cheddar, roasted chicken, pesto vinaigrette"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17e0",
                              "name": "Harvest Bowl",
                              "description": "Organic wild rice + shredded kale, apples, sweet potatoes, toasted almonds, local goat cheese, roasted chicken, balsamic vinaigrette"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17e1",
                              "name": "Wild Child",
                              "description": "Organic wild rice + organic baby spinach, cilantro, peppers, raw beets, shredded cabbage, carrots, raw seeds, avocado, miso sesame ginger dressing"
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "56c50451cd106d54c69d17e2",
                        "name": "Beverages: Our Housemade Beverages Are Made Fresh Daily. #drinkresponsibly",
                        "entries": {
                          "count": 4,
                          "items": [
                            {
                              "entryId": "56c50451cd106d54c69d17e3",
                              "name": "Cucumber Ginger Lime Fresca",
                              "description": ""
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17e4",
                              "name": "Jasmine Green Iced Tea",
                              "description": "Our refreshing jasmine green tea is chock full of antioxidants and made in-house daily"
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17e5",
                              "name": "Lemon Fresca",
                              "description": ""
                            },
                            {
                              "entryId": "56c50451cd106d54c69d17e6",
                              "name": "Iced Chai",
                              "description": ""
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    ];
    res.send(dummy);
  }

};
