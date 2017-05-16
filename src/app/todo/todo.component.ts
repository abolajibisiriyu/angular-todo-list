import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../models/todo/todo";
import {TodoService} from "../services/todo/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDeletedEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  deleteClicked(todo: Todo){
    // console.log(todo);
    this.todoService.deleteTodo(todo).subscribe(
      todo => this.todoDeletedEvent.emit(todo),
      this.handleError
    );

  }

  onDbClick(todo: Todo){
    todo.active = !todo.active;
    this.todoService.updateTodo(todo).subscribe(
      todo => this.todo = todo
    );

  }

  private handleError(error){
    let error_obj = JSON.parse(error._body);
    // console.log(error_obj.errors);
    alert(error_obj.errors[0]);
    return;
  }

}
