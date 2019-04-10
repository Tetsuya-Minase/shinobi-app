import { CommonComponentModule } from './common-component.module';

describe('CommonComponentModule', () => {
  let commonComponentModule: CommonComponentModule;

  beforeEach(() => {
    commonComponentModule = new CommonComponentModule();
  });

  it('should create an instance', () => {
    expect(commonComponentModule).toBeTruthy();
  });
});
