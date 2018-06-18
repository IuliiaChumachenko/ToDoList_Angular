import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodolistService} from '../services/todolist-service.service';
import { LocalStorageService } from '../services/local-storage.service';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todolist-items',
  templateUrl: './todolist-items.component.html',
  styleUrls: ['./todolist-items.component.scss']
})
export class TodolistItemsComponent implements OnInit {
  @Input() todos;
  @Output() editListItem = new EventEmitter();
  @Output() deleteListItem = new EventEmitter();
  @Output() sortListByText = new EventEmitter();
  @Output() sortListByDate = new EventEmitter();
  @Output() searchInList = new EventEmitter();
  public searchText: string;
  constructor() {}

  ngOnInit() {
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
  onSearchInList(): void {
    this.searchInList.emit(this.searchText);
  }
}
