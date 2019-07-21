import {Action} from '@ngrx/store';
import {GridData} from '../common/types';

export enum GridActionTypes {
  Add = '[Grid] ADD',
  Update = '[Grid] UPDATE'
}

export class GridAdd implements Action {
  readonly type = GridActionTypes.Add;

  constructor(public grid: GridData) {
  }
}

export class GridUpdate implements Action {
  readonly type = GridActionTypes.Update;

  constructor(public gridList: Array<GridData>) {
  }
}

export type GridActions =
  | GridAdd;
