import {Connection, createConnection, format, MysqlError} from 'mysql';
import {CustomError} from '../domain/custom.error';
import {Utils} from '../utils/utils';
import {Injectable} from '@nestjs/common';

// declare var require;
// const config = {
//   user: process.env.SQL_USER,
//   password: process.env.SQL_PASSWORD,
//   database: process.env.SQL_DATABASE,
//   socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
// };
const config = {
  user: 'trpguser',
  password: 'p94C2-rT',
  database: 'trpgdb',
  host: '35.226.231.219'
};

@Injectable()
export class ConnectDb<T> {
  private connection: Connection;

  constructor() {
    this.connection = createConnection(config);
    this.connection.connect((err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  public findAll(table: string): Promise<T[]> {
    const sql = `select * from ${table}`;
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err: MysqlError, result: T[]) => {
          if (err) {
            reject(new CustomError(err.sqlMessage, err.errno));
          }
          // 結果がなければエラー
          if (Utils.isDefinedArray(result)) {
            reject(new CustomError('Not Found', 404));
          }
          resolve(result);
        }
      );
    });
  }

  public findById(table: string, id: string, args: Array<unknown>): Promise<T> {
    const sqlTemplate = `select * from ${table} where ${id} = ?`;
    const sql = format(sqlTemplate, args);
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: MysqlError, result: T) => {
          if (err) {
            reject(new CustomError(err.sqlMessage, err.errno));
          }
          // 結果がなければエラー
          if (Utils.isDefined(result)) {
            reject(new CustomError('Not Found', 404));
          }
          resolve(result);
        }
      );
    });
  }

  public register(table: string, args: Array<unknown>): Promise<T> {
    const sql = `insert into ${table} set ?`;
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: MysqlError, result: T) => {
          if (err) {
            reject(new CustomError(err.sqlMessage, err.errno));
          }
          resolve(result);
        }
      );
    });
  }

  public update(table: string, id: string, args: Array<unknown>): Promise<T> {
    const sql = `update ${table} set ? where ${id} = ?`;
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: MysqlError, result: T) => {
          if (err) {
            reject(new CustomError(err.sqlMessage, err.errno));
          }
          resolve(result);
        }
      );
    });
  }
}
