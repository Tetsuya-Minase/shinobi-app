import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsSettingComponent } from './arts-setting.component';

describe('ArtsSettingComponent', () => {
  let component: ArtsSettingComponent;
  let fixture: ComponentFixture<ArtsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
