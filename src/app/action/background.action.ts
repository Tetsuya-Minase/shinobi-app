import {Action} from '@ngrx/store';
import {BackGround} from '../common/types';

export enum BackgroundActionTypes {
  Add = '[Background] ADD',
  Update = '[Background] UPDATE'
}

export class BackgroundAdd implements Action {
  readonly type = BackgroundActionTypes.Add;

  constructor(public background: BackGround) {
  }
}

export class BackgroundUpdate implements Action {
  readonly type = BackgroundActionTypes.Update;

  constructor(public backgroundList: Array<BackGround>) {
  }
}

export type BackgroundActions =
  | BackgroundAdd;
