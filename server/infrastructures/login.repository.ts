import {ConnectDB} from './connectDb';
import {CustomError} from '../domain/model/CustomError';

export class LoginRepository {
  private connect: ConnectDB;

  constructor() {
    this.connect = new ConnectDB();
  }

  /**
   * ログイン処理
   * @param id ユーザID
   * @param pass パスワード
   */
  public async checkLogin(id: string, pass: string) {
    const sql = 'select * from user where user_id = ? and password = ?';
    // @ts-ignore
    try {
      return await this.connect.query(sql, [id, pass]);
    } catch (error) {
      throw error;
    }
  }
}
