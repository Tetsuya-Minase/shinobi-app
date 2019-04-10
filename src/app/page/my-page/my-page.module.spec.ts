import { MyPageModule } from './my-page.module';

describe('MyPageModule', () => {
  let myPageModule: MyPageModule;

  beforeEach(() => {
    myPageModule = new MyPageModule();
  });

  it('should create an instance', () => {
    expect(myPageModule).toBeTruthy();
  });
});
