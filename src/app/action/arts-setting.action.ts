import { Action } from '@ngrx/store';
import { IArtsData } from '../common/interfaces';

export enum ArtsSettingActionTypes {
  Add = '[ArtsData] ADD',
  Update = '[ArtsData] UPDATE'
}

export class ArtsSettingAdd implements Action {
  readonly type = ArtsSettingActionTypes.Add;

  constructor(public artsData: IArtsData) { }
}

export class ArtsSettingUpdate implements Action {
  readonly type = ArtsSettingActionTypes.Update;

  constructor(public artsDataList: Array<IArtsData>) { }
}
