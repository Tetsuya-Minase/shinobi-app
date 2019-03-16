import {CharacterInterface} from '../domain/model/characterInterface';

export class Utils {
  /**
   * キャラクタデータフォーマッター
   * @param {object} dbData
   */
  public static characterDataFormatter(dbData: CharacterInterface) {
    const retList: Array<CharacterInterface> = [];
    Array.prototype.forEach.call(dbData, (data) => {
      const retObj: CharacterInterface = InitialFunction.initialCharacter();
      retObj.playerName = data.player_name;
      retObj.characterName = data.character_name;
      retObj.kana = data.name_kana;
      retObj.regulation = data.regulation;
      retObj.type = data.type;
      retObj.ryuha = data.joui_ryuha;
      retObj.kairyuha = data.kai_ryuha;
      retObj.ryugi = data.ryugi;
      retObj.enemy = data.enemy;
      retObj.rank = data.rank;
      retObj.achievement = data.achievement;
      retObj.age = data.age;
      retObj.gender = data.gender;
      retObj.face = data.face;
      retObj.belief = data.belief;
      retObj.selectedSkillList = JSON.parse(data.skill);
      retObj.dispArtsArray = JSON.parse(data.arts);
      retObj.secrets = JSON.parse(data.secrets);
      retObj.background = JSON.parse(data.background);
      retObj.hyorogan = data.hyorogan;
      retObj.jintugan = data.jintugan;
      retObj.tonkohu = data.tonkohu;
      retList.push(retObj);
    });
    return retList;
  }

  /**
   * 対象がリストかつ定義済みで有ることのチェック
   * @param target チェック対象
   * @return チェック結果
   */
  public static isDefinedArray(target: any): boolean {
    if (target === null || target === undefined) {
      return false;
    }
    return Array.isArray(target);
  }

  /**
   * 対象が定義済みであることのチェック
   * @param target チェック対象
   * @return チェック結果
   */
  public static isDefined(target: any): boolean {
    return !(target === null || target === undefined);
  }
}

/**
 * 初期化処理用関数
 */
export class InitialFunction {
  public static initialCharacter(): CharacterInterface {
    const retObj: CharacterInterface = {
      userId: '',
      playerName: '',
      characterName: '',
      kana: '',
      regulation: '',
      type: '',
      ryuha: '',
      kairyuha: '',
      ryugi: '',
      enemy: '',
      rank: '',
      achievement: '',
      age: '',
      gender: '',
      face: '',
      belief: '',
      selectedSkillList: [],
      dispArtsArray: [],
      background: [],
      secrets: [],
      hyorogan: 0,
      jintugan: 0,
      tonkohu: 0
    };
    return JSON.parse(JSON.stringify(retObj));
  }
}
