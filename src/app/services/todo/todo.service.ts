import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

// import 'rxjs/add/operator/toPromise';

import {Todo} from '../../models/todo/todo';
import {Http, RequestOptions, Response, Headers} from "@angular/http";

@Injectable()
export class TodoService {
  baseUrl: string = 'http://localhost:8000/api';


  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]>{
   return this.http.get(`${this.baseUrl}/todos`)
      .map(this.extractData)
     .catch(this.handleError);
  }

  addTodo(todo: Todo): Observable<Todo>{
    // console.log(todo);
    let headers = new Headers({ 'Content-Type': 'application/json' }); //x-www-form-urlencoded
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.baseUrl}/todos`, todo)
      .map(this.extractData);
  }

  deleteTodo(todo: Todo): Observable<Todo>{
    return this.http.delete(`${this.baseUrl}/todos/${todo.id}`)
      .map(this.extractData);
  }

  getTodo(id): Observable<Todo>{
    return this.http.get(`${this.baseUrl}/todos/${id}`)
      .map(this.extractData);
  }

  updateTodo(todo: Todo): Observable<Todo>{
    return this.http.patch(`${this.baseUrl}/todos/${todo.id}`, todo)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    let err_msg = error.json();
    console.log(err_msg);
    // return Observable.throw(errMsg);

    //var data = Array();

    return err_msg;
  }

}
