import * as mysql from 'mysql';
declare var require;

const config = require('../config/dbconfig.json');

export class ConnectDB {
  public connection;
  
  constructor() {
    this.connection = mysql.createConnection(config);
    this.connection.connect((err) => {
      if (err) {
        return;
      }
    });
  }
}
