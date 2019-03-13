import {Action} from '@ngrx/store';
import {BackgroundActionTypes} from '../action/background.action';
import {IBackGround} from '../common/interfaces';

export const initialList: Array<IBackGround> = [{
  name: '',
  type: '',
  point: 0,
  effect: ''
}];

export function backgroundReducer(state = initialList, action: Action): Array<IBackGround> {
  switch (action.type) {
    case BackgroundActionTypes.Add:
      return [...state, action['background']];
    case BackgroundActionTypes.Update:
        return [...action['backgroundList']];
    default:
      return state;
  }
}
