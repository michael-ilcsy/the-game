import {Module, VuexModule, Mutation, getModule, Action} from "vuex-module-decorators"
import store from "@/store/store"
import Deck from '@/models/Deck';
import Card from "@/models/Card";

export interface IGameState {
  handCardNumbers: number[],
  deck: Deck
}

@Module({dynamic: true, store, name: "game"})
class Game extends VuexModule implements IGameState {
  handCardNumbers: number[] = []
  deck: Deck = new Deck()
  selectedCard: Card = new Card(1000)

  @Mutation
  public SET_HAND_CARD_NUMBERS(numbers: number[]) {
    this.handCardNumbers = numbers
  }

  @Mutation
  public SET_DECK(deck: Deck) {
    this.deck = deck
  }

  @Mutation
  public SET_SELECTED_CARD(cardNumber: number) {
    this.selectedCard = new Card(cardNumber)
  }

  @Action
  public initialize() {
    this.SET_DECK(new Deck())
  }
}

export const gameModule = getModule(Game)

