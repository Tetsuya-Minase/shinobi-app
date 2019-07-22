import {Injectable} from '@angular/core';
import {CharacterListModule} from '../character-list.module';
import {DbService} from '../../../service/db.service';
import {Functions} from '../../../common/utils';
import {CharacterData, CharacterListResult} from '../../../common/types';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: CharacterListModule
})
export class CharacterListService {

  private _characterList$ = new BehaviorSubject<CharacterData[]>([]);

  constructor(
    private dbService: DbService
  ) {
  }

  fetchCharacterData() {
    // TODO: fix response type
    this.dbService.getCharacterList().subscribe(
      (value: CharacterListResult) => {
        if (Functions.isEmptyList(value.result)) {
          return;
        }
        this._characterList$.next(value.result);
      }, err => {
        console.error('error in character list', err);
      }
    );
  }

  get characterList$() {
    return this._characterList$.asObservable();
  }

}
