import {ActionReducerMap} from '@ngrx/store';
import {artsSettingReducer} from './arts-setting.reducer';
import {backgroundReducer} from './background.reducer';
import {secretsReducer} from './secrets.reducer';
import {gridReducer} from './grid.reducer';

export const reducers: ActionReducerMap<any> = {
  artsSetting: artsSettingReducer,
  background: backgroundReducer,
  secrets: secretsReducer,
  grids: gridReducer
};
