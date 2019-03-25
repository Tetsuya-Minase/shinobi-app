import * as createError from 'http-errors';
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';

require('winston-daily-rotate-file');

import {Response} from 'Express';

// router
import {Api} from './routes/api';

class App {
  public express: express.Application = express();
  private readonly apiRouter;

  constructor() {
    this.apiRouter = new Api().router;

    this.initRouting();
    this.initHandleError();
    // 最低限落ちないようにしておく
    process.on('uncaughtException', (err) => {
      console.error('えらったー', err);
    });
  }

  private initRouting() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({extended: false}));
    this.express.use(cookieParser());
    this.express.use(express.static(path.resolve(__dirname, '../public')));
    this.express.use(helmet());
    this.express.disable('x-powered-by');

    // ルーティング
    this.express.use(this.apiRouter);
    this.express.get('*', (req, res: Response) => {
      res.sendFile(path.resolve(__dirname, '../public/index.html'));
    });
  }

  private initHandleError() {
    // catch 404 and forward to error handler
    this.express.use((req, res, next) => {
      console.error(`404 not found [url:${req.url}]`);
      next(createError(404));
    });
    // error handler
    this.express.use((err, req, res, next) => {
      // log error
      console.error(`500 internal server error [err:${err}]`);
      // render the error page
      res.status(err.status || 500);
      res.send(err);
    });
  }
}

export default new App().express;
