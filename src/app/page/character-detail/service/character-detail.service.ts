import {Injectable} from '@angular/core';
import {CharacterDetailModule} from '../character-detail.module';
import {select, Store} from '@ngrx/store';
import {IArtsData, IBackGround, IGridData, ISecretsData} from '../../../common/interfaces';
import {DbService} from '../../../service/db.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: CharacterDetailModule
})
export class CharacterDetailService {

  private _displayArtsList$: Observable<Array<IArtsData>> = this.store.pipe(select('artsSetting'));
  private _backgroundList$: Observable<Array<IBackGround>> = this.store.pipe(select('background'));
  private _secretsList$: Observable<Array<ISecretsData>> = this.store.pipe(select('secrets'));
  private _gridList$: Observable<Array<IGridData>> = this.store.pipe(select('grids'));

  constructor(
    private dbService: DbService,
    private store: Store<{ artsSetting: Array<IArtsData>, background: Array<IBackGround>, secrets: Array<ISecretsData>, grids: Array<IGridData> }>
  ) {
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

  public get gridList$() {
    return this._gridList$;
  }
}
