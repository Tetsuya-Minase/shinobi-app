import {ConnectDB} from './connectDb';

export class CharacterRepository {
  private connect: ConnectDB;

  constructor() {
    this.connect = new ConnectDB();
  }

  /**
   * 指定したユーザIDに紐づくキャラクター取得
   * @param userId ユーザID
   */
  public async getCharacterByUserId(userId: string) {
    const sql = 'select * from character_data where user_id = ?';
    try {
      return await this.connect.query(sql, [userId]);
    } catch (error) {
      throw error;
    }
  }

  /**
   * キャラクター全件取得
   */
  public async getAllCharacter() {
    const sql = 'select * from character_data';
    try {
      return await this.connect.query(sql);
    } catch (error) {
      throw error;
    }
  }

  /**
   * キャラクターデータ登録
   * @param character 登録データ
   */
  public async registerCharacter(character: any) {
    const sql = 'insert into character_data set ?';

    try {
      return await this.connect.query(sql, [character]);
    } catch (error) {
      throw error;
    }
  }
}
