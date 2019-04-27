import { IGameState } from './Game';
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export interface State {
  game: IGameState
}

export default new Vuex.Store<State>({})
