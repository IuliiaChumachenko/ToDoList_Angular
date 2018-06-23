import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HttpRequestRoutingModule } from './http-request/http-request-routing.module';
// import { TodolistRoutingModule} from './todolist/todolist-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full'},
  { path: 'todo', loadChildren: './todolist/todolist.module#TodolistModule'},
  { path: 'about', loadChildren: './http-request/http-request.module#HttpRequestModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
