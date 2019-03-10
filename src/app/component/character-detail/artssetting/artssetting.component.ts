import { Component, OnInit } from '@angular/core';
import * as ifs from '../../../common/interfaces';
import { ArtsModalComponent } from '../../../modal/arts-modal/arts-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-artssetting',
  templateUrl: './artssetting.component.html',
  styleUrls: ['./artssetting.component.scss']
})
export class ArtssettingComponent implements OnInit {
  /** 選択した忍法リスト */
  public selectArtsArray: Array<ifs.IArtsData> = [];
  /** 表示用リスト */
  public dispArtsArray: Array<ifs.IArtsData> = [{
    name: '接近戦攻撃※'
    , type: ifs.ArtsType.atack
    , range: 1
    , cost: 'なし'
    , targetSkill: '自由'
    , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
    , flavor: '通常の接近戦攻撃。'
    , attribute: [ifs.ArtsAttribute.general]
    , clickFlg: false
  }];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public modalOpen() {
    this.dialog.open(ArtsModalComponent, {
      width: '70%',
      data: {selectArtsArray: this.selectArtsArray}
    });
  }

  public registData(event: Array<ifs.IArtsData>) {
    this.dispArtsArray = [{
      name: '接近戦攻撃※'
      , type: ifs.ArtsType.atack
      , range: 1
      , cost: 'なし'
      , targetSkill: '自由'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [ifs.ArtsAttribute.general]
      , clickFlg: false
    }];
    this.dispArtsArray = JSON.parse(JSON.stringify(event));
  }

  public addRow() {
    this.dispArtsArray.push({
      name: ''
      , type: null
      , range: null
      , cost: ''
      , targetSkill: ''
      , description: ''
      , flavor: ''
      , attribute: []
      , clickFlg: false
    });
  }

}
