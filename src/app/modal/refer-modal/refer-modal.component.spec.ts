import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferModalComponent } from './refer-modal.component';

describe('ReferModalComponent', () => {
  let component: ReferModalComponent;
  let fixture: ComponentFixture<ReferModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
