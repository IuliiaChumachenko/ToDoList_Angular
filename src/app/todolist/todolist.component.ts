import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../todoItem';
import {LocalStorageService} from '../services/local-storage.service';
// import {isDefaultChangeDetectionStrategy} from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-todolist-service',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  // changeDetection: ChangeDetectionStrategy.onPush
})

export class TodolistComponent implements OnInit {
  public todos: TodoItem[] = [];
  public searchTodos: TodoItem[];
  public maxItemOnPage: number = 3;
  public editedItemId: number;
  public startIndex: number = 0;
  public lastIndex: number = this.startIndex + this.maxItemOnPage - 1;
  public editedItemText: string;
  flag: boolean = true;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    if (this.localStorageService.fromLocalStorage()) {
      this.todos = this.localStorageService.fromLocalStorage();
    }
    this.searchTodos = this.todos;
  }
  // public get todos(): TodoItem[] {
  //   if (!this._todos) {
  //     return this._todos = this.localStorageService.fromLocalStorage();
  //   }
  //   return this._todos;
  // }
  // public set todos(newItem: TodoItem) {
  //   this.todos = [...this.todos, newItem];
  // }

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
  public countDate() {
    let resultDate: string = '';
    const date: any = new Date();
    return resultDate = date.toUTCString().replace('GMT', '').trim();
  }
  public createNewItem(text: string): void {
    const newItem = new TodoItem(this.countId(), text, this.countDate());
    // console.log(newItem);
    this.todos = [...this.todos, newItem];
    this.searchTodos = this.todos;
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
    // console.log(this.editedItemText);
  }
  public updateItem(text: string): void {
    const editedItem = this.todos.filter(todo => todo.id === this.editedItemId);
    editedItem[0].text = text;
    editedItem[0].date = this.countDate();
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
    this.localStorageService.toLocalStorage(this.todos);
    this.flag = !this.flag;
  }
  public searchInList(searchText: string) {
    this.searchTodos = this.todos.filter(item => item.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
  // public searchInList(searchText: string) {
  //   if (!searchText) {
  //     return;
  //   }
  //   const lastElem: number = searchText.length;
  //   this.todos.forEach((item) => {
  //     if (item.text.slice(0, lastElem) ===  searchText) {
  //       this.searchTodos = [...this.searchTodos, item];
  //     }
  //   });
  //   searchText = '';
  //   if (this.searchTodos.length === 0) {
  //     document.getElementById('searchLine').value = 'No matches';
  //     setTimeout(() => {
  //       document.getElementById('searchLine').value = '';
  //     }, 3000);
  //     return;
  //   }
  // }
  public selectPage(pageNumber: number){
    this.startIndex = this.maxItemOnPage * (pageNumber - 1);
    this.lastIndex = this.startIndex + this.maxItemOnPage - 1;
    // console.log(this.startIndex, this.lastIndex);
    this.flag = !this.flag;
  }
}
