import {Injectable} from '@angular/core';
import {MyPageModule} from '../my-page.module';
import {DbService} from '../../../service/db.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: MyPageModule
})
export class MyPageService {

  private _myCharacterList = new BehaviorSubject<Array<object>>([]);
  private _myCharacterNameList = new BehaviorSubject<Array<object>>([]);

  constructor(private dbService: DbService) {
  }

  public fetchCharacterList() {
    const userId = window.sessionStorage.getItem('userId');
    this.dbService.getCharacterData(userId).subscribe(
      res => {
        this._myCharacterList.next(res);
        if (this.isDefined(res)) {
          return;
        }
        this._myCharacterNameList.next(res.map(item => item['characterName']));
      }, err => {
        console.log(err);
      }
    );
  }

  public get myCharacterList(): Observable<Array<object>> {
    return this._myCharacterList.asObservable();
  }

  public get myCharacterNameList(): Observable<Array<object>> {
    return this._myCharacterNameList.asObservable();
  }

  private isDefined(target: any): boolean {
    return !(target === null || target === undefined);
  }
}
