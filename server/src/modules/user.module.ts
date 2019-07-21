import {HttpModule, Module} from '@nestjs/common';
import {UserController} from '../interfaces/user/user.controller';
import {UserService} from '../application/user/usecase/user.service';
import {UserRepositoryImpl} from '../interfaces/user/user.repository-impl';
import {ConnectDb} from '../infrastructure/connect-db';
import {HttpRequest} from '../infrastructure/http-request';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl
    },
    ConnectDb,
    HttpRequest
  ],
})
export class UserModule {

}
