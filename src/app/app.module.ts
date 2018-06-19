import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistFormComponent } from './todolist-form/todolist-form.component';
import { TodolistItemsComponent } from './todolist-items/todolist-items.component';

//services
import {LocalStorageService} from './services/local-storage.service';
import {TodolistService} from './services/todolist-service.service';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistFormComponent,
    TodolistItemsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalStorageService,
    TodolistService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
