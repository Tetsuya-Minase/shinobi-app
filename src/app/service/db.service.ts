import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as ifs from '../common/interfaces';
import * as cons from '../common/constant';
// import { isArray } from 'util';
// import * as character from 'assets/characterList';

@Injectable()
export class DbService {
  private serverFlg: boolean;
  private header;
  constructor(private http: HttpClient) {
    const port = location.port;
    if(port === '4200'){
      this.serverFlg = false;
    } else if (port === '3000') {
      this.serverFlg = true;
    } else {
      console.log(port);
    }
    // this.header = {'content-type':'appication/json'}
  }

  /**
   * 
   */
  public getArtsData(): Observable<Array<ifs.ArtsData>> {
    const url = '/db/arts';
    if (this.serverFlg) {
      return this.http.get<Array<ifs.ArtsData>>(url);
    } else {
      // stub用
      return Observable.create(observer => {
        observer.next(cons.ArtsInfo.arts);
        observer.complete();
      });
    }
  };

  /**
   * キャラクタ一覧取得
   */
  public getCharactorData(param?: string): Observable<Array<object>> {
    const url = '/db/charactor';
    let opt = {param: ''}
    if(typeof param === 'string'){
      opt.param = param;
    }

    if (this.serverFlg) {
      return this.http.get<Array<object>>(url);
    } else {
      // stub用
      return Observable.create(observer => {
        observer.next(cons.CHARACTER.charactor);
        observer.complete();
      });
    }

  };

  /**
   * 
   * @param data 
   */
  public insertData(data: any): Observable<object> {
    const url = '/db/charactor';
    if (this.serverFlg) {
      return this.http.post(url, JSON.parse(data));
    } else {
      const old = JSON.parse(window.localStorage.getItem('charactor'));
      let temp = [];
      if (old) {
        if (!Array.isArray(old)) {
          temp.push(old);
        } else {
          temp = old.concat();
        }
      }
      temp.push(data);
      console.log(temp);
      window.localStorage.setItem('charactor', JSON.stringify(temp));
      return Observable.create(observer => {
        observer.next({ code: 200, res: 'ok' });
        observer.complete();
      });
    }
  }
}
