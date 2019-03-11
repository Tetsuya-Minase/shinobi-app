import { Component, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnInit } from '@angular/core';
import { DbService } from '../../service/db.service';
import * as cons from '../../common/constants';
import * as func from '../../common/utils';
import { ICharacterData } from '../../common/interfaces';
import { WebStorage } from '../../common/utils';
import { MainGridComponent } from './main-grid/main-grid.component';
import { ArtssettingComponent } from './artssetting/artssetting.component';
import { ItemSecretsComponent } from './item-secrets/item-secrets.component';
import { BackgroundComponent } from './background/background.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, AfterViewChecked {
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

  @ViewChildren(MainGridComponent) mainGridQuery: QueryList<any>;
  @ViewChildren(ArtssettingComponent) artsSettingQuery: QueryList<any>;
  @ViewChildren(ItemSecretsComponent) itemSecretsQuery: QueryList<any>;
  @ViewChildren(BackgroundComponent) backgroundQuery: QueryList<any>;

  constructor(private dbService: DbService) { }


  public ngOnInit() { }

  public changeRyuha(target: string) {
    this.ryuha = target;
  }

  public ngAfterViewChecked() {
    this.characterData.selectedSkillList = this.mainGridQuery.last.selectedSkillList;
    this.characterData.dispArtsArray = this.artsSettingQuery.last.dispArtsArray;
    this.characterData.ryuha = this.ryuha;
    this.characterData.secrets = this.itemSecretsQuery.last.secretList;
    this.characterData.hyorogan = this.itemSecretsQuery.last.itemList.hyorogan;
    this.characterData.jintugan = this.itemSecretsQuery.last.itemList.jintugan;
    this.characterData.tonkohu = this.itemSecretsQuery.last.itemList.tonkohu;
    this.characterData.background = this.backgroundQuery.last.backgroundList;
  }

  public registCharactor() {
    Object.keys(this.basicInfoGroup.value).forEach(value => {
      this.characterData[value] = this.basicInfoGroup.value[value];
    });
    const userId = WebStorage.getSessionStorage('userId');
    this.characterData['userId'] = userId ? userId : 'GUEST';
    this.dbService.insertData(this.characterData).subscribe(
      res => {
        window.alert('登録しました。');
      }
    );
  }

  public getForm(name: string) {
    return this.basicInfoGroup.get(name);
  }
}
