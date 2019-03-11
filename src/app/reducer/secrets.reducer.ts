import { Action } from '@ngrx/store';
import { SecretsActionTypes } from '../action/secrets.action';
import { ISecretsData } from '../common/interfaces';


export const initialList: Array<ISecretsData> = [{
  name: '',
  targetSkill: '',
  effect: '',
  effectDetai: ''
}];

export function secretsReducer(state = initialList, action: Action): Array<ISecretsData> {
  switch (action.type) {
    case SecretsActionTypes.Add:
      return [...state, action['secretData']];
    default:
      return state;
  }
}
