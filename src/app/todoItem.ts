import { TodoItemInterface } from './todoItemInterface';

export class TodoItem implements TodoItemInterface {
  constructor(public id: number, public text: string, public date: string) {
  }
}
