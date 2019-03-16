import {ConnectDB} from './connectDb';

export class UserRepository {
  private connect: ConnectDB;

  constructor() {
    this.connect = new ConnectDB();
  }

  /**
   * ユーザ重複チェック
   *
   * @param userId ユーザID
   */
  public async checkDuplicateUser(userId: string) {
    const sql = 'select count(*) as "count" from user where user_id = ?';
    try {
      return await this.connect.query(sql, [userId]);
    } catch (error) {
      throw error;
    }
  }

  /**
   * ユーザ登録
   * @param user ユーザ情報
   */
  public async registerUser(user: any) {
    const sql = 'insert into user set ?';
    try {
      return await this.connect.query(sql, [user]);
    } catch (error) {
      throw error;
    }
  }

  /**
   * ユーザ削除
   * @param userId ユーザID
   */
  public async deleteUser(userId: string) {
    const sql = 'delete from user where user_id = ?';
    try {
      return await this.connect.query(sql, [userId]);
    } catch (error) {
      throw error;
    }
  }
}
