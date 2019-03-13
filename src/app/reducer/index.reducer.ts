import { IBackGround, IArtsData } from './../common/interfaces';
import { ActionReducerMap } from "@ngrx/store";
import { artsSettingReducer } from './arts-setting.reducer';
import { backgroundReducer } from './background.reducer';
import { secretsReducer } from './secrets.reducer';

export const reducers: ActionReducerMap<any> = {
  artsSetting: artsSettingReducer,
  background: backgroundReducer,
  secrets: secretsReducer
}
