import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.scss']
})
export class TodolistFormComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  todos: any = [];

  text: string;

  countDate() {
    let now = new Date();
    return `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  addItemToList(){
    let item = new TodoItem(this.text, this.countDate());
    this.todos.push(item);
    console.log(item);
    console.log(this.todos);
    this.text = '';
  };

  saveItem() {};

}
