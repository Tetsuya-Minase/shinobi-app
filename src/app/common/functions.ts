import * as  ifs from './interfaces';

/**
 * 汎用関数群用namespace
 */
export namespace Functions {
    export function deepCopy(target: any) {
        return JSON.parse(JSON.stringify(target));
    }
    
    export function listDeleteByKey(list: any[], keyName: any, key: any) {
        let tmpList = list.concat();
        tmpList = tmpList.filter(tmp => tmp[keyName] !== key);
        return tmpList;
    }
    
    /**
     * 対象が定義されているか確認
     * @param target 検査対象
     */
    export function isDefined(target: any) {
        if(target === null || undefined) {
            return false;
        }
        return true;
    }   
}

export namespace WebStorage {
    export function setSessionStorage(key: string, value: string | Array<string>) {
        if (typeof value === 'string') {
            window.sessionStorage.setItem(key, value);
        } else {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
    export function getSessionStorage(key: string) {
        return window.sessionStorage.getItem(key);
    }
    export function delSessionStorage(key: string) {
        window.sessionStorage.removeItem(key);
    }
    export function setLocalStorage(key: string, value: string | Array<string>) {
        if (typeof value === 'string') {
            window.localStorage.setItem(key, value);
        } else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
    export function getLocalStorage(key: string) {
        window.localStorage.getItem(key);
    }
    export function delLocalStorage(key: string) {
        window.localStorage.removeItem(key);
    }
    export const enum STORAGE_KEYS {
        userId = 'userId'
    }
}

export namespace InitInterfaces {
    export function initCharacterData() : ifs.ICharacterData {
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
            background: [initBackground()],
            secrets: [initSecrets()],
            hyorogan: 0,
            jintugan: 0,
            tonkohu: 0
        }
    }

    export function initSecrets(): ifs.ISecretsInfo{
        return {
            name: '',
            targetSkill: '',
            effect: '',
            effectDetai: ''
        }
    }

    export function initBackground(): ifs.IBackGround {
        return {
            name: '',
            type: '',
            point: 0,
            effect: ''
        }
    }
}

export namespace Base64 {
    export function encode(str: string){
        return btoa(unescape(encodeURIComponent(str)));
    }
    export function decode(str: string){
        return decodeURIComponent(escape(atob(str)));
    }
}