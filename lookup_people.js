const pg = require("pg");
const settings = require("./settings"); // settings.json
const myArg = process.argv.slice(2);

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const q = `
    SELECT *
    FROM famous_people
    WHERE first_name IN ($1)
  `;

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(q, myArg, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].first_name + ' ' + result.rows[0].last_name); //output: 1
    client.end();
  });
});