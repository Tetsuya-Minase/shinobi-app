import { Component, OnInit } from '@angular/core';
import * as ifs from '../../common/interfaces';
import * as cons from '../../common/constant';

@Component({
  selector: 'app-artssetting',
  templateUrl: './artssetting.component.html',
  styleUrls: ['./artssetting.component.scss']
})
export class ArtssettingComponent implements OnInit {
  /** 選択した忍法リスト */
  public selectArtsArray: Array<ifs.ArtsData> = [];
  /** 表示用リスト */
  public dispArtsArray: Array<ifs.ArtsData> = [{
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

  constructor() { }

  ngOnInit() {
  }

  public registData(event: Array<ifs.ArtsData>) {
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
    this.dispArtsArray = event.concat();
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
