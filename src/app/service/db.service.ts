import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as ifs from '../common/interfaces';

export namespace URL {
  export const artsinfo = 'assets/artsinfo.json';
  export const character = 'api/character';
  export const login = 'api/login';
  export const user = 'api/user';
}

@Injectable()
export class DbService {
  private serverFlg: boolean;
  private header;

  constructor(private http: HttpClient) {
    const port = location.port;
    if (port === '4200') {
      this.serverFlg = false;
    } else if (port === '3000') {
      this.serverFlg = true;
    } else {
      console.log(port);
    }
    this.header = { 'content-type': 'appication/json' }
  }

  /**
   * 忍法取得Service
   */
  public getArtsData(): Observable<ifs.IArtsInfo> {
    return this.http.get<ifs.IArtsInfo>(URL.artsinfo);
  };

  /**
   * キャラクタ一覧取得
   */
  public getCharacterData(param?: string): Observable<Array<object>> {
    const url = '/api/charactor';
    let opt = { name: '' }

    console.log(`param:${param}`);
    if (param && typeof param === 'string') {
      opt.name = param;
    }
    return this.http.get<Array<object>>(URL.character, { headers: this.header, params: opt });
  }

  /**
   * キャラクター登録
   * @param data 
   */
  public insertData(data: any): Observable<object> {
    console.log('data:', data);
    return this.http.post(URL.character, data);
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
    return this.http.post(URL.login, param);
  }

  /**
   * ユーザ登録
   * @param id ユーザID
   * @param pass パスワード
   */
  public userRegister(id: string, password: string): Observable<object> {
    const param = {
      userId: id,
      password: password
    }
    return this.http.post(URL.user, param);
  }

  /**
   * ユーザ重複チェック
   * @param id ユーザID
   */
  public duplicateUserCheck(id: string) {
    return this.http.get<boolean>(URL.user, { headers: this.header, params: { id: id } });
  }
}
