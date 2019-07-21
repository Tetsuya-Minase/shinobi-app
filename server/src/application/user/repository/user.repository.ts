import {UserEntity} from '../../../domain/user/user.entity';

export interface UserRepository {
  findUserByUserId(userId: string, user: UserEntity): Promise<UserEntity>;

  registerUser(user: UserEntity): Promise<UserEntity>;
}
