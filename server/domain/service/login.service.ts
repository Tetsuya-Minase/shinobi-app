import {LoginRepository} from '../../infrastructures/login.repository';

export class LoginService {
  private repository: LoginRepository;

  constructor() {
    this.repository = new LoginRepository();
  }

  /**
   * ログイン処理
   * @param id ユーザID
   * @param pass パスワード
   */
  public async checkLogin(id: string, pass: string) {
    try {
      return await this.repository.checkLogin(id, pass);
    } catch (error) {
      throw error;
    }
  }
}
