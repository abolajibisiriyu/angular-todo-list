import { Component, OnInit } from '@angular/core';
import {TodoService} from "../services/todo/todo.service";
// import {Observable} from "rxjs/Observable";
import {Todo} from "../models/todo/todo";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  // newTodo: Todo;
  errorMessage: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos,
      error => {this.errorMessage = <any>error; console.log(this.errorMessage)}
    );
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  removeTodo(todo: Todo){
    this.todos = this.todos.filter((value, index)=>{
      return value.id != todo.id;
    });
  }

}
