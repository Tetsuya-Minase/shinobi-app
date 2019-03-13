import * as  ifs from './interfaces';

/**
 * 汎用関数群用namespace
 */
export class Functions {
    /**
     * オブジェクトのディープコピーを行う
     * @param target コピー前オブジェクト
     * @return コピー後オブジェクト
     */
    public static deepCopy(target: any): any {
        return JSON.parse(JSON.stringify(target));
    }
    
    /**
     * リストから指定した値を持つオブジェクトを削除する
     * @param list 削除したいオブジェクトを持つリスト
     * @param keyName 削除したい値が格納されているキー
     * @param key 削除したい値
     */
    public static listDeleteByKey(list: any[], keyName: any, key: any): any[] {
        return list.filter(l => l[keyName] !== key);
    }
    
    /**
     * 対象が定義されているか確認
     * @param target 検査対象
     * @returns true: 定義済み / false:未定義 or null
     */
    public static  isDefined(target: any): boolean {
        if(target === null || target === undefined) { return false; }
        return true;
    }
    
    /**
     * 対象がリストかつ定義されているか確認
     * @param target 検査対象
     */
    public static  isListDefined(target: any): boolean {
        if (target === null || target === undefined) { return false; }
        if (!Array.isArray(target)) { return false; }
        return true;
    }
}

export class WebStorage {
    public static setSessionStorage(key: string, value: string | Array<string>) {
        if (typeof value === 'string') {
            window.sessionStorage.setItem(key, value);
        } else {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    public static getSessionStorage(key: string) {
        return window.sessionStorage.getItem(key);
    }
    public static delSessionStorage(key: string) {
        window.sessionStorage.removeItem(key);
    }
    public static setLocalStorage(key: string, value: string | Array<string>) {
        if (typeof value === 'string') {
            window.localStorage.setItem(key, value);
        } else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
    public static getLocalStorage(key: string) {
        window.localStorage.getItem(key);
    }
    public static delLocalStorage(key: string) {
        window.localStorage.removeItem(key);
    }
}

export class InitInterfaces {
    public static initCharacterData() : ifs.ICharacterData {
        return {
            userId: '',
            playerName: '',
            characterName: '',
            kana: '',
            regulation: '',
            type: '',
            ryuha: '',
            kairyuha: '',
            ryugi: '',
            enemy: '',
            rank: '',
            achievement: '',
            age: '',
            gender: '',
            face: '',
            belief: '',
            selectedSkillList: {},
            dispArtsArray: {},
            background: [this.initBackground()],
            secrets: [this.initSecrets()],
            hyorogan: 0,
            jintugan: 0,
            tonkohu: 0
        }
    }

    public static initSecrets(): ifs.ISecretsData{
        return {
            name: '',
            targetSkill: '',
            effect: '',
            staging: ''
        }
    }

    public static initBackground(): ifs.IBackGround {
        return {
            name: '',
            type: '',
            point: 0,
            effect: ''
        }
    }
}

export class Base64 {
    public static encode(str: string){
        return btoa(unescape(encodeURIComponent(str)));
    }
    public static decode(str: string){
        return decodeURIComponent(escape(atob(str)));
    }
}
