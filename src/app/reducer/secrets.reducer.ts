import {Action} from '@ngrx/store';
import {SecretsActionTypes} from '../action/secrets.action';
import {SecretsData} from '../common/types';


export const initialList: Array<SecretsData> = [{
  name: '',
  targetSkill: '',
  effect: '',
  staging: ''
}];

export function secretsReducer(state = initialList, action: Action): Array<SecretsData> {
  switch (action.type) {
    case SecretsActionTypes.Add:
      return [...state, action['secretData']];
    case SecretsActionTypes.Update:
      return [...action['secretDataList']];
    default:
      return state;
  }
}
