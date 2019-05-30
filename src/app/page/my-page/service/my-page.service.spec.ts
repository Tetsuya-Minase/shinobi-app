import { TestBed } from '@angular/core/testing';

import { MyPageService } from './my-page.service';

describe('MyPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPageService = TestBed.get(MyPageService);
    expect(service).toBeTruthy();
  });
});
