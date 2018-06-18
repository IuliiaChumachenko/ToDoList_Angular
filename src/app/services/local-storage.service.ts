import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  // функция отправки данных в local storage
  toLocalStorage(todos) {
    const todosINJSONFormat = JSON.stringify(todos);
    localStorage.setItem('todoarr', todosINJSONFormat);
  }

  // функция получения данных из local storage
  fromLocalStorage() {
    return JSON.parse(localStorage.getItem('todoarr'));
  }

}
