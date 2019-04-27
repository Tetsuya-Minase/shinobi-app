import { Injectable } from '@angular/core';
import { CharacterListModule } from '../character-list.module';
import {DbService} from '../../../service/db.service';
import {Functions} from '../../../common/utils';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: CharacterListModule
})
export class CharacterListService {

  private _characterList$ = new BehaviorSubject<Array<Object>>([]);

  constructor(
    private dbService: DbService
  ) { }

  public fetchCharacterData() {
    this.dbService.getCharacterData().subscribe(
      ret => {
        if (!Functions.isListDefined(ret)) {
          return;
        }
        this._characterList$.next(ret);
      }, err => {
        console.error('error in character list', err);
      }
    );
  }

  public get characterList$() {
    return this._characterList$.asObservable();
  }

}
