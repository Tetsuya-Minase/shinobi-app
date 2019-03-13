import {Action} from '@ngrx/store';
import {IBackGround} from '../common/interfaces';

export enum BackgroundActionTypes {
  Add = '[Background] ADD',
  Update = '[Background] UPDATE'
}

export class BackgroundAdd implements Action {
  readonly type = BackgroundActionTypes.Add;

  constructor(public background: IBackGround) {
  }
}

export class BackgroundUpdate implements Action {
  readonly type = BackgroundActionTypes.Update;

  constructor(public backgroundList: Array<IBackGround>) {
  }
}

export type BackgroundActions =
  | BackgroundAdd;
