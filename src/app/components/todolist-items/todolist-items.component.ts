import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { TodoItem } from '../../todoItem';

@Component({
  selector: 'app-todolist-items',
  templateUrl: './todolist-items.component.html',
  styleUrls: ['./todolist-items.component.scss']
})
export class TodolistItemsComponent implements OnInit, OnChanges {
  @Input() flag;
  @Input() todos;
  @Input() searchTodos;
  @Input() startIndex;
  @Input() lastIndex;
  @Output() editListItem = new EventEmitter();
  @Output() deleteListItem = new EventEmitter();

  public renderingTodos: TodoItem[] = [];

  constructor() {}

  ngOnInit() {
  }
  ngOnChanges({flag}: SimpleChanges): void {
    this.renderingTodos = [];
    let i = this.startIndex;
    while(i <= this.lastIndex && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }
  }
  onEditListItem(id: number): void {
    this.editListItem.emit(id);
  }
  onDeleteListItem(id: number): void {
    this.deleteListItem.emit(id);
  }

}
