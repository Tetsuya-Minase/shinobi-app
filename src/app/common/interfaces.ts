/**
 * 忍法タイプ
 */
export enum ArtsType {
    atack = '攻撃忍法'
    , equipment = '装備忍法'
    , support = 'サポート忍法'
};

/**
 * 忍法種類
 */
export enum ArtsAttribute {
    taima = '退魔編'
    , general = '汎用忍法'
    , hasuba = '斜歯忍軍'
    , ryuha = '流派忍法'
    , hiden = '秘伝忍法'
}

/**
 * 忍法用IF
 */
export interface ArtsData {
    /** 忍法名 */
    name: string
    /** 忍法タイプ */
    type: ArtsType
    /** 間合 */
    range: number
    /** コスト */
    cost: string
    /** 指定特技 */
    targetSkill: string
    /** エフェクト */
    description: string
    /** フレーバーテキスト */
    flavor: string
    /** 忍法種類 */
    attribute: Array<ArtsAttribute>
    /** データクリックされたか */
    clickFlg: boolean
};

/**
 * クリックした
 */
export interface IClickIndex {
    name: string
    , colId: string
    , colIndex: number
    , rowIndex: number
}

export interface IUrlList {
    regist: string
    , characterList: string
    , login: string
    , myPage:string
}
