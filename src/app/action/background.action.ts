import { Action } from '@ngrx/store';
import { IBackGround } from '../common/interfaces';

export enum BackgroundActionTypes {
  Add = '[Background] ADD'
};

export class BackgroundAdd implements Action {
  readonly type = BackgroundActionTypes.Add;

  constructor(public background: IBackGround) { }
}

export type BackgroundActions =
  | BackgroundAdd;
