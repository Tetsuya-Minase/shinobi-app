export class Utils {
  /**
   * 対象がリストかつ定義済みで有ることのチェック
   * @param target チェック対象
   * @return チェック結果
   */
  public static isDefinedArray(target: any): boolean {
    if (target === null || target === undefined) {
      return false;
    }
    return Array.isArray(target);
  }

  /**
   * 対象が定義済みであることのチェック
   * @param target チェック対象
   * @return チェック結果
   */
  public static isDefined(target: any): boolean {
    return !(target === null || target === undefined);
  }
}
