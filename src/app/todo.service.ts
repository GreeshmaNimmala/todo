import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import { TodoList } from './todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url='http://localhost:3000/todo/';

  constructor(private http:HttpClient) { }

  getTodoListItems(){
    return this.http.get<TodoList>(this.url).pipe(
      delay(500)
    )

  }
  addTodoListItems(items:TodoList){
    return this.http.post(this.url,items)

  }
  deleteTodoListItems(id:number){
return this.http.delete(this.url+id).pipe(
  delay(500));
  


  }
}
