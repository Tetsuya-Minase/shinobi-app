import {Injectable} from '@angular/core';
import {CharacterDetailModule} from '../character-detail.module';
import {select, Store} from '@ngrx/store';
import {IArtsData, IBackGround, ICharacterData, IGridData, ISecretsData} from '../../../common/interfaces';
import {DbService} from '../../../service/db.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {InitInterfaces, WebStorage} from '../../../common/utils';

@Injectable({
  providedIn: CharacterDetailModule
})
export class CharacterDetailService {

  private _displayArtsList$: Observable<Array<IArtsData>> = this.store.pipe(select('artsSetting'));
  private _backgroundList$: Observable<Array<IBackGround>> = this.store.pipe(select('background'));
  private _secretsList$: Observable<Array<ISecretsData>> = this.store.pipe(select('secrets'));
  private _selectedSkillList$: Observable<Array<IGridData>> = this.store.pipe(select('grids'));
  private _characterData$ = new BehaviorSubject<ICharacterData>(InitInterfaces.initCharacterData());

  constructor(
    private dbService: DbService,
    private store: Store<{ artsSetting: Array<IArtsData>, background: Array<IBackGround>, secrets: Array<ISecretsData>, grids: Array<IGridData> }>
  ) {
  }

  /**
   * キャラクターデータ登録
   */
  public async registerCharacter() {
    const userId = WebStorage.getSessionStorage('userId');
    const characterData = await this._characterData$.toPromise();
    characterData['userId'] = userId ? userId : 'GUEST';
    console.log('characterData', characterData);
    try {
      this.dbService.insertData(characterData);
      return 'OK';
    } catch (e) {
      throw e;
    }
  }

  public async updateCharacterData(basicInfoGroupValues) {
    const characterData = await this._characterData$.toPromise();
    Object.keys(basicInfoGroupValues).forEach(value => {
      characterData[value] = basicInfoGroupValues[value];
    });
    this._characterData$.next(characterData);
  }

  private async patchCharacterData() {
    const characterData = await this._characterData$.toPromise();
    characterData.dispArtsArray = await this.displayArtsList$.toPromise();
    characterData.background = await this.backgroundList$.toPromise();
    characterData.secrets = await this.secretsList$.toPromise();
    characterData.selectedSkillList = await this.selectedSkillList$.toPromise();

    this._characterData$.next(characterData);
  }

  public get displayArtsList$() {
    return this._displayArtsList$;
  }

  public get backgroundList$() {
    return this._backgroundList$;
  }

  public get secretsList$() {
    return this._secretsList$;
  }

  public get selectedSkillList$() {
    return this._selectedSkillList$;
  }

  public get characterData$() {
    return this._characterData$.asObservable();
  }
}
