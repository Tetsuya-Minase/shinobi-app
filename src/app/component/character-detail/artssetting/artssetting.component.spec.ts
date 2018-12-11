import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtssettingComponent } from './artssetting.component';

describe('ArtssettingComponent', () => {
  let component: ArtssettingComponent;
  let fixture: ComponentFixture<ArtssettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtssettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtssettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
