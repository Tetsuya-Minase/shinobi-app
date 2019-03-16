import {ConnectDB} from './connectDb';

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
    const sql = 'select count(*) as "count" from user where user_id = ? and password = ?';
    try {
      return this.connect.query(sql, [id, pass]);
    } catch (error) {
      throw error;
    }
  }
}
