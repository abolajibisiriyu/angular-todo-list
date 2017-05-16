import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';

import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', component: TodoListComponent},
  {path: 'todos/:id', component: TodoDetailComponent},
  {path: 'about', loadChildren: './AboutModule/about.module#AboutModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
