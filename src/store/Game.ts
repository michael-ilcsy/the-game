import { Module, VuexModule, Mutation, getModule, Action } from "vuex-module-decorators"
import store from "@/store/store"
import Deck from '@/models/Deck';

export interface IGameState {
  handCardNumbers: number[],
  deck: Deck
}

@Module({ dynamic: true, store, name: "game" })
class Game extends VuexModule implements IGameState {
  handCardNumbers: number[] = []
  deck: Deck = new Deck()

  @Mutation
  public SET_HAND_CARD_NUMBERS(numbers: number[]) {
    this.handCardNumbers = numbers
  }

  @Mutation
  public SET_DECK(deck: Deck) {
    this.deck = deck
  }

  @Action
  public initialize() {
    this.SET_DECK(new Deck())
  }
}

export const gameModule = getModule(Game)

