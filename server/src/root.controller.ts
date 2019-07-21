import {Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express';
import * as path from 'path';

@Controller()
export class RootController {
  @Get()
  root(@Res() res: Response) {
    return res.sendFile(path.resolve(__dirname, 'public/index.html'));
  }
}
