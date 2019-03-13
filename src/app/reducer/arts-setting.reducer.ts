import { Action } from '@ngrx/store';
import { ArtsSettingActionTypes } from '../action/arts-setting.action';
import { IArtsData, ArtsType, ArtsAttribute } from '../common/interfaces';

export const initialList: Array<IArtsData> = [{
  name: '接近戦攻撃※'
  , type: ArtsType.atack
  , range: 1
  , cost: 'なし'
  , targetSkill: '自由'
  , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
  , flavor: '通常の接近戦攻撃。'
  , attribute: [ArtsAttribute.general]
  , clickFlg: false
}];

export function artsSettingReducer(state = initialList, action: Action): Array<IArtsData> {
  switch (action.type) {
    case ArtsSettingActionTypes.Add:
      return [...state, action['artsData']];
    case ArtsSettingActionTypes.Update:
      return [...action['artsDataList']];
    default:
      return state;
  }
}
