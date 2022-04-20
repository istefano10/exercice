const util = require('util');
var mysql = require('mysql2');
var dbconfig = require('../config/database');

var conn = mysql.createConnection(dbconfig.connection);
const query = util.promisify(conn.query).bind(conn);

query('USE ' + dbconfig.database);

// List all jokes
var listJokes = async () => {
  try {
    const rows = await query('SELECT * FROM jokes')
    return rows;
  } catch (err) {
    console.log(err);
  }
};

// Get joke by id
var getJokeById = async (id) => {
  try {
    const rows = await query('SELECT * FROM jokes WHERE id=' + id)
    return rows;
  } catch (err) {
    console.log(err);
  }
}

// Get random joke
var getRandomJoke = async () => {
  try {
    const rows = await query('SELECT * FROM jokes ORDER BY RAND() LIMIT 1')
    return rows;
  } catch (err) {
    console.log(err);
  }
}


export { listJokes, getJokeById, getRandomJoke };
