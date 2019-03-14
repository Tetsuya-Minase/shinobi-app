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
    this.router.post('/', (req, res) => {
      const id = req.body.id;
      const pass = req.body.password;
      try {
        res.send(this.server.checkLogin(id, pass));
      } catch (error) {
        res.status(500).send({message: 'internal server error'});
      }
    });
  }
}

export default new LoginRouter().router;
