import BaseField from "@/models/field/BaseField";
import Card from "@/models/Card";
import {FieldStatus} from "@/models/field/FieldStatus";

/**
 * 下向きのカード置き場です
 */
export default class LowerField extends BaseField {
  constructor(protected card: Card) {
    super(card)
    this.errorMessage = 'このカードは置けません'
  }

  public getFieldStatus(card: Card): FieldStatus {
    if ((this.topCard.number + 10) === card.number) {
      return FieldStatus.BACK
    }

    if (this.topCard.number > card.number) {
      return FieldStatus.OK
    }
    return FieldStatus.NG
  }
}
