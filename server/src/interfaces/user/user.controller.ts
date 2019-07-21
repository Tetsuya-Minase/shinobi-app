import {Body, Controller, Inject, Param, Post, Res} from '@nestjs/common';
import {UserService} from '../../application/user/usecase/user.service';
import {UserRepository} from '../../application/user/repository/user.repository';
import {Response} from 'express';
import {UserEntity} from '../../domain/user/user.entity';

@Controller('api/user')
export class UserController {

  constructor(
    private readonly service: UserService,
    @Inject('UserRepository') private readonly repository: UserRepository
  ) {
  }

  @Post('/:userId')
  public async login(
    @Res() response: Response,
    @Param('userId') userId: string,
    @Body() body: UserEntity
  ) {
    const result = await this.repository.findUserByUserId(userId, body);
    response.send({result: result});
  }

  @Post()
  public async registerUser(
    @Res() response: Response,
    @Body() body: UserEntity
  ) {
    const result = await this.repository.registerUser(body);
    response.send({result: result});
  }
}
