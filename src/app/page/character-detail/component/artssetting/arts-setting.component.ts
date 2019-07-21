import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {ArtsData} from '../../../../common/types';
import {Enums} from '../../../../common/constants';
import {ArtsModalComponent} from '../../../../modal/arts-modal/arts-modal.component';
import {MatDialog} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {ArtsSettingAdd, ArtsSettingUpdate} from 'app/action/arts-setting.action';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-arts-setting',
  templateUrl: './arts-setting.component.html',
  styleUrls: ['./arts-setting.component.scss']
})
export class ArtsSettingComponent implements OnInit {
  /** 選択した忍法リスト */
  public selectArtsArray: ArtsData[] = [];
  /** 表示用リスト */
  public displayArtsList: ArtsData[] = [];
  public displayArtsList$: Observable<ArtsData[]>;

  public artsSettingGroup = new FormGroup({
    artsName: new FormControl('', []),
    artsType: new FormControl('', []),
    targetSkill: new FormControl('', []),
    range: new FormControl('', []),
    cost: new FormControl('', []),
    description: new FormControl('', []),
  });

  constructor(
    private dialog: MatDialog,
    private store: Store<{ artsSetting: ArtsData[] }>
  ) {
    this.displayArtsList$ = store.pipe(select('artsSetting'));
    this.displayArtsList$.subscribe(list => this.displayArtsList = list);
  }

  ngOnInit() {
  }

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
  public registData(event: Array<ArtsData>) {
    const artsList = {
      name: '接近戦攻撃※'
      , type: Enums.ArtsType.atack
      , range: 1
      , cost: 'なし'
      , targetSkill: '自由'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.general]
      , clickFlg: false
    };

    this.store.dispatch(new ArtsSettingAdd(event[0]));
  }

  /**
   * 入力データ更新
   */
  public updateRowData() {
    this.store.dispatch(new ArtsSettingUpdate(this.displayArtsList));
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
