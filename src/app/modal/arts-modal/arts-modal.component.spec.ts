import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsModalComponent } from './arts-modal.component';

describe('ModalComponent', () => {
  let component: ArtsModalComponent;
  let fixture: ComponentFixture<ArtsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
