import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sortlist',
  templateUrl: './sortlist.component.html',
  styleUrls: ['./sortlist.component.scss']
})
export class SortlistComponent implements OnInit {
  @Output() sortListByText = new EventEmitter();
  @Output() sortListByDate = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  onSortListByText(): void {
    this.sortListByText.emit('text');
  }
  onSortListByDate(): void {
    this.sortListByDate.emit('date');
  }
}
