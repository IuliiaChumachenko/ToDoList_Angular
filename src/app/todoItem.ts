import { TodoItemInterface } from './todoItemInterface';

export class TodoItem implements TodoItemInterface {
  constructor(public text: string, public date: string) {
    this.text = text;
  }
}
