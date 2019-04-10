import { CharacterListModule } from './character-list.module';

describe('CharacterListModule', () => {
  let characterListModule: CharacterListModule;

  beforeEach(() => {
    characterListModule = new CharacterListModule();
  });

  it('should create an instance', () => {
    expect(characterListModule).toBeTruthy();
  });
});
