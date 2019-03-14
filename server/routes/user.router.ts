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
     * ユーザ初期化
     */
    this.router.get('/:id', (req, res) => {
      try {
        res.send(this.service.checkDuplicateUser(req['id']));
      } catch (error) {
        console.log(error);
        res.status(500).send({message: 'internal server error'});
      }
    });

    /**
     * ユーザ登録
     */
    this.router.post('/', (req, res) => {
      const id = req['userId'];
      const password = req['password'];
      try {
        res.send(this.service.registerUser(id, password));
      } catch (error) {
        res.status(500).send({message: 'internal server error'});
      }
    });

    /**
     * ユーザ削除
     */
    this.router.delete('/:id', (req, res) => {
      try {
        res.send(this.service.deleteUser(req['id']));
      } catch (error) {
        res.status(500).send({message: 'internal server error'});
      }
    });
  }
}

export default new UserRouter().router;
