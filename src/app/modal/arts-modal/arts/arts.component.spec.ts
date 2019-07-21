import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ArtsComponent} from './arts.component';
import {DbService} from 'app/service/db.service';
import {Observable} from 'rxjs';
import * as ifs from '../../../common/types';

describe('ArtsComponent', () => {
  let component: ArtsComponent;
  let fixture: ComponentFixture<ArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtsComponent],
      providers: [{provide: DbService, useValue: Stub.dbServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dataClick: listなし', () => {
    component.selectArtsList = [];
    component.regist.subscribe((r: Array<ifs.ArtsData>) => {
      expect(r[0].clickFlg).toBe(!Stub.dataClickArgsIncludes.clickFlg);
      expect(r[0].name).toEqual(Stub.dataClickArgsIncludes.name);
      expect(component['artsNameList']).toContain(Stub.dataClickArgsIncludes.name);
    });

    component.dataClick(Object.assign({}, Stub.dataClickArgsIncludes));
  });

  it('dataClick: listあり', () => {
    component.selectArtsList = [Stub.dataClickArgsIncludes];
    component['artsNameList'] = [Stub.dataClickArgsIncludes.name];
    component.regist.subscribe((r: Array<ifs.ArtsData>) => {
      expect(r.length).toEqual(0);
      expect(component['artsNameList'].length).toEqual(0);
    });

    component.dataClick(Object.assign({}, Stub.dataClickArgsIncludes));
  });
});

namespace Stub {
  export const dbServiceStub: Partial<DbService> = {
    getArtsData() {
      return Observable.create(o => {
        o.next(['']);
        o.complete();
      });
    }
  };

  export const dataClickArgsIncludes: ifs.ArtsData = {
    clickFlg: true,
    name: 'clicked',
    attribute: [],
    cost: '',
    description: '',
    flavor: '',
    range: 0,
    targetSkill: '',
    type: null
  };

  export const stubSelectedArtsArray: Array<ifs.ArtsData> = [];
}
