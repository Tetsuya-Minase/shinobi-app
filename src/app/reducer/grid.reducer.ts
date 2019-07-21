import {Action} from '@ngrx/store';
import {GridActionTypes} from '../action/grid.action';
import {GridData} from '../common/types';

export const initialList: Array<GridData> = [{
  data: '',
  isClicked: false,
  categories: []
}];

export function gridReducer(state = initialList, action: Action): Array<GridData> {
  switch (action.type) {
    case GridActionTypes.Add:
      return [...state, action['grid']];
    case GridActionTypes.Update:
      return [...action['gridList']];
    default:
      return state;
  }
}
