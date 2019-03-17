import {ConnectionConfig, createConnection, MysqlError} from 'mysql';
import {Utils} from '../utils/utils';
import {CustomError} from '../domain/model/CustomError';

declare var require;
const config = require('../config/dbconfig.json');

export class ConnectDB {
  private connection;

  constructor() {
    this.connection = createConnection(config);
    this.connection.connect((err) => {
      if (err) {
        console.log(err);
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
