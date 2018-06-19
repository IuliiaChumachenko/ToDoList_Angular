import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { TodoItem } from '../todoItem';

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
  @Output() sortListByText = new EventEmitter();
  @Output() sortListByDate = new EventEmitter();
  @Output() searchInList = new EventEmitter();

  public searcher: FormControl;
  public renderingTodos: TodoItem[] = [];

  constructor() {}

  ngOnInit() {
    this.searcher = new FormControl('');
    this.searcher.valueChanges.subscribe((value) => {
      this.searchInList.emit(value);
    });
  }
  ngOnChanges({flag}: SimpleChanges): void {
    this.renderingTodos = [];
    let i = this.startIndex;
    while(i <= this.lastIndex && this.searchTodos[i]) {
      this.renderingTodos = [...this.renderingTodos, this.searchTodos[i]];
      i++;
    }

    // console.log(this.renderingTodos);
  }
  onEditListItem(id: number): void {
    this.editListItem.emit(id);
  }
  onDeleteListItem(id: number): void {
    this.deleteListItem.emit(id);
  }
  onSortListByText(): void {
    this.sortListByText.emit('text');
  }
  onSortListByDate(): void {
    this.sortListByDate.emit('date');
  }
}
