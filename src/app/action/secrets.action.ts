import {Action} from '@ngrx/store';
import {SecretsData} from 'app/common/types';

export enum SecretsActionTypes {
  Add = '[SecretData] ADD',
  Update = '[SecretData] UPDATE'
}

export class SecretAdd implements Action {
  readonly type = SecretsActionTypes.Add;

  constructor(public secretData: SecretsData) {
  }
}

export class SecretUpdate implements Action {
  readonly type = SecretsActionTypes.Update;

  constructor(public secretDataList: Array<SecretsData>) {
  }
}
