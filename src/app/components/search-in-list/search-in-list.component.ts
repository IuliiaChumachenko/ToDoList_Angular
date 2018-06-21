import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-in-list',
  templateUrl: './search-in-list.component.html',
  styleUrls: ['./search-in-list.component.scss']
})
export class SearchInListComponent implements OnInit {
  @Input() todos;
  @Input() searchTodos;
  @Output() searchInList = new EventEmitter();
  public searcher: FormControl;
  constructor() { }

  ngOnInit() {
    this.searcher = new FormControl('');
    this.searcher.valueChanges.subscribe((value) => {
      this.searchInList.emit(value);
    });
  }
}
