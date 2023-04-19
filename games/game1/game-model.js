export class GameModel extends EventTarget {
  tasks = []
  constructor(tasksData) {
    super();
    this.tasks = tasksData;
    this.currentTaskIndex = 0;
  }
  getCurrentTaskDescription() {
    return this.tasks[this.currentTaskIndex].description;
  }
  nextTask() {
    this.currentTaskIndex += 1;
    this.dispatchEvent(new Event("next-task"));
  }
}