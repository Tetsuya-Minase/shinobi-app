import { UserRegisterModule } from './user-register.module';

describe('UserRegisterModule', () => {
  let userRegisterModule: UserRegisterModule;

  beforeEach(() => {
    userRegisterModule = new UserRegisterModule();
  });

  it('should create an instance', () => {
    expect(userRegisterModule).toBeTruthy();
  });
});
