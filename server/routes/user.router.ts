import * as express from 'express';
import {UserService} from '../domain/service/user.service';

class UserRouter {
  public router = express.Router();
  private service: UserService;

  constructor() {
    this.service = new UserService();
    this.initializeRouting();
  }

  /**
   * Routing初期化処理
   */
  private initializeRouting() {
    /**
     * ユーザ重複チェック
     */
    this.router.get('/:id', async (req, res, next) => {
      try {
        res.send(await this.service.checkDuplicateUser(req['id']));
      } catch (error) {
        next(error);
      }
    });

    /**
     * ユーザ登録
     */
    this.router.post('/', async (req, res, next) => {
      const id = req.body.userId;
      const password = req.body.password;
      try {
        res.send(await this.service.registerUser(id, password));
      } catch (error) {
        next(error);
      }
    });

    /**
     * ユーザ削除
     * @param id 削除するユーザのID
     */
    this.router.delete('/:id', async (req, res, next) => {
      try {
        res.send(await this.service.deleteUser(req['id']));
      } catch (error) {
        next(error);
      }
    });
  }
}

export default new UserRouter().router;
