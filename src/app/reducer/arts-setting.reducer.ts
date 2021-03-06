import {Action} from '@ngrx/store';
import {ArtsSettingActionTypes} from '../action/arts-setting.action';
import {ArtsData} from '../common/types';
import {Enums} from '../common/constants';

export const initialList: Array<ArtsData> = [{
  name: '接近戦攻撃※'
  , type: Enums.ArtsType.atack
  , range: 1
  , cost: 'なし'
  , targetSkill: '自由'
  , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
  , flavor: '通常の接近戦攻撃。'
  , attribute: [Enums.ArtsAttribute.general]
  , clickFlg: false
}];

export function artsSettingReducer(state = initialList, action: Action): Array<ArtsData> {
  switch (action.type) {
    case ArtsSettingActionTypes.Add:
      return [...state, action['artsData']];
    case ArtsSettingActionTypes.Update:
      return [...action['artsDataList']];
    default:
      return state;
  }
}
