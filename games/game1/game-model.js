export class GameModel extends EventTarget {
  tasks = []
  constructor(tasksData) {
    super();
    this.tasks = tasksData;
    console.log(this.tasks)
    this.currentTaskIndex = 0;
  }
  getCurrentTask() {
    console.log(this.tasks[this.currentTaskIndex])
    return this.tasks[this.currentTaskIndex];
  }
  nextTask() {
    this.currentTaskIndex += 1;
    this.dispatchEvent(new Event("next-task"));
  }
}