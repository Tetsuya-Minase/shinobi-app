import { CharacterDetailModule } from './character-detail.module';

describe('CharacterDetailModule', () => {
  let characterDetailModule: CharacterDetailModule;

  beforeEach(() => {
    characterDetailModule = new CharacterDetailModule();
  });

  it('should create an instance', () => {
    expect(characterDetailModule).toBeTruthy();
  });
});
