import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent implements OnInit {
  @Input() flag;
  @Input() todo;
  @Output() editListItem = new EventEmitter();
  @Output() deleteListItem = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
  onEditListItem(id: number): void {
    this.editListItem.emit(id);
  }
  onDeleteListItem(id: number): void {
    this.deleteListItem.emit(id);
  }

}
