import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationNgComponent } from './form-validation-ng.component';

describe('FormValidationNgComponent', () => {
  let component: FormValidationNgComponent;
  let fixture: ComponentFixture<FormValidationNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
