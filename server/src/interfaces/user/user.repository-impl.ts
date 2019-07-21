import {Injectable} from '@nestjs/common';
import {ConnectDb} from '../../infrastructure/connect-db';
import {UserEntity} from '../../domain/user/user.entity';
import {HttpRequest} from '../../infrastructure/http-request';
import {UserRepository} from '../../application/user/repository/user.repository';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private readonly url = 'http://localhost:3000';

  constructor(
    private readonly coonect: ConnectDb<UserEntity>,
    private readonly http: HttpRequest<UserEntity>
  ) {
  }

  async findUserByUserId(userId: string, user: UserEntity): Promise<UserEntity> {

    return await this.http.post(`${this.url}/${userId}`, user)
      .toPromise()
      .catch(e => {
        console.error('error in findByUserId');
        throw e;
      });
  }

  async registerUser(user: UserEntity): Promise<UserEntity> {

    return await this.http.post(this.url, user)
      .toPromise()
      .catch(e => {
        console.error('error in post');
        throw e;
      });

  }
}
