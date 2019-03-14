/**
 * キャラクターInterface
 */
export interface CharacterInterface {
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
  selectedSkillList: Array<any>;
  dispArtsArray: Array<any>;
  background: Array<any>;
  secrets: Array<any>;
  hyorogan: number;
  jintugan: number;
  tonkohu: number;
}
