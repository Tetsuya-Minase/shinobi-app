import { TestBed } from '@angular/core/testing';

import { CharacterDetailService } from './character-detail.service';

describe('CharacterDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterDetailService = TestBed.get(CharacterDetailService);
    expect(service).toBeTruthy();
  });
});
