import { Enums } from './constants';

/**
 * 忍法用IF
 */
export interface IArtsData {
  /** 忍法名 */
  name: string;
  /** 忍法タイプ */
  type: Enums.ArtsType;
  /** 間合 */
  range: number;
  /** コスト */
  cost: string;
  /** 指定特技 */
  targetSkill: string;
  /** エフェクト */
  description: string;
  /** フレーバーテキスト */
  flavor: string;
  /** 忍法種類 */
  attribute: Array<Enums.ArtsAttribute>;
  /** データクリックされたか */
  clickFlg: boolean;
}

/**
 * 忍法JSON用IF
 */
export interface IArtsInfo {
  artsinfo: Array<IArtsData>;
}

/**
 * クリックした忍法用IF
 */
export interface IClickIndex {
  name: string;
  colId: string;
  colIndex: number;
  rowIndex: number;
}

/**
 * 奥義用IF
 */
export interface ISecretsData {
  name: string;
  targetSkill: string;
  effect: string;
  staging: string;
}

/**
 * アイテム用IF
 */
export interface IItemList {
  hyorogan: number;
  jintugan: number;
  tonkohu: number;
}

/**
 * ページURL用IF
 */
export interface IUrlList {
  regist: string;
  characterList: string;
  login: string;
  myPage: string;
}

/**
 * 背景用IF
 */
export interface IBackGround {
  name: string;
  type: string;
  point: number;
  effect: string;
}

/**
 * キャラクターデータ用IF
 */
export interface ICharacterData {
    userId: string;
    playerName: string;
    characterName: string;
    kana: string;
    regulation: string;
    type: string;
    ryuha: string;
    kairyuha: string;
    ryugi: string;
    enemy: string;
    rank: string;
    achievement: string;
    age: string;
    gender: string;
    face: string;
    belief: string;
    selectedSkillList: object;
    dispArtsArray: object;
    background: Array<IBackGround>;
    secrets: Array<ISecretsData>;
    hyorogan: number;
    jintugan: number;
    tonkohu: number;
}

/**
 * グリッドデータ用IF
 */
export interface IGridData {
  data: string;
  isClicked: boolean;
  categories: Array<string>;
}
