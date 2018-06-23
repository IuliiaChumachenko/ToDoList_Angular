import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../todoItem';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {countDate} from '../../helpers/countDate';

@Component({
  selector: 'app-todolist-service',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {
  public todos: TodoItem[] = [];
  public searchTodos: TodoItem[];
  public renderingTodos: TodoItem[] = [];
  public maxItemOnPage: number = 3;
  public startIndex: number = 0;
  public lastIndex: number = this.startIndex + this.maxItemOnPage - 1;
  public editedItemId: number;
  public editedItemText: string;
   constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    if (this.localStorageService.fromLocalStorage()) {
      this.todos = this.localStorageService.fromLocalStorage();
    }
    this.searchTodos = this.todos;
    this.renderingTodos = [];
    let i = 0;
    while (i < this.maxItemOnPage && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }
  }
  public countId() {
    let mustChangeId = false;
    let id = 0;
    do {
      id = Math.floor(Math.random() * 1000);
      this.todos.forEach((item) => {
        if(item.id === id) {
          mustChangeId = true;
        } else {
          mustChangeId = false;
        }
      });
    } while (mustChangeId)
    return id;
  }
  public createNewItem(text: string): void {
    const newItem = new TodoItem(this.countId(), text, countDate());
    this.todos = [...this.todos, newItem];
    this.searchTodos = this.todos;
    this.renderingTodos = [];
    let i = 0;
    while (i < this.maxItemOnPage && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }
    this.localStorageService.toLocalStorage(this.todos);
  }
  public deleteItem(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.searchTodos = this.todos;
    this.localStorageService.toLocalStorage(this.todos);
  }
  public getIdOfEditedItem(id: number): void {
    this.editedItemId = id;
    const editedItem = this.todos.filter(todo => todo.id === id);
    this.editedItemText = editedItem[0].text;
  }
  public updateItem(text: string): void {
    const editedItem = this.todos.filter(todo => todo.id === this.editedItemId);
    editedItem[0].text = text;
    editedItem[0].date = countDate();
    this.searchTodos = this.todos;
    this.localStorageService.toLocalStorage(this.todos);
    this.editedItemText = '';
    this.editedItemId = 0;
  }
  public sortList(sortParametr: string): void{
    this.todos.sort(function (a, b) {
      if (a[sortParametr] < b[sortParametr]) {
        return -1;
      }
      if (a[sortParametr] > b[sortParametr]) {
        return 1;
      }
    });
    this.searchTodos = this.todos;
    this.renderingTodos = [];
    let i = 0;
    while (i < this.maxItemOnPage && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }
    this.localStorageService.toLocalStorage(this.todos);
  }
  public searchInList(searchText: string) {
    this.searchTodos = [];
    this.searchTodos = this.todos.filter(item => item.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    let i = 0;
    this.renderingTodos = [];
    while (i < this.maxItemOnPage && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }

  }
  public selectPage(pageIndexes){
    this.startIndex = pageIndexes.start;
    this.lastIndex = pageIndexes.last;

    this.renderingTodos = [];
    let i = this.startIndex;
    while (i <= this.lastIndex && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }
  }
}
