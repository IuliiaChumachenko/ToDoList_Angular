import { Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import {b} from '@angular/core/src/render3';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.scss']
})
export class TodolistFormComponent implements OnInit, OnChanges {

  @Input() editedItemText;
  @Output() getTextForNewItem = new EventEmitter();
  @Output() updateText = new EventEmitter();
  public text: string = '';

  constructor() { }
  ngOnInit() {
  }
  ngOnChanges({editedItemText}: SimpleChanges): void {
    if (editedItemText) {
      this.text = editedItemText.currentValue;
      if (editedItemText.currentValue) {
        document.getElementById('addBtn').style.display = 'none';
        document.getElementById('saveBtn').style.display = 'block';
      }
    }
  }
  onGetTextForNewItem(): void {
    if (this.text) {
      this.getTextForNewItem.emit(this.text);
      this.text = '';
    } else {
      alert ('Please, enter a task');
    }
  }
  saveNewTextForItem(): void {
    this.updateText.emit(this.text);
    document.getElementById('addBtn').style.display = 'block';
    document.getElementById('saveBtn').style.display = 'none';
    this.text = '';
  }
}
