import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Functions} from '../common/utils';
import * as ifs from '../common/interfaces';

export namespace URL {
  export const artsInfo = 'assets/artsInfo.json';
  export const character = 'api/character';
  export const login = 'api/login';
  export const user = 'api/user';
}

@Injectable()
export class DbService {
  private readonly header;

  constructor(private http: HttpClient) {
    this.header = {'content-type': 'application/json'};
  }

  /**
   * 忍法取得Service
   */
  public getArtsData(): Observable<ifs.IArtsInfo> {
    return this.http.get<ifs.IArtsInfo>(URL.artsInfo);
  }

  /**
   * キャラクタ一覧取得
   */
  public getCharacterData(param?: string): Observable<Array<object>> {
    const params = {name: ''};
    if (Functions.isDefined(param) && typeof param === 'string') {
      params.name = param;
    }

    return this.http.get<Array<object>>(URL.character, {headers: this.header});
  }

  /**
   * キャラクター登録
   * @param data 登録するキャラクターデータ
   */
  public insertData(data: any): Observable<object> {
    return this.http.post(URL.character, data, {headers: this.header});
  }

  /**
   * ログイン処理
   * @param id ユーザID
   * @param pass パスワード
   */
  public postLogin(id: string, pass: string): Observable<object> {
    const param = {
      id: id,
      password: pass
    };
    return this.http.post(URL.login, param, {headers: this.header});
  }

  /**
   * ユーザ登録
   * @param id ユーザID
   * @param password パスワード
   */
  public userRegister(id: string, password: string): Observable<object> {
    const param = {
      userId: id,
      password: password
    };
    return this.http.post(URL.user, param, {headers: this.header});
  }

  /**
   * ユーザ重複チェック
   * @param id ユーザID
   */
  public duplicateUserCheck(id: string) {
    return this.http.get<boolean>(`${URL.user}/${id}`, {headers: this.header});
  }
}
