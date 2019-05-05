import {gameModule} from "@/store/Game";

class GameManager {
  public initialize() {
    gameModule.initialize()
  }
}

export const gameManager = new GameManager()
