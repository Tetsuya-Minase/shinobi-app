import {Action} from '@ngrx/store';
import {GridActionTypes} from '../action/grid.action';
import {IGridData} from '../common/interfaces';

export const initialList: Array<IGridData> = [{
  data: '',
  isClicked: false,
  categories: []
}];

export function gridReducer(state = initialList, action: Action): Array<IGridData> {
  switch (action.type) {
    case GridActionTypes.Add:
      return [...state, action['grid']];
    case GridActionTypes.Update:
      return [...action['gridList']];
    default:
      return state;
  }
}
