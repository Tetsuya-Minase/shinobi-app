import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as ifs from '../../../common/interfaces';
import { Functions } from '../../../common/utils';
import { ArtsModalComponent } from '../../../modal/arts-modal/arts-modal.component';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { ArtsSettingAdd } from 'app/action/arts-setting.action';

@Component({
  selector: 'app-artssetting',
  templateUrl: './artssetting.component.html',
  styleUrls: ['./artssetting.component.scss']
})
export class ArtssettingComponent implements OnInit {
  /** 選択した忍法リスト */
  public selectArtsArray: Array<ifs.IArtsData> = [];
  /** 表示用リスト */
  public displayArtsList: Array<ifs.IArtsData> = [];
  public displayArtsList$: Observable<Array<ifs.IArtsData>>;

  constructor(
    private dialog: MatDialog,
    private store: Store<{artsSetting: Array<ifs.IArtsData>}>
  ) {
    this.displayArtsList$ = store.pipe(select('artsSetting'));
    this.displayArtsList$.subscribe(list => this.displayArtsList = list );
  }

  ngOnInit() { }

  /**
   * モーダル画面オープン
   */
  public modalOpen() {
    this.dialog.open(ArtsModalComponent, {
      width: '70%',
      data: {selectArtsArray: this.selectArtsArray}
    });
  }

  /**
   * 追加
   * @param event 
   */
  public registData(event: Array<ifs.IArtsData>) {
    const artsList = {
      name: '接近戦攻撃※'
      , type: ifs.ArtsType.atack
      , range: 1
      , cost: 'なし'
      , targetSkill: '自由'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [ifs.ArtsAttribute.general]
      , clickFlg: false
    };
    
    this.store.dispatch(new ArtsSettingAdd(event[0]));
  }

  /**
   * 空行追加
   */
  public addRow() {
    const arts = {
      name: ''
      , type: null
      , range: null
      , cost: ''
      , targetSkill: ''
      , description: ''
      , flavor: ''
      , attribute: []
      , clickFlg: false
    };
    this.store.dispatch(new ArtsSettingAdd(arts));
  }

}
