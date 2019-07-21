import {Action} from '@ngrx/store';
import {BackgroundActionTypes} from '../action/background.action';
import {BackGround} from '../common/types';

export const initialList: Array<BackGround> = [{
  name: '',
  type: '',
  point: 0,
  effect: ''
}];

export function backgroundReducer(state = initialList, action: Action): Array<BackGround> {
  switch (action.type) {
    case BackgroundActionTypes.Add:
      return [...state, action['background']];
    case BackgroundActionTypes.Update:
      return [...action['backgroundList']];
    default:
      return state;
  }
}
