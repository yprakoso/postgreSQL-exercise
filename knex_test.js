const pg = require("pg");
const settings = require("./settings"); // settings.json
const myArg = process.argv.slice(2);

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

knex.select().from('famous_people').then(function(rows) {
  console.log(rows);
}).finally(function(){
  knex.destroy();
});