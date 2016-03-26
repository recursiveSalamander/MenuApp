var fs = require('fs');
var _ = require('lodash');

// Utility to help format JSON data for use in Preference Survey

fs.readFile('../client/assets/dishes.json', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  var dishes = JSON.parse(data);

  formatData(dishes);
});

function formatData(data) {
  populateWithArrays(data.choices);
  populateWithArrays(data.storage);

  addRelatedCuisines(data.choices, data.cuisines);
  addRelatedCuisines(data.storage, data.cuisines);

  writeData(JSON.stringify(data));
}

function writeData(data) {
  fs.writeFile('../client/assets/dishes.json', data, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function populateWithArrays(dishes) {
  _(dishes).forEach(function(dish) {
    dish.relatedCuisines = [];
  });
}

function addRelatedCuisines(dishes, cuisineList) {
  _(dishes).forEach(function(dish) {
    _(cuisineList).forEach(function(ingredients, cuisine) {
      if (findMatch(dish.ingredients, ingredients)) {
        if (cuisine !== dish.cuisine) {
          dish.relatedCuisines.push(cuisine);
        }
      }
    });
  });
}

function findMatch(needles, haystack) {
  return needles.some(function (needle) {
    return haystack.indexOf(needle) >= 0;
  });
}
