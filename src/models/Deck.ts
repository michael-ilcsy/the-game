import Card from "@/models/Card";
import {range, shuffle} from "@/util/Util";

/**
 * 山札クラス
 */
export default class Deck {
  private cards: Card[]

  constructor() {
    this.cards = this.initialize()
  }

  /**
   * 山札を初期化します
   */
  private initialize() {
    return shuffle(range(2, 99)).map(val => new Card(val))
  }

  /**
   * 山札の残り枚数
   */
  get remainingCount() {
    return this.cards.length
  }

  /**
   * カードを一枚ドローします
   */
  public drawCard() {
    return this.cards.pop()
  }
}
