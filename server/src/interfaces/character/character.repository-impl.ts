import {CharacterRepository} from '../../application/character/repository/character.repository';
import {Injectable} from '@nestjs/common';
import {CharacterEntity} from '../../domain/character/character.entity';
import {ConnectDb} from '../../infrastructure/connect-db';
import {HttpRequest} from '../../infrastructure/http-request';

@Injectable()
export class CharacterRepositoryImpl implements CharacterRepository {
  private readonly url = 'http://localhost:3000/';

  constructor(
    private readonly connect: ConnectDb<CharacterEntity>,
    private readonly http: HttpRequest<CharacterEntity>) {
  }

  /**
   * 指定したユーザIDに紐づくキャラクター取得
   * @param characterId ユーザID
   */
  async fetchCharacterByCharacterId(characterId: string): Promise<CharacterEntity> {

    return await this.http.get(`${this.url}character/${characterId}`)
      .toPromise()
      .catch(e => {
        console.error('error in get');
        throw e;
      });
  }

  /**
   * キャラクター全件取得
   */
  async fetchAllCharacter(): Promise<CharacterEntity[]> {

    return await this.http.getAsList(`${this.url}character`)
      .toPromise()
      .catch(e => {
        console.error('error in getAsList');
        throw e;
      });
  }

  /**
   * キャラクターデータ登録
   * @param character 登録データ
   */
  async registerCharacter(character: CharacterEntity): Promise<CharacterEntity> {

    return await this.http.post(this.url, character)
      .toPromise()
      .catch(e => {
        console.error('error in post');
        throw e;
      });
  }


  /**
   * キャラクターデータ更新
   * @param id キャラクターID
   * @param character 登録データ
   */
  public async updateCharacter(id: string, character: CharacterEntity): Promise<CharacterEntity> {
    return await this.http.put(`${this.url}character/${id}`, character)
      .toPromise()
      .catch(e => {
        console.error('error in put');
        throw e;
      });
  }
}
