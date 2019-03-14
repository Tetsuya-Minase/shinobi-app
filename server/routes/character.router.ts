import * as express from 'express';
import {CharacterService} from '../domain/service/character.service';

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
    this.router.get('/:userId', (req, res) => {
      try {
        res.send(this.service.getCharacter(req['userId']));
      } catch (e) {
        console.log(e);
        res.status(500).send({message: 'internal server error'});
      }
    });

    /**
     * キャラクター登録
     */
    this.router.post('/', (req, res) => {
      try {
        res.send(this.service.registerCharacter(req));
      } catch (error) {
        console.log(error);
        res.status(500).send({message: 'internal server error'});
      }
    });
  }
}

export default new CharacterRouter().router;
