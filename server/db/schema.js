if(!process.env.DOMAIN){
  var config = require('./config/config.js')
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

var db = bookshelf;

db.knex.schema.hasTable('users').then(function(exists){
  if(!exists){
    knex.schema.createTable('users', function(user){
      user.increments('id').primary();
      user.string('first name', 30);
      user.string('last name', 30);
      user.string('email', 30).unique();
      user.string('password', 30).unique();
      user.string('username', 30).unique();
    }).then(function(){
      console.log('table has been created');
    })
  }
})
