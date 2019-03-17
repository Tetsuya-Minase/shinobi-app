import {CharacterInterface} from '../model/characterInterface';
import {CharacterRepository} from '../../infrastructures/character.repository';
import {Utils} from '../../utils/utils';

export class CharacterService {
  private repository: CharacterRepository;

  constructor() {
    this.repository = new CharacterRepository();
  }

  /**
   * ユーザに紐づくキャラクター取得
   * @param userId 取得したいユーザ
   */
  public async getCharacter(userId?: string): Promise<Array<CharacterInterface>> {
    const result = await this.repository.getCharacterByUserId(userId);
    return Utils.characterDataFormatter(result);
  }

  /**
   * キャラクター情報複数件取得
   */
  public async getCharacterAll(): Promise<Array<CharacterInterface>> {
    const result = await this.repository.getAllCharacter();
    return Utils.characterDataFormatter(result);
  }

  /**
   * キャラクター登録
   * @param req リクエスト
   * @return 登録結果
   */
  public async registerCharacter(req: any) {
    const character = {
      user_id: req.body.userId,
      player_name: req.body.playerName,
      character_name: req.body.charactorName,
      name_kana: req.body.kana,
      regulation: req.body.regulation,
      type: req.body.type,
      joui_ryuha: req.body.ryuha,
      kai_ryuha: req.body.kairyuha,
      ryugi: req.body.ryugi,
      enemy: req.body.enemy,
      rank: req.body.rank,
      achievement: req.body.achievement,
      age: req.body.age,
      gender: req.body.gender,
      face: req.body.face,
      belief: req.body.belief,
      skill: JSON.stringify(req.body.selectedSkillList),
      arts: JSON.stringify(req.body.dispArtsArray),
      secrets: JSON.stringify(req.body.secrets),
      background: JSON.stringify(req.body.background),
      hyorogan: req.body.hyorogan,
      jintugan: req.body.jintugan,
      tonkohu: req.body.tonkohu,
      create_date: new Date(),
      last_modified: new Date(),
      delflg: 0
    };

    try {
      return await this.repository.registerCharacter(character);
    } catch (e) {
      throw e;
    }
  }

}

