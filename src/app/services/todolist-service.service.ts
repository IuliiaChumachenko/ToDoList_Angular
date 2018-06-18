import { Injectable } from '@angular/core';
import { TodoItem } from '../todoItem';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  // массив из TodoItem объектов
  private _todos: TodoItem[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  public get todos(): TodoItem[] {
    if (!this._todos) {
      return this._todos = this.localStorageService.fromLocalStorage();
    }
    return this._todos;
  }
  public countDate() {
    let resultDate: string = '';
    const date: any = new Date();
    return resultDate = date.toUTCString().replace('GMT', '').trim();
  }
  public countId() {
    let id = Math.floor(Math.random() * 1000);
    return id;
  }
  public createNewItem(text: string): void {
    const newItem = new TodoItem(this.countId(), text, this.countDate());
    this._todos = [...this._todos, newItem];
    this.localStorageService.toLocalStorage(this._todos);
  }

}
