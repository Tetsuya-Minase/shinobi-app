import {UserRepository} from '../../infrastructures/user.repository';

export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  /**
   * ユーザ重複チェック
   * @param userId ユーザID
   */
  public async checkDuplicateUser(userId: string) {
    try {
      return await this.repository.checkDuplicateUser(userId);
    } catch (error) {
      throw error;
    }
  }

  /**
   * ユーザ情報登録
   * @param userId ユーザID
   * @param password パスワード
   */
  public async registerUser(userId: string, password: string) {
    const user = {
      user_id: userId,
      password: password,
      create_date: new Date(),
      last_modified: new Date(),
    };
    try {
      return this.repository.registerUser(user);
    } catch (error) {
      throw error;
    }
  }

  /**
   * ユーザ削除
   * @param userId ユーザID
   */
  public async deleteUser(userId: string) {
    try {
      return this.repository.deleteUser(userId);
    } catch (error) {
      throw error;
    }
  }
}
