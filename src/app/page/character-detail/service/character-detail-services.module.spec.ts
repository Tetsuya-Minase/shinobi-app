import { CharacterDetailServicesModule } from './character-detail-services.module';

describe('CharacterDetailServicesModule', () => {
  let characterDetailServicesModule: CharacterDetailServicesModule;

  beforeEach(() => {
    characterDetailServicesModule = new CharacterDetailServicesModule();
  });

  it('should create an instance', () => {
    expect(characterDetailServicesModule).toBeTruthy();
  });
});
