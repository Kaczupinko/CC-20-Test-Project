export class GameView {
  constructor(model) {
    this.model = model
    this.display = document.querySelector(".game-display");
    this.taskDescription = this.display.querySelector("#task-description");
  }

  updateTaskDescription() {
    this.taskDescription.textContent = this.model.getCurrentTask().description;
  }
}