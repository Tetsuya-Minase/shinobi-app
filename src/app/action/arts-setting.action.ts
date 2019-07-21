import { Action } from '@ngrx/store';
import { ArtsData } from '../common/types';

export enum ArtsSettingActionTypes {
  Add = '[ArtsData] ADD',
  Update = '[ArtsData] UPDATE'
}

export class ArtsSettingAdd implements Action {
  readonly type = ArtsSettingActionTypes.Add;

  constructor(public artsData: ArtsData) { }
}

export class ArtsSettingUpdate implements Action {
  readonly type = ArtsSettingActionTypes.Update;

  constructor(public artsDataList: Array<ArtsData>) { }
}
