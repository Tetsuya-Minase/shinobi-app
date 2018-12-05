const mysql = require('mysql');
const config = require('../config/dbconfig.json');

const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected!');
});

module.exports = connection;
