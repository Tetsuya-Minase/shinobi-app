import {Enums} from './constants';

/**
 * 忍法用IF
 */
export type ArtsData = {
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
  attribute: Enums.ArtsAttribute[];
  /** データクリックされたか */
  clickFlg: boolean;
};

/**
 * 忍法JSON用IF
 */
export type ArtsInfo = {
  artsInfo: ArtsData[];
};

/**
 * クリックした忍法用IF
 */
export type ClickIndex = {
  name: string;
  colId: string;
  colIndex: number;
  rowIndex: number;
};

/**
 * 奥義用IF
 */
export type SecretsData = {
  name: string;
  targetSkill: string;
  effect: string;
  staging: string;
};

/**
 * アイテム用IF
 */
export type ItemList = {
  hyorogan: number;
  jintugan: number;
  tonkohu: number;
};

/**
 * ページURL用IF
 */
export type UrlList = {
  regist: string;
  characterList: string;
  login: string;
  myPage: string;
};

/**
 * 背景用IF
 */
export type BackGround = {
  name: string;
  type: string;
  point: number;
  effect: string;
};

/**
 * キャラクターデータ用IF
 */
export type CharacterData = {
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
  selectedSkillList: GridData[];
  displayArtsArray: ArtsData[];
  background: BackGround[];
  secrets: SecretsData[];
  hyorogan: number;
  jintugan: number;
  tonkohu: number;
};

/**
 * グリッドデータ用IF
 */
export type GridData = {
  data: string;
  isClicked: boolean;
  categories: string[];
};

