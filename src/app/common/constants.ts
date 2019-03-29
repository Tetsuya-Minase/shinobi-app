import {IArtsData, IGridData, IUrlList} from './interfaces';

export namespace GridDefs {
  export const columnDefs = [
    {
      headerName: 'A'
      , field: 'A'
      // 行間用
      , width: 20
      // checkboxSelection: true
    }, {
      headerName: '器術' // Header
      , field: 'kijutsu' // データの名前
      , width: 200 // 幅
      , editable: false // 編集不可
      , cellRenderer: (params) => {
        return params.value.data;
        // const element = document.createElement('span');
        // element.innerHTML = params.value.data;
        // element.addEventListener('click', () => {
        //     params.value.clickFlg = !params.value.clickFlg;
        //     if (params.value.clickFlg) {
        //         element.style.color = 'white';
        //         element.style.backgroundColor = 'black';
        //     } else {
        //         element.style.color = 'black';
        //         element.style.backgroundColor = '';
        //     }
        // });
        // return element;
      }
    }, {
      // 行間用
      headerName: 'B',
      field: 'B',
      width: 20,
      // checkboxSelection: true

    }, {
      headerName: '体術'
      , field: 'taijutsu'
      , width: 200
      , editable: false // 編集不可
      , cellRenderer: (params) => {
        return params.value.data;
      }
    }, {
      // 行間用
      headerName: 'C',
      field: 'C',
      width: 20,
      // checkboxSelection: true
    }, {
      headerName: '忍術',
      field: 'ninjutsu',
      width: 200,
      cellRenderer: (params) => {
        return params.value.data;
      }
    }, {
      // 行間用
      headerName: 'D',
      field: 'D',
      width: 20,
      // checkboxSelection: true
    }, {
      headerName: '謀術',
      field: 'boujutsu',
      width: 200,
      cellRenderer: (params) => {
        return params.value.data;
      }
    }, {
      // 行間用
      headerName: 'E',
      field: 'E',
      width: 20,
      // checkboxSelection: true
    }, {
      headerName: '戦術',
      field: 'senjutsu',
      width: 200,
      cellRenderer: (params) => {
        return params.value.data;
      }
    }, {
      // 行間用
      headerName: 'F',
      field: 'F',
      width: 20,
      // checkboxSelection: true
    }, {
      headerName: '妖術',
      field: 'youjutsu',
      width: 200,
      cellRenderer: (params) => {
        return params.value.data;
      }
    }, {
      // 行間用
      headerName: 'G',
      field: 'G',
      width: 20,
      // checkboxSelection: true
    }
  ];
  export const gridData = [
    { kijutsu: { data: '絡繰術', clickFlg: false }, taijutsu: { data: '騎乗術', clickFlg: false }, ninjutsu: { data: '生存術', clickFlg: false }, boujutsu: { data: '医術', clickFlg: false }, senjutsu: { data: '兵糧術', clickFlg: false }, youjutsu: { data: '異形化', clickFlg: false } },
    { kijutsu: { data: '火術', clickFlg: false }, taijutsu: { data: '砲術', clickFlg: false }, ninjutsu: { data: '潜伏術', clickFlg: false }, boujutsu: { data: '毒術', clickFlg: false }, senjutsu: { data: '鳥獣術', clickFlg: false }, youjutsu: { data: '召喚術', clickFlg: false } },
    { kijutsu: { data: '水術', clickFlg: false }, taijutsu: { data: '手裏剣術', clickFlg: false }, ninjutsu: { data: '遁走術', clickFlg: false }, boujutsu: { data: '罠術', clickFlg: false }, senjutsu: { data: '野戦術', clickFlg: false }, youjutsu: { data: '死霊術', clickFlg: false } },
    { kijutsu: { data: '針術', clickFlg: false }, taijutsu: { data: '手練', clickFlg: false }, ninjutsu: { data: '盗聴術', clickFlg: false }, boujutsu: { data: '調査術', clickFlg: false }, senjutsu: { data: '地の利', clickFlg: false }, youjutsu: { data: '結界術', clickFlg: false } },
    { kijutsu: { data: '仕込み', clickFlg: false }, taijutsu: { data: '身体操術', clickFlg: false }, ninjutsu: { data: '腹話術', clickFlg: false }, boujutsu: { data: '詐術', clickFlg: false }, senjutsu: { data: '意気', clickFlg: false }, youjutsu: { data: '封術', clickFlg: false } },
    { kijutsu: { data: '衣装術', clickFlg: false }, taijutsu: { data: '歩術', clickFlg: false }, ninjutsu: { data: '隠形術', clickFlg: false }, boujutsu: { data: '対人術', clickFlg: false }, senjutsu: { data: '用兵術', clickFlg: false }, youjutsu: { data: '言霊術', clickFlg: false } },
    { kijutsu: { data: '縄術', clickFlg: false }, taijutsu: { data: '走術', clickFlg: false }, ninjutsu: { data: '変装術', clickFlg: false }, boujutsu: { data: '遊芸', clickFlg: false }, senjutsu: { data: '記憶術', clickFlg: false }, youjutsu: { data: '幻術', clickFlg: false } },
    { kijutsu: { data: '登術', clickFlg: false }, taijutsu: { data: '飛術', clickFlg: false }, ninjutsu: { data: '香術', clickFlg: false }, boujutsu: { data: 'くノ一の術', clickFlg: false }, senjutsu: { data: '見敵術', clickFlg: false }, youjutsu: { data: '瞳術', clickFlg: false } },
    { kijutsu: { data: '拷問術', clickFlg: false }, taijutsu: { data: '骨法術', clickFlg: false }, ninjutsu: { data: '分身の術', clickFlg: false }, boujutsu: { data: '傀儡の術', clickFlg: false }, senjutsu: { data: '暗号術', clickFlg: false }, youjutsu: { data: '千里眼の術', clickFlg: false } },
    { kijutsu: { data: '壊器術', clickFlg: false }, taijutsu: { data: '刀術', clickFlg: false }, ninjutsu: { data: '隠蔽術', clickFlg: false }, boujutsu: { data: '流言の術', clickFlg: false }, senjutsu: { data: '伝達術', clickFlg: false }, youjutsu: { data: '憑依術', clickFlg: false } },
    { kijutsu: { data: '掘削術', clickFlg: false }, taijutsu: { data: '怪力', clickFlg: false }, ninjutsu: { data: '第六感', clickFlg: false }, boujutsu: { data: '経済力', clickFlg: false }, senjutsu: { data: '人脈', clickFlg: false }, youjutsu: { data: '呪術', clickFlg: false } }
  ];
  export const TABLE_HEADER = [
    {data: 'A', category: ['hasuba']}, {data: '器術', category: ['kijutsu']}, {data: 'B', category: ['hasuba', 'kurama']}, {data: '体術', category: ['taijutsu']}, {data: 'C', category: ['kurama', 'hagure']}, {data: '忍術', category: ['ninjutsu']}, {data: 'D', category: ['hagure', 'hirasaka']}, {data: '謀術', category: ['boujutsu']}, {data: 'E', category: ['hirasaka', 'otogi']}, {data: '戦術', category: ['senjutsu']}, {data: 'F', category: ['otogi', 'oni']}, {data: '妖術', category: ['youjutsu']}, {data: 'G', category: ['oni']}
  ];
  export const TABLE_DATA: Array<Array<IGridData>> = [
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '絡繰術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '騎乗術', isClicked: false , categories: ['taijutsu']}, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '生存術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '医術', isClicked: false, categories: ['boujutsu']  }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '兵糧術', isClicked: false, categories: ['senjutsu'] }, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '異形化', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }],
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '火術', isClicked: false, categories: ['kijutsu']}, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '砲術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '潜伏術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '毒術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '鳥獣術', isClicked: false, categories: ['senjutsu'] }, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '召喚術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '水術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '手裏剣術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '遁走術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka']}, { data: '罠術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '野戦術', isClicked: false, categories: ['senjutsu']}, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '死霊術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '針術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '手練', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '盗聴術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '調査術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '地の利', isClicked: false, categories: ['senjutsu'] }, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '結界術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '仕込み', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '身体操術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '腹話術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka']}, { data: '詐術', isClicked: false, categories: ['boujutsu']}, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '意気', isClicked: false, categories: ['senjutsu'] }, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '封術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '衣装術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '歩術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '隠形術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '対人術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi'] }, { data: '用兵術', isClicked: false, categories: ['senjutsu']}, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '言霊術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '縄術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama']}, { data: '走術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '変装術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '遊芸', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '記憶術', isClicked: false, categories: ['senjutsu'] }, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '幻術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '登術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '飛術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '香術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: 'くノ一の術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '見敵術', isClicked: false, categories: ['senjutsu'] }, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '瞳術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '拷問術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '骨法術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '分身の術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '傀儡の術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi'] }, { data: '暗号術', isClicked: false, categories: ['senjutsu']}, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '千里眼の術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '壊器術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '刀術', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '隠蔽術', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '流言の術', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi']  }, { data: '伝達術', isClicked: false, categories: ['senjutsu']}, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '憑依術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }] ,
    [{data: '', isClicked: false, categories: ['hasuba'] }, { data: '掘削術', isClicked: false, categories: ['kijutsu'] }, {data: '', isClicked: false, categories: ['hasuba', 'kurama'] }, { data: '怪力', isClicked: false, categories: ['taijutsu'] }, {data: '', isClicked: false, categories: ['kurama', 'hagure'] }, { data: '第六感', isClicked: false, categories: ['ninjutsu'] }, {data: '', isClicked: false, categories: ['hagure', 'hirasaka'] }, { data: '経済力', isClicked: false, categories: ['boujutsu'] }, {data: '', isClicked: false, categories: ['hirasaka', 'otogi'] }, { data: '人脈', isClicked: false, categories: ['senjutsu']}, {data: '', isClicked: false, categories: ['otogi', 'oni'] }, { data: '呪術', isClicked: false, categories: ['youjutsu'] }, {data: '', isClicked: false, categories: ['oni'] }]
  ];
  export const ryuha = {
    hasuba: '斜歯忍軍'
    , kurama: '鞍馬神流'
    , hagure: 'ハグレモノ'
    , hirasaka: '比良坂機関'
    , otogi: '私立御斎学園'
    , oni: '隠忍の血統'
  };
}

export namespace ObjectFilter {
  export const characterDataFillter = ['playerName', 'charactorName', 'kana', 'regulation', 'type', 'kairyuha', 'enemy', 'rank', 'achievement', 'age', 'gender', 'face', 'ryugi', 'belief'];

}

export namespace ArtsInfo {
  export const arts: Array<IArtsData> = [
    {
      name: '接近戦攻撃※'
      , type: Enums.ArtsType.atack
      , range: 1
      , cost: 'なし'
      , targetSkill: '自由'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.general]
      , clickFlg: false
    }, {
      name: '鳳凰'
      , type: Enums.ArtsType.atack
      , range: 6
      , cost: '2'
      , targetSkill: '火術'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.hasuba, Enums.ArtsAttribute.ryuha]
      , clickFlg: false
    }, {
      name: '鳳凰'
      , type: Enums.ArtsType.atack
      , range: 6
      , cost: '2'
      , targetSkill: '火術'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.hasuba, Enums.ArtsAttribute.ryuha]
      , clickFlg: false
    }, {
      name: '鳳凰'
      , type: Enums.ArtsType.atack
      , range: 6
      , cost: '2'
      , targetSkill: '火術'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.hasuba, Enums.ArtsAttribute.ryuha]
      , clickFlg: false
    }, {
      name: '鳳凰'
      , type: Enums.ArtsType.atack
      , range: 6
      , cost: '2'
      , targetSkill: '火術'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.hasuba, Enums.ArtsAttribute.ryuha]
      , clickFlg: false
    }, {
      name: '鳳凰'
      , type: Enums.ArtsType.atack
      , range: 6
      , cost: '2'
      , targetSkill: '火術'
      , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
      , flavor: '通常の接近戦攻撃。'
      , attribute: [Enums.ArtsAttribute.hasuba, Enums.ArtsAttribute.ryuha]
      , clickFlg: false
    }
  ];
}

export const URL_LIST: IUrlList = {
  regist: 'character',
  characterList: 'character-list',
  login: 'login',
  myPage: 'my-page'
};

export const CHARACTER = {
  'charactor': [
    {
      'playerName': 'Guest',
      'charactorName': 'Charactor1',
      'kana': 'キャラクターイチ',
      'regulation': '現代',
      'type': '',
      'kairyuha': '',
      'enemy': '',
      'rank': '',
      'achievement': '',
      'age': '',
      'gender': '',
      'face': '',
      'ryugi': '',
      'belief': '',
      'selectedSkillList': [
        {
          'name': '拷問術',
          'colId': 'kijutsu',
          'colIndex': null,
          'rowIndex': 9
        },
        {
          'name': '走術',
          'colId': 'taijutsu',
          'colIndex': null,
          'rowIndex': 7
        },
        {
          'name': '隠形術',
          'colId': 'ninjutsu',
          'colIndex': null,
          'rowIndex': 6
        },
        {
          'name': '野戦術',
          'colId': 'senjutsu',
          'colIndex': null,
          'rowIndex': 3
        },
        {
          'name': '詐術',
          'colId': 'boujutsu',
          'colIndex': null,
          'rowIndex': 5
        }
      ],
      'dispArtsArray': [
        {
          'name': '接近戦攻撃※',
          'type': '攻撃忍法',
          'range': 1,
          'cost': 'なし',
          'targetSkill': '自由',
          'description': '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
          'flavor': '通常の接近戦攻撃。',
          'attribute': [
            '汎用忍法'
          ],
          'clickFlg': false
        },
        {
          'name': 'テストサポート',
          'type': 'サポート忍法',
          'range': '1',
          'cost': '6',
          'targetSkill': '自由',
          'description': 'サポート用',
          'flavor': '',
          'attribute': [],
          'clickFlg': false
        },
        {
          'name': 'テスト装備',
          'type': '装備忍法',
          'range': 'なし',
          'cost': 'なし',
          'targetSkill': 'なし',
          'description': '装備用',
          'flavor': '',
          'attribute': [],
          'clickFlg': false
        }
      ],
      'ryuha': 'ハグレモノ'
    },
    {
      'playerName': 'Guest2',
      'charactorName': '蔵馬',
      'kana': 'クラマ',
      'regulation': '現代',
      'type': '',
      'kairyuha': '',
      'enemy': '',
      'rank': '',
      'achievement': '',
      'age': '',
      'gender': '',
      'face': '',
      'ryugi': '',
      'belief': '',
      'selectedSkillList': [],
      'dispArtsArray': [
        {
          'name': '接近戦攻撃※',
          'type': '攻撃忍法',
          'range': 1,
          'cost': 'なし',
          'targetSkill': '自由',
          'description': '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。',
          'flavor': '通常の接近戦攻撃。',
          'attribute': [
            '汎用忍法'
          ],
          'clickFlg': false
        }
      ],
      'ryuha': '鞍馬神流'
    }
  ]
};

export namespace Enums {
  export enum STORAGE_KEYS {
    userId = 'userId'
  }
  /**
   * 忍法タイプ
   */
  export enum ArtsType {
    atack = '攻撃忍法'
    , equipment = '装備忍法'
    , support = 'サポート忍法'
  }

  /**
   * 忍法種類
   */
  export enum ArtsAttribute {
    taima = '退魔編'
    , general = '汎用忍法'
    , hasuba = '斜歯忍軍'
    , ryuha = '流派忍法'
    , hiden = '秘伝忍法'
  }
}
