import {Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() todos;
  @Input() searchTodos;
  @Input() maxItemOnPage;
  @Output() selectPage = new EventEmitter();
  public selbut;
  public paginationPages = [];
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges({todos}: SimpleChanges): void {
    this.paginationPages = [];
    for (let i = 1; i < this.todos.length / this.maxItemOnPage + 1; i++) {
      this.paginationPages = [...this.paginationPages, i];
    }
    // console.log(this.paginationPages);
  }
  onSelectPage(page: Number) {
    this.selectPage.emit(page);
    this.selbut = page;
  }
}
