import {Action} from '@ngrx/store';
import {ISecretsData} from 'app/common/interfaces';

export enum SecretsActionTypes {
  Add = '[SecretData] ADD',
  Update = '[SecretData] UPDATE'
}

export class SecretAdd implements Action {
  readonly type = SecretsActionTypes.Add;

  constructor(public secretData: ISecretsData) {
  }
}

export class SecretUpdate implements Action {
  readonly type = SecretsActionTypes.Update;

  constructor(public secretDataList: Array<ISecretsData>) {
  }
}
