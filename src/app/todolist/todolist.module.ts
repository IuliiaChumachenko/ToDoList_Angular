import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TodolistComponent } from '../components/todolist/todolist.component';
import { TodolistItemComponent } from '../components/todolist-item/todolist-item.component';
import { TodolistFormComponent } from '../components/todolist-form/todolist-form.component';
import { SortlistComponent } from '../components/sortlist/sortlist.component';
import { SearchInListComponent } from '../components/search/search-in-list.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

import {LocalStorageService} from '../services/local-storage/local-storage.service';

import { TodolistRoutingModule } from './todolist-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodolistComponent,
    TodolistFormComponent,
    TodolistItemComponent,
    PaginationComponent,
    SortlistComponent,
    SearchInListComponent,
  ],
  providers: [
    LocalStorageService,
  ]
})
export class TodolistModule { }
