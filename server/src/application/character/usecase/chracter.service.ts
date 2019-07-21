import {Injectable} from '@nestjs/common';
import {CharacterEntity} from '../../../domain/character/character.entity';

@Injectable()
export class CharacterService {

  /**
   * キャラクタデータフォーマッター
   * @param {object} data
   */
  public characterDataFormatter(data: CharacterEntity): CharacterEntity {
    const retObj: CharacterEntity = {
      userId: data.userId,
      playerName: data.playerName,
      characterName: data.characterName,
      kana: data.kana,
      regulation: data.regulation,
      type: data.type,
      ryuha: data.ryuha,
      kairyuha: data.kairyuha,
      ryugi: data.ryugi,
      enemy: data.enemy,
      rank: data.rank,
      achievement: data.achievement,
      age: data.age,
      gender: data.gender,
      face: data.face,
      belief: data.belief,
      selectedSkillList: [],
      displayArtsList: [],
      background: [],
      secrets: [],
      hyorogan: data.hyorogan,
      jintugan: data.jintugan,
      tonkohu: data.tonkohu
    };
    return retObj;
  }
}
