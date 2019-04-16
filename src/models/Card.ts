/**
 * カードクラス
 */
export default class Card {
  constructor(private readonly _number: number) {
  }

  /**
   * カードの数字を取得
   */
  get number() {
    return this._number
  }
}
