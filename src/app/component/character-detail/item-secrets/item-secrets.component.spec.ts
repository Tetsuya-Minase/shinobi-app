import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSecretsComponent } from './item-secrets.component';

describe('ItemSecretsComponent', () => {
  let component: ItemSecretsComponent;
  let fixture: ComponentFixture<ItemSecretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSecretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSecretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
