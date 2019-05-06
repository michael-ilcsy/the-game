import {Module, VuexModule, Mutation, getModule, Action} from "vuex-module-decorators"
import store from "@/store/store"
import Deck from '@/models/Deck';
import Card from "@/models/Card";
import LowerField from "@/models/field/LowerField";
import UpperField from "@/models/field/UpperField";

export interface IGameState {
  handCardNumbers: number[],
  deck: Deck,
  selectedCard: Card,
  normaInThisTurn: number,
  lowerFields: LowerField[],
  upperFields: UpperField[]
}

@Module({dynamic: true, store, name: "game"})
class Game extends VuexModule implements IGameState {
  handCardNumbers: number[] = []
  deck: Deck = new Deck()
  selectedCard: Card = new Card(1000)
  normaInThisTurn: number = 2

  lowerFields: LowerField[] = [
    new LowerField(new Card(100)),
    new LowerField(new Card(100)),
  ]
  upperFields: UpperField[] = [
    new UpperField(new Card(1)),
    new UpperField(new Card(1))
  ]

  get deckRemainingCount() {
    return this.deck.remainingCount
  }

  @Mutation
  public SET_HAND_CARD_NUMBERS(numbers: number[]) {
    this.handCardNumbers = numbers.sort((a, b) => a - b)
  }

  @Mutation
  public SET_DECK(deck: Deck) {
    this.deck = deck
  }

  @Mutation
  public SET_SELECTED_CARD(cardNumber: number) {
    this.selectedCard = new Card(cardNumber)
  }

  @Mutation
  public SET_NORMA_IN_THIS_TURN(norma: number) {
    this.normaInThisTurn = norma
    if (this.normaInThisTurn < 0) {
      this.normaInThisTurn = 0
    }
  }

  @Action
  public initialize() {
    this.SET_DECK(new Deck())

    let hands: number[] = []
    for (let i = 0; i < 8; i++) {
      let card = this.deck.drawCard()
      if (!card) {
        continue
      }
      hands.push(card.number)
    }

    this.SET_HAND_CARD_NUMBERS(hands)
  }

  @Action
  public putCard() {
    this.SET_HAND_CARD_NUMBERS(this.handCardNumbers.filter(val => val != this.selectedCard.number))
    this.SET_SELECTED_CARD(1000)
    this.SET_NORMA_IN_THIS_TURN(this.normaInThisTurn - 1)
  }
}

export const gameModule = getModule(Game)

