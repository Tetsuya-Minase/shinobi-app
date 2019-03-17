import * as express from 'express';
import CharacterRouter from './character.router';
import LoginRouter from './login.router';
import UserRouter from './user.router';

export class Api {
  public router = express.Router();

  constructor() {
    // キャラクター系
    this.router.use('/character', CharacterRouter);
    // ログイン系
    this.router.use('/login', LoginRouter);
    // ユーザ系
    this.router.use('/user', UserRouter);
  }
}
