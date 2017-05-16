import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../models/todo/todo";
import {TodoService} from "../services/todo/todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo;

  @Output() todoAddedEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  submitTodo(value: string){
    if(value){
      // console.log(value);
      this.todo = new Todo(null, value, true);
      // console.log(this.todo);
      this.todoService.addTodo(this.todo).subscribe(
        todo => this.todoAddedEvent.emit(todo),
        this.handleError
      );
    }

  }

  handleError(error){
    let error_obj = JSON.parse(error._body);
   // console.log(error_obj.errors);
   alert(error_obj.errors[0]);
   return;
  }

}
