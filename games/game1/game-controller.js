export class GameController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    const controlButtons = document.querySelector(".control-buttons");
    const nextTaskButton = controlButtons.querySelector("#next-btn");
    nextTaskButton.addEventListener("click", () => {
      this.model.nextTask();
    });
    this.model.addEventListener("next-task", () => {
      this.view.updateTaskDescription();
    })
  }
}