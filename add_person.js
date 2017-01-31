const pg = require("pg");
const settings = require("./settings"); // settings.json
const myArg = process.argv.slice(2);
var firstName = myArg[0];
var lastName = myArg[1];
var birth = myArg[2];

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

knex.insert([{first_name: firstName, last_name: lastName, birthdate: birth}]).into('famous_people').then(function(rows) {
  console.log("insert success!");
}).finally(function(){
  knex.destroy();
});
