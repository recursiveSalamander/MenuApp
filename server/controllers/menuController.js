module.exports = {

  getMenu: function(req, res) {
    //dummy data for sweetgreens menu
    var dummy = [
      {
        "meta": {
          "code": 200,
          "requestId": "56e4aa18498eb36044510869"
        },
        "response": {
          "menu": {
            "provider": {
              "name": "singleplatform",
              "attributionImage": "https://as.singleplatform.com/Foursquare/beer-authority/provided_by.png",
              "attributionLink": "http://w.singlepage.com/beer-authority/menu?ref=Foursquare",
              "attributionText": "Disclaimer: Always check with the business for pricing and availability of menu items. SinglePlatform is not responsible for menu or pricing changes, but the information is believed to be accurate when posted. Listing of a menu does not mean that there is any affiliation, endorsement or sponsorship between SinglePlatform and the listed business."
            },
            "menus": {
              "count": 3,
              "items": [
                {
                  "menuId": "mvnzhz9zubclmpdk0fenddbtv",
                  "name": "Brunch Menu",
                  "description": "",
                  "entries": {
                    "count": 2,
                    "items": [
                      {
                        "sectionId": "s7480899",
                        "name": "Brunch Specials",
                        "entries": {
                          "count": 7,
                          "items": [
                            {
                              "entryId": "50530449",
                              "name": "Authority Omelette",
                              "description": "Choice of 3: american cheese, cheddar cheese, swiss, mozzarella, bacon, sausage, spinach, mushrooms, onions, red peppers",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530450",
                              "name": "24 Hour French Toast",
                              "description": "Nutella stuffed topped with fresh strawberries",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530451",
                              "name": "Eggs Benedict",
                              "description": "Poached egg, thick cut bacon, chipotle hollandaise, tater tots (sub sauteed spinach)",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530452",
                              "name": "Famous Pancakes",
                              "description": "3 pineapple upside down pancakes, walnuts and caramel sauce",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530453",
                              "name": "Hell's Kitchen Steak and Eggs",
                              "description": "6oz ny strip, eggs any style, tater tots",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530454",
                              "name": "Hang Over Burger",
                              "description": "Thick cut bacon,sriacha mayo, tomato, fried egg, tater tots",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530455",
                              "name": "Big Breakfast",
                              "description": "Pancake, french toast, bacon, sausage, 2 eggs any style, tater tots",
                              "prices": [
                                "15.00"
                              ],
                              "price": "15.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7480900",
                        "name": "Sides",
                        "entries": {
                          "count": 4,
                          "items": [
                            {
                              "entryId": "50530456",
                              "name": "Tater Tots",
                              "prices": [
                                "5.00"
                              ],
                              "price": "5.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530457",
                              "name": "Thick Cut Bacon",
                              "prices": [
                                "5.00"
                              ],
                              "price": "5.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530458",
                              "name": "Scrambled Eggs",
                              "prices": [
                                "5.00"
                              ],
                              "price": "5.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50530459",
                              "name": "Breakfast Sausage",
                              "prices": [
                                "5.00"
                              ],
                              "price": "5.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "menuId": "mu8ioed3a3fxg4995us11f1rd",
                  "name": "Beer Menu",
                  "description": "",
                  "entries": {
                    "count": 5,
                    "items": [
                      {
                        "sectionId": "s7482393",
                        "name": "Featured",
                        "entries": {
                          "count": 6,
                          "items": [
                            {
                              "entryId": "50540657",
                              "name": "Ace Pineapple Cider Abv 5.0",
                              "description": "Ace's Pineapple Cider is a balanced, crisp, natural offering made with fresh pineapple and no added sugars",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540658",
                              "name": "Crispin Pacific Pear Cider Abv 4.5",
                              "description": "Naturally elegant and refreshingly adult with a sparkling natural pear finish and a subtle woody complexity, complemented by an intense fresh pear bouquet. Naturally fermented using 100% pear juice, not from pear juice concentrate or pear-flavored hard apple cider... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540659",
                              "name": "Harpoon Craft Cider Abv 4.8",
                              "description": "Harpoon Craft Cider is crafted from only one ingredient: freshly pressed apples. We ferment it with our house yeast, yielding a clean but refreshing all natural cider. Harpoon Craft Cider is also naturally gluten-free... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540660",
                              "name": "Mckenzie's Seasonal Reserve Hard Cider Abv 5",
                              "description": "Sip, smell and savor the rich, mulled spicy goodness of McKenzie's Seasonal Reserve. Aromatic fall flavors warm you from the inside out, and chase away the chill on those cold nights. Serve warm or cold, but only for a limited time",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540661",
                              "name": "Original Sin Cherry Tree Cider Abv 6.7",
                              "description": "Our Cherry Tree cider combines the finest American heirloom apples, which were popular in the United States in the 18th and 19th centuries, with tart cherries. The finished product has the clean, rich flavor of fresh cherries with the depth and elegance that comes from using freshly pressed U.S... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540662",
                              "name": "Original Sin Elderberry Cider Abv 5.0",
                              "description": "A balanced cider combining Apples with tart Elderberries",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7528859",
                        "name": "Casks",
                        "entries": {
                          "count": 1,
                          "items": [
                            {
                              "entryId": "50841401",
                              "name": "Stone Arrogant Bastard with Citra Hops Abv 7.2",
                              "description": "Big and boozy with strong malt characteristics and noticeable hop flavor and bitterness",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7482394",
                        "name": "On Tap",
                        "entries": {
                          "count": 70,
                          "items": [
                            {
                              "entryId": "50540663",
                              "name": "Allagash Curieux Abv 11.0",
                              "description": "Allagash Curieux is a unique beer that was aged for 8 weeks in Jim Beam Bourbon Barrels",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540664",
                              "name": "Almanac Golden Gate Gose Abv 5.0",
                              "description": "Our Golden Gate Gose is a special beer inspired by the classic wheat beer hailing from Leipzig, Germany... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540665",
                              "name": "Anderson Valley Boont Amber Ale Abv 5.8",
                              "description": "Balance is what makes our Boont Amber Ale so unique: rich, crystal malts give this beer a deep copper hue and contribute a slight caramel sweetness while the herbal, spicy bitterness from carefully selected whole-cone hops impart a crisp, clean finish... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540666",
                              "name": "Anderson Valley Fall Hornin' Pumpkin Ale Abv 6.0",
                              "description": "With a brilliant, deep copper hue and creamy beige-colored head, our Fall Hornin' Pumpkin Ale has inviting aromas of caramelized malt and baking bread with highlights of cinnamon, nutmeg, pumpkin and seasonal spices... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540667",
                              "name": "Anderson Valley Keebarlin Pale Ale Abv 4.2",
                              "description": "Brewed with 100% columbus hops and loaded with hop flavor and aroma, Keebarlin' Pale Ale takes aim at what a session ale should be. No matter where you're headed, our highway 128 series paves a way for a \"slow lope'n beeson tree.\" * (That's Boontling for smooth ride.)",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540668",
                              "name": "Ballantine India Pale Ale Abv 7.2",
                              "description": "First introduced in America in the late 1800's Ballantine IPA was a beer for connoisseurs. It has been credited as an inspirational influence for the present day craft beer revolution in America... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540669",
                              "name": "Bear Republic Peter Brown Tribute Brown Ale Abv 6.3",
                              "description": "Pete Brown Tribute Ale is our rendition of a Strong American Brown Ale. This ale pays homage to subtle flavors of golden brown sugars, and sweet molasses",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540670",
                              "name": "Bear Republic Racer 5 Ipa Abv 7.0",
                              "description": "This hoppy American IPA is a full bodied beer brewed American pale and crystalmalts, and heavily hopped with Chinook, Cascade, Columbus and Centennial. There's a trophy in every glass",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540671",
                              "name": "Bell's Two Hearted Ale Abv 7.0",
                              "description": "India Pale Ale style well suited for Hemingway-esque trips to the Upper Peninsula. American malts and enormous hop additions give this beer a crisp finish and incredible floral hop aroma",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540672",
                              "name": "Boulder Shake Chocolate Porter Abv 5.9",
                              "description": "Our twist on the traditional american porter, Shake chocolate porter is black in color with rich, dark chocolate aromatics and flavors and subtle coffee-like notes... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540673",
                              "name": "Breckenridge Vanilla Porter Abv 4.7",
                              "description": "An ale that has all the chocolate and roasted nut flavor of a classic Porter, with an enigmatic surprise thrown in for good measure",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540674",
                              "name": "Brooklyn 1/2 Ale Session Saison Abv 3.4",
                              "description": "We love all kinds of farmhouse ales. But the original farmhouse ales weren't big beers - they were beers you could drink while working in the hot sun all day. Out 1/2 ale reaches back to that tradition - it's a dry, hoppy, citrusy, and delicious saison all at 3.4% Alc. By Vol... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540675",
                              "name": "Brooklyn Brewmaster's Reserve Weizenhammer Ale Abv 7.8",
                              "description": "Brooklyn Weizenhammer stands tall in the glass, radiating a hazy, deep golden hue and raising a pillowy white foam as beautiful as the songs of old... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540676",
                              "name": "Brooklyn Brooklyner Weisse Abv 5.1",
                              "description": "Brooklyner Weisse is a Bavarian-style wheat beer, unfiltered and chock full of spicy esters that evoke hints of cloves and fruit, some say even bananas. The beer is made with a traditional weizen yeast strain. The malt mix is half malted wheat and half barley malt... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540677",
                              "name": "Brooklyn Defender Abv 7.2",
                              "description": "Imperial Pale Ale",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540678",
                              "name": "Brooklyn Fire & Ice Abv 7.2",
                              "description": "Brooklyn Fire & Ice is a robust porter that wraps beechwood smoke around a silky core of oatmeal and roasted malts. Wood is cut in the beechwood forests surrounding Bamberg, Germany, and our maltsters use it to dry their smoked malts, which form the basis of this beer... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540679",
                              "name": "Brooklyn Hammarby Syndrome Abv 8.0",
                              "description": "Our new Brewmaster's Reserve beer is Hammarby Syndrome, a robust ale that will transport you directly to the seaside of old Stockholm. It's brewed from a large proportion of spelt, an ancient wheat-like grain that was once a mainstay of Scandinavian beers... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540680",
                              "name": "Brooklyn Lager Abv 5.2",
                              "description": "Brooklyn Lager, the Brewery's flagship label, is New York's \"hometown\" beer, brewed to a pre-Prohibition recipe that dates back to the days when Brooklyn was the brewing capital of the East Coast. Brooklyn Lager has won numerous awards... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540681",
                              "name": "Brooklyn Post Road Pumpkin Abv 5.0",
                              "description": "Early American colonialists, seeking natural ingredients for brewing ales, turned to pumpkins, which were plentiful, flavorful and nutritious. Blended with barley malt, pumpkins became a commonly used beer ingredient. Post Road Pumpkin Ale brings back this tasty tradition... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540682",
                              "name": "Brooklyn Ridgy Didge Abv 8.4",
                              "description": "Saison brewed with Lemon Myrtle and Tasmanian pepperberry",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540683",
                              "name": "Bud Light Abv 4.2",
                              "description": "Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the world's favorite light beer.",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540684",
                              "name": "Chimay Cinq Cents (White) Abv 8.0",
                              "description": "The Chimay Triple, last-born of the Abbey, is labelled \"Cinq Cents\" on the 750 ml bottle. Of a golden colour, the Trappist beer combines sweet and bitter in a rare balance... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540685",
                              "name": "Delirium Red Abv 8.5",
                              "description": "REAL BELGIAN and one of the best ever made in the history of beer! Basically an infused Delirium Tremens and called \"Red\", a Cherry Beer. Deep dark red colour, with a light pink, compact and lacing head. Soft fruity aroma, with hints of almond and mildly sour cherries... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540686",
                              "name": "Dogfish Head 60 Minute Abv 7.5",
                              "description": "60 Minute IPA is continuously hopped - more than 60 hop additions over a 60-minute boil. (Getting a vibe of where the name came from?)",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50547375",
                              "name": "Firestone Walker Union Jack Ipa Abv 7.5",
                              "description": "An aggressively hopped West Coast-style IPA. Union Jack showcases exceptional dry hop character with stunning pineapple, citrus and piney aromas on the nose accompanied by honey-like malt aromatics... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50547376",
                              "name": "Flying Dog Doggie Style Pale Ale Abv 5.3",
                              "description": "Dry Hopped with a load of Cascade hops grown in the Pacific Northwest. Doggie Style has enough hop character to satisfy hop-heads, but isn't overpoweringly hoppy. It's brilliant amber-copper color and pleasant malt flavor comes from the addition of Carastan malts",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50547377",
                              "name": "Flying Dog Raging Bitch Belgian Style Ipa Abv 8.3",
                              "description": "Bitches come in a variety of forms, but there's never been something as sassy as Flying Dog's Raging Bitch Belgian IPA. An American IPA augmented with Belgian yeast, our 20th anniversary beer jumps out of the glass and nips at your taste buds with its delicate hop bitterness. At 8... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50547378",
                              "name": "Founders All Day Ipa Abv 4.7",
                              "description": "The beer you've been waiting for. Keeps your taste satisfied while keeping your senses sharp. An all-day IPA naturally brewed with a complex array of malts, grains and hops. Balanced for optimal aromatics and a clean finish... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540691",
                              "name": "Founders Breakfast Stout Abv 8.3",
                              "description": "The coffee lover's consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and Sumatra and Kona coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540692",
                              "name": "Founders Pale Ale Abv 5.4",
                              "description": "A testament to Cascade hops in a bottle. This medium-bodied pale ale has a distinctive floral hop aroma and refreshing citrus flavor. You'll notice a slight malty sweetness with a balanced hop finish. Perfect to enjoy anytime, anywhere",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540693",
                              "name": "Founders Porter Abv 6.5",
                              "description": "Pours silky black with a creamy tan head. The nose is sweet with strong chocolate and caramel malt presence. No absence of hops gives Founders' robust porter the full flavor you deserve and expect. Cozy like velvet. It's a lover, not a fighter",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540694",
                              "name": "Goose Island Ipa Abv 5.9",
                              "description": "Our IPA recalls a time when ales shipped from England to India were highly hopped to preserve their distinct taste during the long journey. The result, quite simply a hop lover's dream... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540695",
                              "name": "Great Divide Titan Ipa Abv 7.1",
                              "description": "Great Divide brews Titan IPA for hop disciples -- independent beer drinkers seeking out robust, flavorful beers characterized by their abundance of hops, flavor, aroma and bitterness... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540696",
                              "name": "Great South Bay Splashing Pumpkin Abv 5.0",
                              "description": "This trick or a treat of a Pumpkin Ale begins with roasted pumpkin that is splashed into our cauldron where malted barley and handfuls of cascade hops are stirred in with a pinch of cinnamon & clove. A tasty pumpkin brew which will enlighten your soul, throughout the haunting Halloween season",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540697",
                              "name": "Green Flash West Coast Ipa Abv 8.1",
                              "description": "As craft beer pioneers, we embarked on an expedition to brew the benchmark West Coast IPA. We ventured into the unknown and struck gold, discovering a tantalizing menagerie of hops... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540698",
                              "name": "Greenport Harbor Leaf Pile Pumpkin Ale Abv 5.2",
                              "description": "An autumn ale which brings you a slice of pumpkin pie in a glass. Cinnamon, all spice, and nutmeg gives this ale its distinct character. Fall in",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540699",
                              "name": "Harpoon Ipa Abv 5.9",
                              "description": "Ingredients: Water, Three malts, including a 2-row pale, Northwest Cascade Hops, and Yeast. This copper colored ale is floral, medium bodied, with a crisp, refreshing finish. Originally our summer seasonal in 1993, it is now available year-round... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540700",
                              "name": "Hoegaarden Abv 5.0",
                              "description": "Floral notes derived from coriander and chamomile in the aroma, along with notes of orange. The palate is light and spritzy, giving a distinctly refreshing character",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540701",
                              "name": "Hofbräu Hefe Weizen Dunkel Abv 5.1",
                              "description": "Combining refreshing notes of wheat beer and the richness of dark beer, Hefe Weizen Dunkel creates a wonderful and unique flavour... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540702",
                              "name": "Hofbrau Original Abv 5.1",
                              "description": "A golden, clear beer, richly aromatic, and pleasantly mild",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540703",
                              "name": "Huyghe Delirium Nocturnum Abv 8.5",
                              "description": "Colour and sight: Dark brown-red. A compact white-yellow, stable and lacing head. Scent: Touches of caramel, mocha and chocolate. Spices such as liquorice and coriander are also present. Flavour: Initially, a very good mouthfeel of alcohol and softness... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540704",
                              "name": "Johnny Appleseed Hard Apple Cider Abv 5.5",
                              "description": "Johnny Appleseed, a new, refreshingly sweet and intense hard apple cider with a crisp apple bite, Inspired by the legendary adventurer and storyteller, Johnny Appleseed Hard Apple Cider was created for anyone with a thirst for adventure and a story to share",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540705",
                              "name": "Leffe Blond Abv 6.6",
                              "description": "Leffe Blond is a pale abbey beer, with a full, sunny, golden colour. It has a smooth and full bodied taste and a rich creamy head. Like all the Leffe beers, it is a 'connoisseur' beer that is easy to drink",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540706",
                              "name": "Left Hand Milk Stout Abv 6.0",
                              "description": "Dark and delicious, America's great milk stout will change your perception about what a stout can be",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540707",
                              "name": "Lion Imperial Pilsner Abv 8.8",
                              "description": "Lion Imperial Lager from Sri Lanka is specially brewed to acheive it's high alcohol content. The finest natural ingredients deliver a rich, smooth taste and refereshment. Enjoy it's bite",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540708",
                              "name": "Lion Stout Abv 8.8",
                              "description": "The 8.0 per cent abv, bottle conditioned beer is brewed from British, Czech and Danish malts with Syrian hops and an English yeast strain. All the ingredients are transported along precarious roads to the brewery located 3,500 feet above sea level",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540709",
                              "name": "Mckenzies Black Cherry Abv 5.0",
                              "description": "Reserved for the darkest of hearts, McKenzie's Black Cherry is an inspiration to hard cider - rich amber, full body with a refreshingly sweet cherry finish",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540710",
                              "name": "Nebraska Brunette Nut Brown Abv 5.8",
                              "description": "This medium-bodied English-style brown ale is all about the malt. It has a blend of six different malts and a low hop character. Moderate malty sweetness with slight nutty/caramelly flavor and aroma... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540711",
                              "name": "O'hara's Irish Stout Abv 4.3",
                              "description": "Think of Irish beers and you think of Stout! Drink an O'Hara's and you are drinking a \"True Irish Stout\"! Carrying the family name of the brewery founders, this multi-award winning traditional dry Irish stout, deep black colour with a reddish hue when held to the light, pours with a thick creamy ... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540712",
                              "name": "Ommegang Witte Abv 5.1",
                              "description": "Ommegang Witte, a traditional Belgian-style wheat ale with whispers of sweet orange and a touch of tart lemon. Soft and seductive, Ommegang Witte is this summer's version of spicy intrigue and refreshing flavor",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540713",
                              "name": "Oskar Blues Dale's Pale Ale Abv 6.5",
                              "description": "Brewed with hefty amounts of European malts and four kinds of American hops, it delivers a blast of hop aromas, a rich middle of malt and hops, and a thrilling finish. It weighs in at 6.5 % alcohol by volume... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540715",
                              "name": "Radeberger Pilsner Abv 4.8",
                              "description": "Crowned the official drink by King Friedrich August III of Saxony, Radeberger, a pilsner style beer brewed near Dresden, is characterized by its dazzling and refreshing taste and has long been enjoyed by German nobility... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540716",
                              "name": "Rj Rockers Son of a Peach Abv 6.0",
                              "description": "An unfiltered American wheat ale made with real mean peaches. The only thing missing is the fuzz. Savor the anger",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540717",
                              "name": "Shock Top Belgian White Abv 5.2",
                              "description": "Shock Top Belgian White is a medium-bodied, unfiltered Belgian-style wheat ale, with a smooth, citrus mouthfeel and a naturally cloudy, light golden color",
                              "prices": [
                                "6.00"
                              ],
                              "price": "6.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540718",
                              "name": "Sierra Nevada Pale Ale Abv 5.6",
                              "description": "Aromas of citrus and grapefruit. Assertive bitterness on the palate, before showing some pleasing background notes of caramel and a clean, slightly bitter, finish.",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540720",
                              "name": "Sixpoint Crisp Pilsner Abv 5.4",
                              "description": "There is no beautifier of complexion, or form, or behavior, like the wish to scatter joy and not pain around us. Crisp Lager has nothing to hide behind - no makeup to cover up any flaws. Raw ingredients and their essence, full and unabated...uninhibited...CRISP",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540721",
                              "name": "Sixpoint Sensi Harvest Abv 4.7",
                              "description": "A copper ale bursting with fresh, undisturbed hop character. Juicy wet-hops carefully selected by the Mad Scientists make Sensi Harvest a unique delicacy available only at harvest time",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540723",
                              "name": "Smuttynose Vunderbahr Pilsner Abv 5.1",
                              "description": "Weyermann Pilsner Malt Weyermann Acidulated Malt Saaz Hops for all hopping 15 IBU, dryhopping at 1/2 pound per barrel. 5.11% Alcohol by Volume Starting Extract 10.9° Plato Terminal Extract 1.9° Plato",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540724",
                              "name": "Southern Tier 2X Rye Abv 8.1",
                              "description": "Rye is a cereal grain historically grown in our region. It has been cultivated since the time of the early settlers due to the scrappy and hearty ability to withstand harsh climates and poor growing conditions... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540725",
                              "name": "Southern Tier Pumking Abv 8.6",
                              "description": "Brewed in the spirit of All Hallows Eve, a time of the year when spirits can make contact with the physical world and when magic is most potent. Pour Pumking into a goblet and allow it's alluring spirit to overflow... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540726",
                              "name": "Speakeasy Prohibition Ale Abv 6.1",
                              "description": "Anything but traditional, Prohibition pours a deep reddish amber hue, with a fluffy tan head that leaves a beautiful lacing on the glass. A lush, complex aroma teases the senses with juicy grapefruit, citrus, pine, spice and candied caramel malts... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540727",
                              "name": "Stella Artois Abv 5.0",
                              "description": "Stella Artois is a classic Belgian lager, golden in color with exceptional clarity and a spicy hop character",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540728",
                              "name": "Timmermans Strawberry Abv 4.0",
                              "description": "For anyone who finds strawberries irresistible, Timmermans Strawberry evokes the fragrance of long sunny days. Its strawberry flavour will have you wrinkling your nose in delight with each sip. Its luminous colour and its fruity freshness are a treat for taste-buds and eyes alike... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540729",
                              "name": "Troegs Dreamweaver Abv 4.8",
                              "description": "Long toasty days, cool breezy nights and a splash of magic provide the inspiration for the Troegs brothers' dreamiest Single Batch creation -Dreamweaver Wheat... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540730",
                              "name": "Victory Prima Pils Abv 5.3",
                              "description": "Heaps of hops give this pale lager a bracing, herbal bite over layers of soft and smooth malt flavor. This refreshing combination of tastes makes Prima a classy quencher in the tradition of the great pilsners of Europe. Dry and delightful, this is an elegant beer... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540731",
                              "name": "Weihenstephaner Hefe Weissbier Abv 5.4",
                              "description": "Nothing refreshes you more than this naturally cloudy wheat beer with its wonderful yeasty fragrance and taste. Goes well with dishes that do not have too intensive a flavour, especially that Bavarian speciality 'Weisswurst' or white sausage",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540732",
                              "name": "Weishenstephaner Oktoberfestbier Abv 5.8",
                              "description": "Weihenstephaner Festbier is crazy light colored. Damn near as light as a macro light beer. 5.8% ABV makes it significantly stronger than a macro light. There isn't much in the way of aroma. The flavor is lemony. Festive lemons?!? I almost want to say it's wheaty, but maybe not... more",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540733",
                              "name": "Well's and Young's Banana Bread Abv 5.2",
                              "description": "Bottled, Pasteurised. This dark golden coloured ale hugs the palate with great intensity. Its malty aroma is complemented by the gentle nose of Banana. Its flavour unfolds with a sensual sparkle and a smart crispness, which balances its aroma perfectly... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50547379",
                              "name": "Wychwood Hobgoblin Abv 4.5",
                              "description": "Hobgoblin is a powerful full-bodied copper red, well-balanced brew. Strong in roasted malt with a moderate hoppy bitterness and slight fruity character that lasts through to the end. Michael Jackson 500 Classic Brews",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50547380",
                              "name": "Yuengling Abv 4.2",
                              "description": "A full bodied premium light beer with only 98 calories",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7482395",
                        "name": "Bottles",
                        "entries": {
                          "count": 83,
                          "items": [
                            {
                              "entryId": "50540736",
                              "name": "Aecht Schlenkerla Rauchbier Märzen Abv 5.1",
                              "description": "Bamberg's speciality, a dark, bottom fermented smokebeer, brewed with Original Schlenkerla Smokemalt from the Schlenkerla maltings and tapped according to old tradition directly from the gravity-fed oakwood cask in the historical brewery tavern.",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540737",
                              "name": "Alesmith Grand Cru Abv 10.0",
                              "description": "Belgian Strong Dark Ale. Medium-dark brown, with tan head. Sweet, malty aroma with a satisfying balance of hoppiness. Tremendously intriguing, complex flavors play upon the palate shifting from sweet to tangy to hoppy and so on. The medium-dryfinish leaves you eager for the next sip",
                              "prices": [
                                "35.00"
                              ],
                              "price": "35.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540738",
                              "name": "Alesmith Horny Devil 2009 Abv 10.0",
                              "description": "Horny Devil (formerly known as Belgian Strong Ale) is inspired by the curious beers produced by Trappist monks in monasteries across Belgium. The beer's dryness and strength are the result of a unique Trappist yeast strain in a warm fermentation... more",
                              "prices": [
                                "35.00"
                              ],
                              "price": "35.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540739",
                              "name": "Alesmith Speedway Stout Abv 12.0",
                              "description": "Speedway Stout's ominous, pitch-black appearance has become a hallmark of this modern-day classic. Chocolate and roasted malts dominate the flavor, supported by notes of dark fruit, toffee, and caramel. A healthy dose of locally-roasted coffee from Ryan Bros. Coffee, Inc... more",
                              "prices": [
                                "28.00"
                              ],
                              "price": "28.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540740",
                              "name": "Amstel Light Aqbv 3.5",
                              "description": "A special light beer containing only 3.5% alcohol and approximately 35% fewer calories than regular lager beer. But every bit as thirst-quenching and refreshing",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540741",
                              "name": "Ayinger Celebrator Doppelbock Abv 6.7",
                              "description": "Celebrator has a creamy head of tight bubbles contrasting beautifully with its profound dark robe. It is full-bodied and velvety from half a year's aging. Although it is strong, it is not overpowering... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540742",
                              "name": "Bells Oracle Double Ipa Abv 10.0",
                              "description": "Our take on the West Coast-style Double India Pale Ale, The Oracle places hop intensity first & foremost, making only the slightest concession to malt & balance. The fireworks start with the floral aromatic punch of two separate dry-hop sessions with Amarillo and NZ Pacific Jade... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540743",
                              "name": "Bells's Kalamazoo Stout Abv 6.0",
                              "description": "Kalamazoo Stout represents stouts in the Bell's year-round roster, offering a blend of dark chocolate and coffee flavors with just a hint of brewer's licorice. One of our oldest recipes, it balances a significant hop presence against the roast malt body",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540744",
                              "name": "Belo Ipe",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540745",
                              "name": "Belo Petroleum Brazilian Imperial Stout Abv 12.0",
                              "description": "Belo Brazilian Imperial Stout, made with the choicest ingredients in the world",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540746",
                              "name": "Belo San Francisco Abv 7.5",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540747",
                              "name": "Brooklyn Hand and Seal Abv 10.0",
                              "description": "This is Hand & Seal and it is a Barleywine aged in Bourbon Barrels. This beer celebrates Garrett Oliver's 20th Anniversary at Brooklyn",
                              "prices": [
                                "27.00"
                              ],
                              "price": "27.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540748",
                              "name": "Brooklyn Local 1 Abv 9.0",
                              "description": "In Williamsburg, Brooklyn, we forge barley malt and hops from Germany, aromatic raw sugar from Mauritius and yeast from Belgium into our latest beer, Brooklyn Local 1. Behind the full golden color you'll find an alluring aroma, a dynamic complex of flavors... more",
                              "prices": [
                                "22.00"
                              ],
                              "price": "22.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540749",
                              "name": "Brooklyn Local 2 Abv 9.0",
                              "description": "Belgian-inspired bottle-conditioned strong dark abbey ale, with sweet orange peel and raw wildflower honey from a local family apiary",
                              "prices": [
                                "22.00"
                              ],
                              "price": "22.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540750",
                              "name": "Bud Light Abv 4.2",
                              "description": "Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the world's favorite light beer.",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540751",
                              "name": "Budweiser Abv 5.0",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540752",
                              "name": "Captain Lawrence Captain's Reserve Imperial Ipa Abv 9.0",
                              "description": "This beer is a salute to the ingenuity and creativity of the American craft brewers. A uniquely American style of beer, the Double or Imperial IPA, has become the calling card of many craft brewers who aren't afraid to push the limits of what hops can add to a beer... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540753",
                              "name": "Chimay Blue",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540754",
                              "name": "Chimay Premiere (Red) Abv 7.0",
                              "description": "Chimay Red is noted for its coppery colour which makes it particularly attractive. Topped with a creamy head, it gives off a light, fruity apricot aroma produced by the fermentation. The taste perceived in the mouth is a balance confirming the fruity nuances noticed in the fragrance... more",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540755",
                              "name": "Chimay Triple Yellow Abv 7.0",
                              "description": "Chimay Tripel, with its typical golden colour, its slightly hazy appearance and its fine head is especially characterised by its aroma which results from an agreeable combination of fresh hops and yeast... more",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540756",
                              "name": "Cisco Pechish Woods Abv 4.88",
                              "description": "Ale aged in oak barrels with peaches added",
                              "prices": [
                                "48.00"
                              ],
                              "price": "48.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540757",
                              "name": "Corona Abv 4.6",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540758",
                              "name": "Crabbie's Alcoholic Ginger Beer Abv 4.8",
                              "description": "Made from a secret recipe, Crabbie's Original Alcoholic Ginger Beer has 4 top secret ingredients. We combine these with steeped ginger, which we still ship all the way from the Far East, just as the first Scots Merchant Adventurers did all those years ago... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540759",
                              "name": "Crispin Artisanal Reserve Honey Crisp Abv 6.5",
                              "description": "Crispin Honey Crisp Artisanal ReserveTM is a small batch, hand crafted, super-premium hard apple cider smoothed with real organic honey for a rich, creamy, full-bodied crisp taste. Smooth over ice... more",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540760",
                              "name": "Crispin Original Cider Abv 5.0",
                              "description": "A classically styled, but nontraditional hard apple cider. Fruit forward, with a fresh, crunchy appley nose and a deliciously creamy, refreshingly crisp mouth feel",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540761",
                              "name": "Crispin Pacific Pear Cider Abv 4.5",
                              "description": "Naturally elegant and refreshingly adult with a sparkling natural pear finish and a subtle woody complexity, complemented by an intense fresh pear bouquet. Naturally fermented using 100% pear juice, not from pear juice concentrate or pear-flavored hard apple cider... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540762",
                              "name": "Crispin Refined Extra Abv 5.5",
                              "description": "European-style extra-dry over ice. The \"champagne\" of ciders; combining subtlety and sophistication; the epitome of unforced elegance. A crisp fresh apple bouquet with a brisk, refined finish that lingers on the palate",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540763",
                              "name": "D'achouffe La Chouffe Abv 8.0",
                              "description": "Golden Ale, strong, spicy, lightly hoppy, with evoluting taste. Natural Beer, bottle refermented, unfiltered, not pasteurised and without any additives",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540764",
                              "name": "Duvel Abv 8.5",
                              "description": "Duvel is a natural beer with a subtle bitterness, a refined flavour and a distinctive hop character. The unique brewing process, which takes about 90 days, guarantees a pure character, delicate effervescence and a pleasant sweet taste of alcohol... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540765",
                              "name": "Goose Island Bourbon County Barley Wine Abv 14.9",
                              "description": "Barleywine aged in 2nd use Bourbon Barrel that formerly housed Bourbon County Stout",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540766",
                              "name": "Goose Island Bourbon County Brand Stout 2013 Abv 14.9",
                              "description": "Bourbon County Brand Stout is meant to show our immense gratitude to our neighbors here in Chicago - the loyal and adventurous fans whose support helped bring Bourbon County Brand Stout to towering new heights... more",
                              "prices": [
                                "30.00"
                              ],
                              "price": "30.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540767",
                              "name": "Goose Island Bourbon County Stout Abv 14.9",
                              "description": "Brewed in honor of the 1000th batch at our original Clybourn brewpub. A liquid as dark and dense as a black hole with thick foam the color of a bourbon barrel. The nose is an intense mix of charred oak, chocolate, vanilla, caramel and smoke. One sip has more flavor than your average case of beer",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540768",
                              "name": "Goose Island Lolita Abv 8.2",
                              "description": "A very sophisticated Raspberry Belgian Ale. Fermented with brettanomyces (the little guys who give us that tart zing) and fresh raspberries, this brew is bright yet deep with spices and edges of the fruits natural tart quality to give it a white wine kind of finish... more",
                              "prices": [
                                "25.00"
                              ],
                              "price": "25.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540769",
                              "name": "Goose Island Matilda Abv 7.0",
                              "description": "Inspired by great Trappist ales, this complex Belgian Style Pale Ale is fermented with the wild yeast Brettanomyces. Matilda pours a golden sunrise color with dried fruit and clove aromas, a spicy yeast flavor, and a satisfying dry finish",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540770",
                              "name": "Goose Island Pepe Nero Abv 6.0",
                              "description": "A black rye saison that combines a roasted/smoky malt character in balance with a pepper spice from the yeast. Finishes dry with a refreshing level of carbonation",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540771",
                              "name": "Goose Island Sofie Abv 6.5",
                              "description": "Fermented with wild yeasts and aged in wine barrels with orange peel, Sofie is a tart, dry, sparkling ale... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540772",
                              "name": "Goose Island the Illinois Abv 9.0",
                              "description": "The first Imperial beer of the year is The Illinois, an Imperial IPA that pushes the limits of hop flavor and aroma. Deep gold, complex citrus aroma, balanced clean bitterness, medium to full body",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540773",
                              "name": "Gouden Carolus Hopsinjoor Abv 8.0",
                              "description": "Gouden Carolus Hopsinjoor completes the taste pallet of the gamma Carolus-beers... more",
                              "prices": [
                                "26.00"
                              ],
                              "price": "26.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540774",
                              "name": "Green's Discovery Amber Abv 6.0",
                              "description": "Medium-bodied with subtle caramel and nut flavor nuances. Refined, herbal hop aroma and finish",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540775",
                              "name": "Green's Endeavour Abv 7.0",
                              "description": "Naturally Gluten Free Double Dark Beer",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540776",
                              "name": "Green's Quest Triple Blonde Abv 8.5",
                              "description": "Green's Beer are brewed and bottled in Lochristi, Gent, Belgium. Green's Beers DO NOT contain any of the following: Wheat and/or Soya beans, Milk, Lactose, Nuts, Celery, Mustard, Sesame seeds, Sulphur Dioxide and Sulfites",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540777",
                              "name": "Hanssens Oude Kriek Abv 6.0",
                              "description": "This is the result of blending black cherries lambic of different ages followed by a second fermentation in the bottle. Storage is similar like geuze. All bottles are champagne corked and can be reserved, in normal conditions, for more than thirty years... more",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540778",
                              "name": "Heineken Abv 5.0",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540779",
                              "name": "Hitachino Nest Espresso Stout Abv 7.5",
                              "description": "Caramel, roasted, black and chocolate malts provide an explosion of coffee like flavors. The strong espresso character comes from the addition of espresso beans to the boil. Notes of vanilla, dark fruit , cocao and chocolate... more",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540780",
                              "name": "Jolly Pumpkin Bam Noire Abv 4.3",
                              "description": "One of Bam's brown eyes is, in fact, black. When mischief reigns supreme, it positively glows. Dedicated to the dark side; smooth, dark, incredibly delicious as only a Jack Russell with bat wings can be",
                              "prices": [
                                "20.00"
                              ],
                              "price": "20.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540781",
                              "name": "Kiuchi Hitachino Nest White Abv 5.5",
                              "description": "Hitachino Nest White Ale is brewed in the tradition of a Belgian style white beer with coriander, nutmeg, orange peel and orange juice. Malts: Lager, Wheat Hops: Perle, Styrian Golding Adjuncts: Flaked Wheat, Flaked Barley, Coriander, Nutmeg, Orange peel, Orange Juice Original Gravity: 1.06",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540782",
                              "name": "Kwak Abv 8.0",
                              "description": "Full-bodied Belgian Specialty Ale. Amber in color with beautiful foam and slightly sweet, seductive malt character. Rich, satisfying Belgian experience",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540783",
                              "name": "La Chouffe Dobbelen Abv 9.0",
                              "description": "A unique marriage between the English tradition of IPAs, the new American revolution of Imperial IPAs and the classic Belgian way of brewing... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540784",
                              "name": "La Fin Du Monde",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540785",
                              "name": "La Socarrada Abv 6.0",
                              "description": "La Socarrada is only made with water, malts, hops, high fermentation yeast, rosemary and rosemary honey",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540786",
                              "name": "La Trappe Quadrupel Abv 10.0",
                              "description": "The strongest of the special beers. Its flavor is full, mild and pleasantly bitter. Quadrupel is presently available in the autumn, is bottled by the year and is perfect company for those long winter evenings",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540787",
                              "name": "Lindeman's Framboise Abv 3.5",
                              "description": "Traditional spontaneously fermented Belgian Lambic with raspberries added. Tart and sweet fruit flavors with a touch of funk",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540788",
                              "name": "Magners Irish Cider Abv 4.5",
                              "description": "Commercial cider made with a controlled yeast then pasteurised and artificially carbonated. Sold as Bulmers in Ireland and as Magners in the rest of the world for legal reasons",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540789",
                              "name": "Maine Beer Mo Abv 6.5",
                              "description": "Our first run at an American Pale Ale. Flavors and aromas of zesty citrus, passion fruit, and pine present themselves throughout. A very subtle malt sweetness for balance, but this is intended to finish dry",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540790",
                              "name": "Maine King Titus Abv 7.5",
                              "description": "Our take on an American robust porter. Dark, thick, chewy, chocolaty, and of course, generously hopped. Vitals: Color - Dark Chocolate ABV - 7.5% O.G. - 1.078 Malt - American 2-Row, Caramel 40L, Caramel 80L, Munich 10L, Chocolate, Roasted Wheat, Flaked Oats Hops - Centennial, Columbus",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540791",
                              "name": "Meantime London Porter Abv 6.5",
                              "description": "A big beer, Porter was a fuel of the Industrial Revolution. It was also the world's first truly industrial product, that laid the foundations of the modern era of commerce, management and science. This was the beer that put the Great into Great Britain... more",
                              "prices": [
                                "25.00"
                              ],
                              "price": "25.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540792",
                              "name": "Nebraska Brewing Company Black Betty Reserve Series Russian Imperial Stout 2011 Abv 9.0",
                              "description": "Black as night and every bit Imperial, this RIS was originally launched to tremendous accolades. Going further, this Stranahan's Whiskey barrel aged version meshes the rich chocolates, the coffee-like aromatics with the sweet whiskey nose and drying character of the oak... more",
                              "prices": [
                                "27.00"
                              ],
                              "price": "27.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540793",
                              "name": "Nebraska Reserve Series Apricot Aupoivre Abv 6.8",
                              "description": "An artful interpretation of a Belgian-style Saison created with Apricot Puree and Black Pepper. Aged for 6 months in third-use French Oak Chardonnay barrels... more",
                              "prices": [
                                "48.00"
                              ],
                              "price": "48.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540794",
                              "name": "Nebraska Reserve Series Melange a Trois Abv 10.0",
                              "description": "Our first beer in the Reserve Series, Melange A Trois begins with a wonderfully big Strong Belgian-Style Blonde Ale and moves into the extraordinary category through an additional 6 month French Oak Chardonnay Wine Barrel maturation... more",
                              "prices": [
                                "48.00"
                              ],
                              "price": "48.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540795",
                              "name": "O'doul's Non-Alcoholic Abv 0.5",
                              "description": "O'Doul's is a premium non-alcoholic beer",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540796",
                              "name": "Ommegang Hennepin Farmhouse Saison Abv 7.7",
                              "description": "This style is a farmhouse ale, and is considered to be in the domain of the Belgian Saisons. Hennepin is a delicious brew for all seasons, it is spicy and refreshing... more",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540797",
                              "name": "Ommegang Hop House Abv 6.0",
                              "description": "Hop House pays homage to the historic hop farm that stood on the brewery grounds over 100 years ago. Hop House combines the delicious aromas and flavors of a Belgian-style ale with generous hopping, including dry-hopping... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540798",
                              "name": "Ommegang Rare Vos Abv 6.5",
                              "description": "Rare Vos is flemmish for \"Sly Fox,\" and the name of one of Brussels' great cafes. It has a sweetly fruity malt character and yeasty spiciness. A fine dose of yeast permits the beer to mature and mellow in the bottle",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540799",
                              "name": "Ommegang Three Philosophers Abv 9.8",
                              "description": "Cynics can't believe it, Epicures hail it a sensation, and Pythagoreans just can't add up what makes this luscious blend of rich malty ale and cherry lambic so delightful. It might be the flavor of dark chocolate and cherry cordials; it could be the way it acquires wisdom and grace in the cellar... more",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540800",
                              "name": "Ommegang Wild At Heart Abv 8.0",
                              "description": "Wild at Heart is an audacious new ale in our Brewermaster's Obession Series. In a rarely-employed technique we use only wild brettanomyces yeast in primary fermentation - the very heart of the beer... more",
                              "prices": [
                                "45.00"
                              ],
                              "price": "45.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540801",
                              "name": "Orval Abv 6.2",
                              "description": "In contrast to all the others, the Orval Trappist brewery makes only one beer for the general public. It has an intensely aromatic and dry character. Between the first and second fermentations there is also an additional dry-hopping process... more",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540802",
                              "name": "Perennial Heart of Gold Abv 10.0",
                              "description": "Heart of Gold is our Wheatwine, an American take on the classic Barleywine. Brewed to \"wine strength\" but with a malt bill full of wheat, Heart of Gold has a beautiful tawny color from its extended boil... more",
                              "prices": [
                                "28.00"
                              ],
                              "price": "28.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540803",
                              "name": "Perennial Vermilion Winter Ale Abv 10.5",
                              "description": "Dry-hopped American Red Ale aged on Cedar",
                              "prices": [
                                "28.00"
                              ],
                              "price": "28.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540804",
                              "name": "Rochefort Trappistes 10 Abv 11.3",
                              "description": "The top product from the Rochefort Trappist brewery. Dark color, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540805",
                              "name": "Rochefort Trappistes 6 2006 Abv 7.5",
                              "description": "The beer Trappistes Rochefort 6 starts from a density of 16,50 Plato to have a volume of alcohol of 7.5%. Its fine flavour makes it delicate to the palate! Oldest, brewed in a very empirical way until after the Second World war. Before 1958, conditioned only in 1/3 and 3/4 L bottles... more",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540806",
                              "name": "Rogue Chocolate Stout Abv 6.2",
                              "description": "The recipe for Rogue Chocolate Stout was created several years ago for export to Japan. The exported twelve ounce Chocolate Bear Beer bottle label is in Kanji and features a teddy bear with a pink heart on his belly... more",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540807",
                              "name": "Rogue Dead Guy Abv 6.6",
                              "description": "Dead Guy is a German-style Maibock made with Rogue's proprietary \"PacMan\" ale yeast. It is deep honey in color with a malty aroma, rich hearty flavor and a well balanced finish. Dead Guy is created from Northwest Harrington, Klages, Maier Munich and Carastan malts, along with Perle and Saaz Hops",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540808",
                              "name": "Schneider Aventinus Abv 8.2",
                              "description": "Dark ruby, glistening mysteriously, streaked with fine, top-fermented yeast, this beer has a compact, stable and long-lasting head. It has an intensive, typically top-fermented clove-like aroma... more",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540809",
                              "name": "Schneider Weisse Original Abv 5.4",
                              "description": "With its amber-mahogany coloring and streaked with fine top-fermented yeast, this beer has a fine, persistent head that adheres well to the glass. It is pleasantly fruity with a typical top-fermented smell, an aroma of clove and nutmeg apple tantalizes the nose... more",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540810",
                              "name": "Sierra Nevada/russian River Brux Domesticated Wild Ale Abv 8.3",
                              "description": "What began as mutual admiration between Sierra Nevada's Grossman Family and Russian River's Cilurzos has grown and progressed into genuine friendship. Brux began as an idea and has grown into something altogether different: The liquid manifestation of change over time... more",
                              "prices": [
                                "32.00"
                              ],
                              "price": "32.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540811",
                              "name": "Southern Tier Pumking Abv 8.6",
                              "description": "Brewed in the spirit of All Hallows Eve, a time of the year when spirits can make contact with the physical world and when magic is most potent. Pour Pumking into a goblet and allow it's alluring spirit to overflow... more",
                              "prices": [
                                "30.00"
                              ],
                              "price": "30.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540812",
                              "name": "Southern Tier Unearthly Ipa Abv 9.5",
                              "description": "An Uninhibited Infusion of Hops. We continue our commitment to innovation with our most aggressive offering yet Unearthly is a manifestation of the brewers crafts skillfully balancing art and the forces of nature to produce a divine liquid. Delicately pour a taste into a fluted glass... more",
                              "prices": [
                                "20.00"
                              ],
                              "price": "20.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540813",
                              "name": "Stone Cali-Belgique Ipa Abv 6.9",
                              "description": "When reading the name \"Stone Cali-Beligique IPA,\" \"Cali\" hints that it is a California-style IPA, and this brew has an undeniable Belgian influence, indicated by the word \"Belgique\" (which is how Belgium's French-speaking population says the word \"Belgian\"; the Dutch-speaking Belgians say \"Belgie... more",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540814",
                              "name": "The Bruery Oude Tart Abv 7.5",
                              "description": "Oude Tart is a Flemish-Style Red Ale aged in red wine barrels for 18 months. Pleasantly sour with hints of leather, dark fruit and toasty oak",
                              "prices": [
                                "48.00"
                              ],
                              "price": "48.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540815",
                              "name": "Timmermans Oude Gueuze Abv 5.5",
                              "description": "Timmermans Oude Gueuze's special flavour derives from its time-honoured method of preparation. It is a blend of old lambic, which has been aged for three years in wooden barrels, and young lambic which ensures spontaneous fermentation in the bottle... more",
                              "prices": [
                                "30.00"
                              ],
                              "price": "30.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540816",
                              "name": "Timmermans Oude Kriek Limited Edition Abv 5.5",
                              "description": "The combination of the taste of real lambic and cherry, long ago in \"Schaerbeek\" realized, is complemented by an amazing aroma: 34 old lambic is mixed with 14 lambic a younger generation of spontaneous fermentation This merger, which the natural acidity considering... more",
                              "prices": [
                                "32.00"
                              ],
                              "price": "32.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540817",
                              "name": "Tripel Karmeliet Abv 8.0",
                              "description": "Blond, robust, smooth, and fruity three grain top fermented beer, refermented in the bottle. Brewed with pride and patience after Karmeliet tradition with wheat, oat and barley",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540818",
                              "name": "Victory Helios Abv 7.5",
                              "description": "The radiant energy of the sun gives life to all that we enjoy. Flowing field of barley for malting, surging vines of ripening hops and even pure, clean water owe their vitality to the sun. Just as we do... more",
                              "prices": [
                                "15.00"
                              ],
                              "price": "15.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7482396",
                        "name": "Cans",
                        "entries": {
                          "count": 10,
                          "items": [
                            {
                              "entryId": "50540819",
                              "name": "Ballast Point Yellowtail Pale Ale Abv 4.6",
                              "description": "There's no wonder why our Pale Ale is so popularit is skillfully crafted in the style of the Kolsch beers of Cologne, Germany. We've chosen German hops for aroma, and rounded out the recipe with a blend of American and German malts... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540820",
                              "name": "Cigar City Brew Bus Are Wheat There Yet? Abv 5.0",
                              "description": "Aromas of citrus, wheat, light hops, and some light sweetness. Flavors are the same as aromas, a nice mixture of citrus, and wheat. Solid wheat beer",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540821",
                              "name": "Cigar City Florida Cracker Abv 5.5",
                              "description": "The Cracker Cowboys of Florida were colonial-era settlers, often of Scots-Irish descent, who arrived in Florida when Spain traded their territory of La Florida to the English... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540822",
                              "name": "Cigar City Jai Alai Ipa Abv 7.5",
                              "description": "Jai Alai India Pale Ale pays tribute to the original extreme sport. Jai Alai, a game native to the Basque region of Spain, is played on a court called a fronton... more",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540823",
                              "name": "Cigar City Maduro Brown Ale Abv 5.5",
                              "description": "A hearty brown ale that benefits from the silky mouthfeel provided by oatmeal, pairs great with Cigars",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540824",
                              "name": "Goose Island 312 Urban Wheat Ale Abv 4.2",
                              "description": "Inspired by the city of Chicago and densely populated with flavor, 312's spicy aroma of Cascade hops is followed by a crisp, fruity ale flavor delivered in a smooth, creamy body that's immensely refreshing",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540825",
                              "name": "Harpoon Ufo White Abv 4.8",
                              "description": "Light, crisp, refreshing UFO White follows in the tradition of spiced wheat beers that have been brewed in Belgium for well over 300 years... more",
                              "prices": [
                                "7.00"
                              ],
                              "price": "7.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540826",
                              "name": "Lion Lager Abv 4.8",
                              "description": "We've been brewing Lion Lager in Sri Lanka since 1881. Lion Lager is made from the very best ingredients - it's malty, refreshing, and natural tasting. This is a beer of character for people of character",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540827",
                              "name": "Martens Witte Abv 4.8",
                              "description": "This classic example of a Belgian Witte is a style mastered by few breweries. The perfect summer beer, Witte is spiced with coriand",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "50540828",
                              "name": "Wells and Youngs Double Chocolate Stout Abv 5.8",
                              "description": "Luxurious and at the same time with a hint of decadence, Young's Double Chocolate Stout has it all, delivering a satisfying, indulgent taste without ever becoming overly sweet... more",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "menuId": "mnnc3oycwu67x6zyv5x2p7jsu",
                  "name": "Main Menu",
                  "description": "",
                  "entries": {
                    "count": 10,
                    "items": [
                      {
                        "sectionId": "s7101090",
                        "name": "Starters",
                        "entries": {
                          "count": 15,
                          "items": [
                            {
                              "entryId": "48199711",
                              "name": "Spinach & Artichoke Dip*",
                              "description": "Mixed corn tortillas, grilled pita points",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199712",
                              "name": "Ale Fried Calamari",
                              "description": "Baby arugula, lemon garlic aioli",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199713",
                              "name": "Chicken Wings (8)",
                              "description": "Stout BBQ, buffalo or habanero coffee BBQ",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199714",
                              "name": "Pierogies (5) *",
                              "description": "Potato & cheddar, ale caramelized onions truffle sour cream",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199715",
                              "name": "Deviled Eggs (6)",
                              "description": "Topped with crispy bacon bits and cayenne pepper",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199716",
                              "name": "Buttermilk Chicken Tenders (5)",
                              "description": "Honey mustard or buffalo sauce",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199717",
                              "name": "Smothered Tots",
                              "description": "Cheddar cheese, bacon bits, sour cream, gravy",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199718",
                              "name": "Hummus",
                              "description": "Mesclun, roasted tomato, grilled pita points, carrots, roasted red pepper & garlic hummus, celery, balsamic vinaigrette",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743424",
                              "name": "Potato Skin Egg Rolls (2)",
                              "description": "Mashed potato, cheddar cheese, scallions, bacon, sour cream",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199720",
                              "name": "Provolone Sticks (5) *",
                              "description": "Fried sharp provolone served with marinara",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199721",
                              "name": "Fish Tacos (2) *",
                              "description": "Fresh cabbage slaw, lime crema, salsa fresca, queso fresco, grilled mahi-mahi, avocado",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199719",
                              "name": "Three Cheese Quesadillas*",
                              "description": "Monterey jack, pepper jack & cheddar",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199722",
                              "name": "Hand Rolled Pretzels Sticks (2) *",
                              "description": "Cheese sauce",
                              "prices": [
                                "9.00"
                              ],
                              "price": "9.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199723",
                              "name": "Beer Authority Nachos",
                              "description": "Cheddar & jack cheese, queso fresco, jalapenos, salsa fresca, sour cream, cheese sauce, guacamole",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199724",
                              "name": "Fried Thick Cut Bacon (2)",
                              "description": "Glazed with sweet chili sriracha sauce",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s12001255",
                        "name": "Oysters",
                        "description": "Available every day for $2 ea. Wednesday special",
                        "entries": {
                          "count": 1,
                          "items": [
                            {
                              "entryId": "76743425",
                              "name": "Oysters",
                              "description": "Served with cucumber lime mignonette and cocktail sauce",
                              "prices": [
                                "1.50"
                              ],
                              "price": "1.50",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s12001256",
                        "name": "Combo Platter",
                        "description": "$40. pick any 4 appetizers. Add ons extra",
                        "entries": {
                          "count": 2,
                          "items": [
                            {
                              "entryId": "76743426",
                              "name": "Meat and Cheese Platter",
                              "description": "Served with bread, olives and apricot. Chef's selection, ask your server",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743427",
                              "name": "Chicken Wing Platter",
                              "description": "Stout BBQ, buffalo, or habanero coffee BBQ",
                              "prices": [
                                "50.00"
                              ],
                              "price": "50.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101091",
                        "name": "Sliders",
                        "description": "3/$12, 6/$20, 18/$55. All served with fries",
                        "entries": {
                          "count": 3,
                          "items": [
                            {
                              "entryId": "48199726",
                              "name": "Classic",
                              "description": "American cheese, pickle chip",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199727",
                              "name": "Hell's Kitchen",
                              "description": "Gyro spiced ground lamb, tzatziki, feta cheese, pickle chip",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199728",
                              "name": "Cuban",
                              "description": "Roast pork, swiss cheese, pickle, mustard, ham",
                              "prices": [],
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101092",
                        "name": "Serious Salads",
                        "description": "Dressings: balsamic vinaigrette, ranch, blue cheese, caesar, lemon vinaigrette. Add grilled chicken: $3 | salmon $5 | NY strip $6",
                        "entries": {
                          "count": 4,
                          "items": [
                            {
                              "entryId": "48199730",
                              "name": "Kale Caesar",
                              "description": "Kale, cherry tomatoes, garlic croutons, parmesan cheese, ceasar dressing",
                              "prices": [
                                "11.00"
                              ],
                              "price": "11.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199731",
                              "name": "Roasted Beet Salad*",
                              "description": "Mixed greens, goat cheese, toasted almonds, lemon vinaigrette",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199732",
                              "name": "Cobb",
                              "description": "Romaine, bacon bits, crumbled blue cheese, avocado, tomato, eggs, ranch dressing",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199733",
                              "name": "Apple Walnut*",
                              "description": "Mesclun, granny smith apples, goat cheese, cranberry, candied walnuts, balsamic vinaigrette",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101093",
                        "name": "Burgers & Sandwiches",
                        "description": "All served with fries",
                        "entries": {
                          "count": 12,
                          "items": [
                            {
                              "entryId": "76743428",
                              "name": "Classic Burger",
                              "description": "Beef, lettuce, tomato, red onions, pickle chips",
                              "prices": [
                                "12.00"
                              ],
                              "price": "12.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743429",
                              "name": "Hell's Kitchen Burger",
                              "description": "Gyro spiced lamb, tzatziki, feta cheese, lettuce, tomato, red onions, pickle chips",
                              "prices": [
                                "15.00"
                              ],
                              "price": "15.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743430",
                              "name": "Authority Patty Melt",
                              "description": "Chipotle gouda, ale caramelized onions, bacon, tomato, horseradish ranch, texas toast",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199737",
                              "name": "Turkey Burger",
                              "description": "Swiss, cranberry chutney, arugula",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199736",
                              "name": "Ba Founder's Burger",
                              "description": "Beef cooked in Founder's porter",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199735",
                              "name": "Spicy Bbq Burger",
                              "description": "Habanero coffee BBQ sauce, bacon, pepper jack cheese, avocado and crispy shallots",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199738",
                              "name": "Falafel Burger*",
                              "description": "Topped with tahini yogurt, lettuce, tomato, pickle and onion",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199739",
                              "name": "Cuban Sandwich",
                              "description": "Roast pork, swiss cheese, pickle, mustard, ham, mojo sauce",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743431",
                              "name": "Chicken Blt Wrap",
                              "description": "Grilled chicken, bacon, bibb lettuce, avocado, grilled tomato",
                              "prices": [
                                "13.00"
                              ],
                              "price": "13.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743432",
                              "name": "Fried Chicken Sandwich",
                              "description": "Sesame soy ginger slaw, lettuce, tomato, avocado, sriracha mayo, spicy bacon",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743433",
                              "name": "Short Rib Grilled Cheese",
                              "description": "Ale caramelized onions, mushrooms, porter cheddar, short rib",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743434",
                              "name": "Roast Beef Sandwich",
                              "description": "Garlic bread, thinly sliced roast beef, bacon, gravy",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101117",
                        "name": "Entrees",
                        "entries": {
                          "count": 6,
                          "items": [
                            {
                              "entryId": "48199888",
                              "name": "40Th Street Shepherd's Pie",
                              "description": "Beer braised ground beef, vegetables, cheddar mashed potato",
                              "prices": [
                                "17.00"
                              ],
                              "price": "17.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199889",
                              "name": "8Th Av Fish & Chips",
                              "description": "Ale battered cod, coleslaw, fries, tartar sauce",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199890",
                              "name": "Roast Chicken",
                              "description": "Sauteed spinach, roasted tomatoes, mashed potatoes & gravy",
                              "prices": [
                                "16.00"
                              ],
                              "price": "16.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199891",
                              "name": "West Salmon",
                              "description": "Soy ginger salmon with stir fried vegetables",
                              "prices": [
                                "20.00"
                              ],
                              "price": "20.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199893",
                              "name": "Ny Strip",
                              "description": "12 ounce NY strip, rosemary garlic fingerling potatoes, grilled asparagus, mushroom stout cream sauce, mashed potatoes",
                              "prices": [
                                "32.00"
                              ],
                              "price": "32.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199892",
                              "name": "Pork Tenderloin",
                              "description": "Roasted pork tenderloin, sautéed kale, cranberries, almonds, sweet potato hash, applesauce",
                              "prices": [
                                "20.00"
                              ],
                              "price": "20.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101119",
                        "name": "Pizzas",
                        "entries": {
                          "count": 7,
                          "items": [
                            {
                              "entryId": "48199902",
                              "name": "Grandma*",
                              "description": "Mozzarella, roasted garlic, basil, marinara",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199903",
                              "name": "Meat Lovers",
                              "description": "Sweet italian sausage, pepperoni, bacon, short rib, mozzarella, marinara",
                              "prices": [
                                "18.00"
                              ],
                              "price": "18.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199905",
                              "name": "Cuban",
                              "description": "Roast pork, ham, swiss cheese, pickle, mustard, roasted garlic",
                              "prices": [
                                "15.00"
                              ],
                              "price": "15.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199904",
                              "name": "Veggie*",
                              "description": "Mozzarella, roasted peppers, ale caramelized onions, mushrooms, baby arugula",
                              "prices": [
                                "14.00"
                              ],
                              "price": "14.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199907",
                              "name": "Buffalo",
                              "description": "Grilled chicken, buffalo sauce, blue cheese crumbles, cheddar, monterey jack",
                              "prices": [
                                "15.00"
                              ],
                              "price": "15.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199906",
                              "name": "Bbq",
                              "description": "Stout BBQ sauce, pulled pork, cheddar, monterey jack",
                              "prices": [
                                "15.00"
                              ],
                              "price": "15.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743435",
                              "name": "Build Your Own Pizza",
                              "description": "Mozzarella / cheddar / pepper jack / sausage / pepperoni / grilled chicken / bacon / short rib / pulled pork / roasted peppers / onions / mushrooms / jalapeños",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101118",
                        "name": "Sides",
                        "description": "$5. Substitutions or add ons are an additional charge",
                        "entries": {
                          "count": 9,
                          "items": [
                            {
                              "entryId": "48199894",
                              "name": "Old Bay Seasoned Fries",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199895",
                              "name": "Tater Tots",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199896",
                              "name": "Mashed Potato",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743436",
                              "name": "Sweet Potato Fries",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199897",
                              "name": "Mac \"N\" Cheese",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199898",
                              "name": "Grilled Asparagus",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199900",
                              "name": "Rosemary Garlic Fingerling Potatoes",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199901",
                              "name": "Stout Chili",
                              "prices": [],
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199899",
                              "name": "Mixed Vegetables",
                              "prices": [],
                              "options": [],
                              "additions": []
                            }
                          ]
                        }
                      },
                      {
                        "sectionId": "s7101120",
                        "name": "Desserts",
                        "entries": {
                          "count": 6,
                          "items": [
                            {
                              "entryId": "76743437",
                              "name": "Carrot Cake",
                              "description": "Cream cheese icing with walnuts and raisins",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199908",
                              "name": "Cookie Sandwich",
                              "description": "Salted caramel white chocolate pretzel | cookie served with chocolate ice cream",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199909",
                              "name": "Cherry Cobbler",
                              "description": "Cherries, crunchy streusel topping, vanilla ice cream",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "48199910",
                              "name": "Nutella Donuts (3)",
                              "description": "House made donuts stuffed with nutella & topped with cinnamon sugar",
                              "prices": [
                                "8.00"
                              ],
                              "price": "8.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743438",
                              "name": "Root Beer Float",
                              "prices": [
                                "6.00"
                              ],
                              "price": "6.00",
                              "options": [],
                              "additions": []
                            },
                            {
                              "entryId": "76743439",
                              "name": "Not Your Father's Root Beer Foat (Alcoholic)",
                              "prices": [
                                "10.00"
                              ],
                              "price": "10.00",
                              "options": [],
                              "additions": []
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

    delete dummy[0].meta;
    delete dummy[0].response.menu.provider;
    var menus = dummy[0].response.menu.menus.items;
    for(var i=0; i<menus.length; i++){
      var menu_name = menus[i].name.toLowerCase();
      delete menus[i].menuId;
      delete menus[i].description;
      if(menu_name.includes('spirit') || menu_name.includes('beer') || menu_name.includes('wine') || menu_name.includes('whiskey')){
        delete menus[i];
      }
    }

    res.send(dummy[0].response.menu.menus.items);
  }

};
