import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
/* components */
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodolistFormComponent } from './components/todolist-form/todolist-form.component';
import { SortlistComponent } from './components/sortlist/sortlist.component';
import { SearchInListComponent } from './components/search-in-list/search-in-list.component';
import { TodolistItemsComponent } from './components/todolist-items/todolist-items.component';
import { PaginationComponent } from './components/pagination/pagination.component';
/* service */
import {LocalStorageService} from './services/local-storage/local-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistFormComponent,
    TodolistItemsComponent,
    PaginationComponent,
    SortlistComponent,
    SearchInListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
