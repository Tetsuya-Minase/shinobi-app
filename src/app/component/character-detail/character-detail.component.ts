import {Component, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnInit} from '@angular/core';
import {DbService} from '../../service/db.service';
import * as cons from '../../common/constants';
import * as func from '../../common/utils';
import {IArtsData, IBackGround, ICharacterData, IGridData, ISecretsData} from '../../common/interfaces';
import {WebStorage} from '../../common/utils';
import {MainGridComponent} from './main-grid/main-grid.component';
import {ArtsSettingComponent} from './artssetting/arts-setting.component';
import {ItemSecretsComponent} from './item-secrets/item-secrets.component';
import {BackgroundComponent} from './background/background.component';
import {FormControl, Validators, FormGroup, AbstractControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public ryuha = '';
  public characterData: ICharacterData = func.InitInterfaces.initCharacterData();
  public selectList: Array<string> = ['流派を選択', '斜歯忍軍', '鞍馬神流', 'ハグレモノ', '比良坂機関', '私立御斎学園', '隠忍の血統'];

  // formGroup
  public basicInfoGroup = new FormGroup({
    playerName: new FormControl('', [
      Validators.required
    ]),
    characterName: new FormControl('', [
      Validators.required
    ]),
    kana: new FormControl('', [
      // Validators.required
    ]),
    regulation: new FormControl('', [
      // Validators.required
    ]),
    type: new FormControl('', [
      // Validators.required
    ]),
    kairyuha: new FormControl('', [
      // Validators.required
    ]),
    enemy: new FormControl('', [
      // Validators.required
    ]),
    rank: new FormControl('', [
      // Validators.required
    ]),
    achievement: new FormControl('', [
      // Validators.required
    ]),
    age: new FormControl('', [
      // Validators.required
    ]),
    gender: new FormControl('', [
      // Validators.required
    ]),
    face: new FormControl('', [
      // Validators.required
    ]),
    ryugi: new FormControl('', [
      // Validators.required
    ]),
    belief: new FormControl('', [
      // Validators.required
    ])
  });

  private displayArtsList$: Observable<Array<IArtsData>>;
  private backgroundList$: Observable<Array<IBackGround>>;
  private secretsList$: Observable<Array<ISecretsData>>;
  private gridList$: Observable<Array<IGridData>>;

  constructor(
    private dbService: DbService,
    private store: Store<{ artsSetting: Array<IArtsData>, background: Array<IBackGround>, secrets: Array<ISecretsData>, grids: Array<IGridData> }>
  ) {
    this.displayArtsList$ = store.pipe(select('artsSetting'));
    this.displayArtsList$.subscribe(dl => {
      this.characterData.dispArtsArray = dl;
    });
    this.backgroundList$ = store.pipe(select('background'));
    this.backgroundList$.subscribe(bl => {
      this.characterData.background = bl;
    });
    this.secretsList$ = store.pipe(select('secrets'));
    this.secretsList$.subscribe(sl => {
      this.characterData.secrets = sl;
    });
    this.gridList$ = store.pipe(select('grids'));
    this.gridList$.subscribe(gl => this.characterData.selectedSkillList = gl);
  }

  public ngOnInit() {
  }

  public changeRyuha(target: string) {
    this.ryuha = target;
  }

  /**
   * キャラクターデータ登録
   */
  public registerCharacter(): void {
    Object.keys(this.basicInfoGroup.value).forEach(value => {
      this.characterData[value] = this.basicInfoGroup.value[value];
    });
    const userId = WebStorage.getSessionStorage('userId');
    this.characterData['userId'] = userId ? userId : 'GUEST';
    console.log('characterData', this.characterData);
    this.dbService.insertData(this.characterData).subscribe(
      res => {
        window.alert('登録しました。');
      }
    );
  }

  /**
   * フォームから対象取得
   * @param name キー名
   */
  public getForm(name: string): AbstractControl {
    return this.basicInfoGroup.get(name);
  }
}
