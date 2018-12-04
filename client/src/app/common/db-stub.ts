import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as ifs from './interfaces';

export class DbData implements InMemoryDbService {
    createDb() {
        const arts: Array<ifs.ArtsData> = [
            {
                name: '接近戦攻撃※'
                , type: ifs.ArtsType.atack
                , range: 1
                , cost: 'なし'
                , targetSkill: '自由'
                , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
                , flavor: '通常の接近戦攻撃。'
                , attribute: [ifs.ArtsAttribute.general]
                , clickFlg: false
            }, {
                name: '鳳凰'
                , type: ifs.ArtsType.atack
                , range: 6
                , cost: '2'
                , targetSkill: '火術'
                , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
                , flavor: '通常の接近戦攻撃。'
                , attribute: [ifs.ArtsAttribute.hasuba, ifs.ArtsAttribute.ryuha]
                , clickFlg: false
            }, {
                name: '鳳凰2'
                , type: ifs.ArtsType.atack
                , range: 6
                , cost: '2'
                , targetSkill: '火術'
                , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
                , flavor: '通常の接近戦攻撃。'
                , attribute: [ifs.ArtsAttribute.hasuba, ifs.ArtsAttribute.ryuha]
                , clickFlg: false
            }, {
                name: '鳳凰'
                , type: ifs.ArtsType.atack
                , range: 6
                , cost: '2'
                , targetSkill: '火術'
                , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
                , flavor: '通常の接近戦攻撃。'
                , attribute: [ifs.ArtsAttribute.hasuba, ifs.ArtsAttribute.ryuha]
                , clickFlg: false
            }, {
                name: '鳳凰'
                , type: ifs.ArtsType.atack
                , range: 6
                , cost: '2'
                , targetSkill: '火術'
                , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
                , flavor: '通常の接近戦攻撃。'
                , attribute: [ifs.ArtsAttribute.hasuba, ifs.ArtsAttribute.ryuha]
                , clickFlg: false
            }, {
                name: '鳳凰'
                , type: ifs.ArtsType.atack
                , range: 6
                , cost: '2'
                , targetSkill: '火術'
                , description: '接近戦。攻撃が成功すると、目標に接近戦ダメージを1点与えることが出来る。'
                , flavor: '通常の接近戦攻撃。'
                , attribute: [ifs.ArtsAttribute.hasuba, ifs.ArtsAttribute.ryuha]
                , clickFlg: false
            }
        ];

        return arts;
    }
}