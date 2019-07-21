/**
 * キャラクターEntity
 */
export type CharacterEntity = {
  characterId?: string;
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
  achievement: number;
  age: number;
  gender: string;
  face: string;
  belief: string;
  selectedSkillList: unknown[];
  displayArtsList: unknown[];
  background: unknown[];
  secrets: unknown[];
  hyorogan: number;
  jintugan: number;
  tonkohu: number;
};
