import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ArtsInfo, CharacterDataResult, CharacterListResult} from '../common/types';

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
  public getArtsData(): Observable<ArtsInfo> {
    return this.http.get<ArtsInfo>(URL.artsInfo);
  }

  /**
   * キャラクター一覧取得
   */
  public getCharacterList(): Observable<CharacterListResult> {
    return this.http.get<CharacterListResult>(URL.character, {headers: this.header});
  }

  /**
   * ユーザに紐づくキャラクター一覧取得
   */
  public getCharacterListByUserId(userId: string): Observable<CharacterListResult> {
    return this.http.get<CharacterListResult>(`${URL.character}/${userId}`, {headers: this.header});
  }

  /**
   * キャラクター単体取得
   */
  public getCharacterDataById(characterId: string): Observable<CharacterListResult> {
    return this.http.get<CharacterListResult>(`${URL.character}/${characterId}`, {headers: this.header});
  }

  /**
   * キャラクター登録
   * @param data 登録するキャラクターデータ
   */
  public insertData(data: any): Observable<CharacterDataResult> {
    return this.http.post<CharacterDataResult>(URL.character, data, {headers: this.header});
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
  public duplicateUserCheck(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${URL.user}/${id}`, {headers: this.header});
  }
}
