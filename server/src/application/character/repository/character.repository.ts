import {CharacterEntity} from '../../../domain/character/character.entity';

export interface CharacterRepository {
  /**
   * 指定したユーザIDに紐づくキャラクター取得
   * @param characterId ユーザID
   */
  fetchCharacterByCharacterId(characterId: string): Promise<CharacterEntity>;

  /**
   * キャラクター全件取得
   */
  fetchAllCharacter(): Promise<CharacterEntity[]>;

  /**
   * キャラクターデータ新規登録
   * @param character 登録データ
   */
  registerCharacter(character: CharacterEntity): Promise<CharacterEntity>;

  /**
   * キャラクターデータ更新
   * @param id キャラクターID
   * @param character 登録データ
   */
  updateCharacter(id: string, character: CharacterEntity): Promise<CharacterEntity>;
}
