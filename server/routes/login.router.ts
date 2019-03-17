import * as express from 'express';
import {LoginService} from '../domain/service/login.service';

class LoginRouter {
  public router = express.Router();
  private server: LoginService;

  constructor() {
    this.server = new LoginService();
    this.initializeRouter();
  }

  private initializeRouter() {
    /**
     * ログイン処理
     */
    this.router.post('/', async (req, res, next) => {
      const id = req.body.id;
      const pass = req.body.password;
      try {
        res.send(await this.server.checkLogin(id, pass));
      } catch (error) {
        next(error);
      }
    });
  }
}

export default new LoginRouter().router;
