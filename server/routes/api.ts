import * as express from 'express';
import CharacterRouter from './character.router';
import LoginRouter from './login.router';
import UserRouter from './user.router';

export class Api {
  public router = express.Router();

  constructor() {
    // キャラクター系
    this.router.use(CharacterRouter);
    // ログイン系
    this.router.use(LoginRouter);
    // ユーザ系
    this.router.use(UserRouter);
  }
}
