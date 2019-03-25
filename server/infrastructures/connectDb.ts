import {createConnection, MysqlError} from 'mysql';
import {Utils} from '../utils/utils';
import {CustomError} from '../domain/model/CustomError';

// declare var require;
// const config = require('../config/dbconfig_.json');
const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
};

export class ConnectDB {
  private connection;

  constructor() {
    this.connection = createConnection(config);
    this.connection.connect((err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  /**
   * クエリ実行
   * @param sql 実行するSQL
   * @param args パラメータ
   */
  public query(sql: string, args?: Array<any>): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      if (Utils.isDefinedArray(args)) {
        this.connection.query(sql, args,
          (err: MysqlError, result: Array<any>) => {
            if (err) {
              reject(new CustomError(err.sqlMessage, err.errno));
            }
            // 結果がなければエラー
            if (result.length === 0) {
              reject(new CustomError('Not Found', 404));
            }
            resolve(result);
          }
        );
      } else {
        this.connection.query(sql, (err: MysqlError, result: Array<any>) => {
            if (err) {
              reject(new CustomError(err.sqlMessage, err.errno));
            }
            // 結果がなければエラー
            if (result.length === 0) {
              reject(new CustomError('Not Found', 404));
            }
            resolve(result);
          }
        );
      }
    });
  }
}
