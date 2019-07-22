import {Injectable} from '@angular/core';
import {MyPageModule} from '../my-page.module';
import {DbService} from '../../../service/db.service';
import {CharacterData, CharacterListResult} from '../../../common/types';
import {Functions} from '../../../common/utils';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: MyPageModule
})
export class MyPageService {

  private _myCharacterList = new BehaviorSubject<CharacterData[]>([]);
  private _myCharacterNameList = new BehaviorSubject<string[]>([]);

  constructor(private dbService: DbService) {
  }

  public fetchCharacterList() {
    const userId = window.sessionStorage.getItem('userId');
    this.dbService.getCharacterListByUserId(userId).subscribe(
      (res: CharacterListResult) => {
        this._myCharacterList.next(res.result);
        if (Functions.isDefined(res)) {
          return;
        }
        this._myCharacterNameList.next(res.result.map(item => item['characterName']));
      }, err => {
        console.error(err);
      }
    );
  }

  public get myCharacterList(): Observable<CharacterData[]> {
    return this._myCharacterList.asObservable();
  }

  public get myCharacterNameList(): Observable<string[]> {
    return this._myCharacterNameList.asObservable();
  }
}
