import { Action } from '@ngrx/store';
import { IArtsData } from '../common/interfaces';

export enum ArtsSettingActionTypes {
  Add = '[ArtsData] ADD'
};

export class ArtsSettingAdd implements Action {
  readonly type = ArtsSettingActionTypes.Add;

  constructor(public artsData: IArtsData) { }
}

