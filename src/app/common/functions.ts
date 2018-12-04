export function deepCopy(target: any) {
    return JSON.parse(JSON.stringify(target));
}

export function listDeleteByKey(list: any[], keyName: any, key: any) {
    let tmpList = list.concat();
    tmpList = tmpList.filter(tmp => tmp[keyName] !== key);
    return tmpList;
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
}

export namespace Base64 {
    export function encode(str: string){
        return btoa(unescape(encodeURIComponent(str)));
    }
    export function decode(str: string){
        return decodeURIComponent(escape(atob(str)));
    }
}