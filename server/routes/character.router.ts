import * as express from 'express';
import {CharacterService} from '../domain/service/character.service';
import {Utils} from '../utils/utils';

class CharacterRouter {
  public router = express.Router();
  private service: CharacterService;

  constructor() {
    this.service = new CharacterService();
    this.initializeRouting();
  }

  /**
   * Routing初期化
   */
  private initializeRouting() {
    /**
     * キャラクタ取得
     */
    this.router.get('/:userId', async (req, res, next) => {
      try {
        if (Utils.isDefined(req['userId'])) {
        res.send(await this.service.getCharacter(req['userId']));
        } else {
          res.send(await this.service.getCharacterAll());
        }
      } catch (error) {
        console.log(error);
        next(error);
      }
    });

    /**
     * キャラクター登録
     */
    this.router.post('/', async (req, res, next) => {
      try {
        res.send(await this.service.registerCharacter(req));
      } catch (error) {
        next(error);
      }
    });
  }
}

export default new CharacterRouter().router;
