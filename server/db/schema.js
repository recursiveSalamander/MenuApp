var path = require('path');
if(!process.env.DOMAIN) {
  console.log('inside line 3 if statement schema.js');
  var config = require('./config/config.js');
  console.log(config);
}
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DOMAIN || config.database.domain,
    user: process.env.USERNAME || config.database.username,
    password: process.env.PASSWORD || config.database.password,
    database: process.env.DATABASE || config.database.database,
    charset: process.env.CHARSET || config.database.charset
  }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
var db = bookshelf;

//table containing information user enters when signing up
var users = function() {
  db.knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('users', function(user) {
        user.increments('id').primary();
        user.string('first_name', 30);
        user.string('last_name', 30);
        user.string('email', 30).unique();
        user.string('password', 252);
        user.string('username', 30).unique();
        user.string('diet', 30).defaultTo('none');
      }).then(function(){
        console.log('users table has been created');
      });
    }
  });
};

var userPreferences = function() {
  db.knex.schema.hasTable('user_preferences').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('user_preferences', function(preference) {
        preference.increments('id').primary();
        preference.string('ingredient', 50);
        // relation contains whether an ingredient is liked, disliked, or an allergy
        preference.string('relation', 50);
        preference.integer('user_id').unsigned();
        preference.foreign('user_id').references('id').inTable('users');
      }).then(function() {
        console.log('user_preferences table has been created');
      });
    }
  });
};

var userTastes = function() {
  db.knex.schema.hasTable('user_tastes').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('user_tastes', function(taste) {
        taste.increments('id').primary();
        taste.integer('spicy');
        taste.integer('meaty');
        taste.integer('sour');
        taste.integer('sweet');
        taste.integer('salty');
        taste.integer('bitter');
        taste.integer('user_id').unsigned();
        taste.foreign('user_id').references('id').inTable('users');
      }).then(function() {
        console.log('tastes table has been created');
      });
    }
  });
};

var nutritionRestrictions = function() {
  db.knex.schema.hasTable('nutrition_restrictions').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('nutrition_restrictions', function(restriction) {
        restriction.increments('id').primary();
        restriction.string('type', 30);
        restriction.integer('min');
        restriction.integer('max');
        restriction.integer('user_id').unsigned();
        restriction.foreign('user_id').references('id').inTable('users');
      }).then(function() {
        console.log('nutrition_restrictions table has been created');
      });
    }
  });
};

var cuisinePreferences = function() {
  db.knex.schema.hasTable('cuisine_preferences').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('cuisine_preferences', function(preference) {
        preference.increments('id').primary();
        preference.string('origin', 50);
        preference.integer('preference_level');
        preference.integer('user_id').unsigned();
        preference.foreign('user_id').references('id').inTable('users');
      }).then(function() {
        console.log('cuisine_preferences table has been created');
      });
    }
  });
};

var restaurants = function() {
  db.knex.schema.hasTable('restaurants').then(function(exists) {
    if(!exists) {
      knex.schema.createTable('restaurants', function(restaurant) {
        restaurant.increments('id').primary();
        restaurant.string('restaurant_id', 50);
      }).then(function() {
        console.log('restaurants table has been created');
      });
    }
  });
};

var menuItems = function() {
  db.knex.schema.hasTable('menu_items').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('menu_items', function(menuitems) {
        menuitems.increments('id').primary();
        menuitems.string('item', 50);
        menuitems.integer('restaurant').unsigned();
        menuitems.foreign('restaurant').references('id').inTable('restaurants');
      }).then(function() {
        console.log('menu_items table has been created');
      });
    }
  });
};

var itemRatings = function() {
  db.knex.schema.hasTable('item_ratings').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('item_ratings', function(rating) {
        rating.increments('id').primary();
        rating.integer('rating');
        rating.integer('user_id').unsigned();
        rating.foreign('user_id').references('id').inTable('users');
        rating.integer('item_id').unsigned();
        rating.foreign('item_id').references('id').inTable('menu_items');
      }).then(function() {
        console.log('item_ratings table has been created');
      });
    }
  });
};


users();
userPreferences();
userTastes();
nutritionRestrictions();
cuisinePreferences();
restaurants();
menuItems();
itemRatings();

module.exports.bookshelf = bookshelf;
