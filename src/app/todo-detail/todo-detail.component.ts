import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import {Todo} from "../models/todo/todo";
import {TodoService} from "../services/todo/todo.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;
  errorMessage: string;
  constructor(private todoService: TodoService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.todoService.getTodo(params['id']))
      .subscribe((todo: Todo) => this.todo = todo, error => this.errorMessage =  this.handleError(error));
  }

  private handleError(error){
    let error_obj = JSON.parse(error._body);
    return error_obj.message;
  }

  goBack(){
    this.location.back();
  }

  onSubmit(todo: Todo){
    this.todoService.updateTodo(todo).subscribe(
      todo => this.location.back(),
      error => this.errorMessage = this.handleError(error)
    );

  }

}
