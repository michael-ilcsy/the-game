import Card from "@/models/Card";
import {FieldStatus} from "@/models/field/FieldStatus";

export default abstract class BaseField {
  protected errorMessage = ''

  constructor(protected topCard: Card) {
  }

  /**
   * カードがこのフィールドに置けるかどうか
   * @param card
   */
  public abstract getFieldStatus(card: Card): FieldStatus

  /**
   * カードをこのフィールドに置きます
   * @param card
   */
  public putCard(card: Card) {
    if (this.getFieldStatus(card) === FieldStatus.NG) {
      throw new TypeError(this.errorMessage)
    }

    this.topCard = card
  }

  /**
   * 一番上のカードの数字
   */
  get topCardNumber() {
    return this.topCard.number
  }
}
