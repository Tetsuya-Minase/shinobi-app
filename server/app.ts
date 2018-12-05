import * as createError from 'http-errors';
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
// ログ
import * as winston from 'winston';
require('winston-daily-rotate-file');

// router
import { Api } from './routes/api';

class App {
  public express: express.Application = express();
  private logger;
  private apiRouter;

  constructor() {
    this.apiRouter = new Api().router;

    this.initMiddleWare();
    this.initRouting();
    this.initHandleError();
    // 最低限落ちないようにしておく
    process.on('uncaughtException', function(err) {
      this.logger.error(err)
    });
  }

  private initMiddleWare() {
    // ログ設定
    const logFormat = winston.format.printf(info => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    });
    const expressLogRotate = new (winston.transports['DailyRotateFile'])({
      filename: 'log/server-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'info'
    });
    const errorLogRotate = new (winston.transports['DailyRotateFile'])({
      filename: 'log/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'error'
    });
    
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        logFormat
      ),
      transports: [
        expressLogRotate,
        errorLogRotate
      ]
    });
  }

  private initRouting() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(express.static(path.join(__dirname, 'public')));
    this.express.use(helmet());
    this.express.disable('x-powered-by');
    
    // ルーティング
    this.express.use('/api', this.apiRouter);
    this.express.get('*', (req, res) => {
      // res.sendFile(path.join(__dirname, '/public/index.html'));
      res.sendFile(path.join(path.resolve(''), './app/public/index.html'));
    });
  }
  
  private initHandleError() {
    // catch 404 and forward to error handler
    this.express.use((req, res, next) => {
      this.logger.error(`404 not found [url:${req.url}]`);
      next(createError(404));
    });    
    // error handler
    this.express.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      console.log('★', err.message);
      res.locals.error = req.express.get('env') === 'development' ? err : {};
      // log error
      this.logger.error(`500 internal server error [err:${err}]`);
      // render the error page
      res.status(err.status || 500);
      res.send(err);
    });  
  }
}

export default new App().express;
