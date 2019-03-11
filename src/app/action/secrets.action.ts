import { Action } from '@ngrx/store';
import { ISecretsData } from 'app/common/interfaces';

export enum SecretsActionTypes {
  Add = '[SecretData] ADD'
};

export class SecretAdd implements Action {
  readonly type = SecretsActionTypes.Add;

  constructor(public secretData: ISecretsData) { }
}

