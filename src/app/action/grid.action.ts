import {Action} from '@ngrx/store';
import {IGridData} from '../common/interfaces';

export enum GridActionTypes {
  Add = '[Grid] ADD',
  Update = '[Grid] UPDATE'
}

export class GridAdd implements Action {
  readonly type = GridActionTypes.Add;

  constructor(public grid: IGridData) {
  }
}

export class GridUpdate implements Action {
  readonly type = GridActionTypes.Update;

  constructor(public gridList: Array<IGridData>) {
  }
}

export type GridActions =
  | GridAdd;
