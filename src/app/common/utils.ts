import * as  types from './types';

/**
 * 汎用関数群用namespace
 */
export class Functions {
  /**
   * オブジェクトのディープコピーを行う
   * @param target コピー前オブジェクト
   * @return コピー後オブジェクト
   */
  static deepCopy(target: any): any {
    return JSON.parse(JSON.stringify(target));
  }

  /**
   * リストから指定した値を持つオブジェクトを削除する
   * @param list 削除したいオブジェクトを持つリスト
   */
  static listDeleteByKey(list: any[]) {
    return (keyName: string, key: string) => list.filter(l => l[keyName] !== key);
  }

  /**
   * リストへ追加
   * @param list データが追加されるリスト
   */
  static addList(list: any[]) {
    return (additionalData: any) => [...list, additionalData];
  }

  /**
   * 対象が定義されているか確認
   * @param target 検査対象
   * @returns true: 定義済み / false:未定義 or null
   */
  static isDefined(target: any): boolean {
    return !(target === null || target === undefined);
  }

  /**
   * 対象がリストかつ定義されているか確認
   * @param target 検査対象
   */
  static isListDefined(target: any): boolean {
    if (target === null || target === undefined) {
      return false;
    }
    return Array.isArray(target);
  }

  /**
   * リストが空か調べる
   * @param target
   */
  static isEmptyList(target: any): boolean {
    if (!this.isListDefined(target)) {
      return true;
    }
    return target.length === 0;
  }
}

export class WebStorage {
  static setSessionStorage(key: string, value: string | string[]) {
    if (typeof value === 'string') {
      window.sessionStorage.setItem(key, value);
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getSessionStorage(key: string) {
    return window.sessionStorage.getItem(key);
  }

  static delSessionStorage(key: string) {
    window.sessionStorage.removeItem(key);
  }

  static setLocalStorage(key: string, value: string | string[]) {
    if (typeof value === 'string') {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getLocalStorage(key: string) {
    window.localStorage.getItem(key);
  }

  static delLocalStorage(key: string) {
    window.localStorage.removeItem(key);
  }
}

export class InitTypes {
  static initCharacterData(): types.CharacterData {
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
      selectedSkillList: [],
      displayArtsArray: [],
      background: [this.initBackground()],
      secrets: [this.initSecrets()],
      hyorogan: 0,
      jintugan: 0,
      tonkohu: 0
    };
  }

  static initSecrets(): types.SecretsData {
    return {
      name: '',
      targetSkill: '',
      effect: '',
      staging: ''
    };
  }

  static initBackground(): types.BackGround {
    return {
      name: '',
      type: '',
      point: 0,
      effect: ''
    };
  }
}

export class Base64 {
  static encode(str: string): string {
    return btoa(unescape(encodeURIComponent(str)));
  }

  static decode(str: string): string {
    return decodeURIComponent(escape(atob(str)));
  }
}
