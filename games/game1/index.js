import { tasks } from "./data.js";
import { GameModel } from "./game-model.js";
import { GameView } from "./game-view.js";
import { GameController } from "./game-controller.js";

function gameInit() {
  const gameModel = new GameModel(tasks)
  const gameView = new GameView(gameModel)
  const gameController = new GameController(gameView, gameModel)
}
document.addEventListener('DOMContentLoaded', gameInit)