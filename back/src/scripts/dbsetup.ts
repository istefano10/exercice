var mysql    = require('mysql2');
const jokeExamples = require('../examples/jokes.examples.ts')
var dbconfig = require('../config/database');

// Script for setting up database and tables
var conn = mysql.createConnection(dbconfig.connection);

conn.query('CREATE DATABASE ' + dbconfig.database);


setTimeout(() => {
  // Set up jokes table
  conn.query('\
    CREATE TABLE `' + dbconfig.database + '`.`jokes` ( \
      `id` INT NOT NULL PRIMARY KEY, \
      `type` VARCHAR(255) NOT NULL, \
      `setup` VARCHAR(255) NOT NULL, \
      `punchline` VARCHAR(255) NOT NULL \
    )');
  
  conn.query('USE ' + dbconfig.database, function() {
    console.log('Using database:', dbconfig.database)
  });
  
  console.log('Success! Database created.');
  jokeExamples.forEach(joke => {
    conn.query(`INSERT INTO jokes (id,type,setup,punchline) VALUES (${joke.id},"${joke.type}","${joke.setup}","${joke.punchline}");`, function() {
      setTimeout(() => {
        console.log('Created joke', joke.id +','+ joke.type +','+ joke.setup +','+ joke.punchline)
      }, 200);
    });
  });
  conn.end();
}, 2000);

