import { Component, OnInit } from '@angular/core';
import { TodoList } from './todo/todo.model';
import * as fromApp from './app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromListActions from './store/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo';

  items:Observable<{items:TodoList[]}>;
  loading: Observable<Boolean>;
  error: Observable<Error>;

  addItem:FormGroup;

  constructor(private store:Store<fromApp.AppState>){}


  ngOnInit(){

    this.items=this.store.select('list');
    this.loading=this.store.select(store=>store.list.loading);
    this.error=this.store.select(store=>store.list.error);
    this.store.dispatch(new fromListActions.LoadingList());
    this.addItem=new FormGroup({
      'itemNumber':new FormControl(null),
      'itemName':new FormControl('Item',Validators.required)
    });

  }

  onSubmit(){

    const value=this.addItem.value;
    const newItem=new TodoList(value.itemNumber,value.itemName);

    this.store.dispatch(new fromListActions.AddItem(newItem));

    this.addItem.reset();
    
  }
  deleteItem(id:number){
    this.store.dispatch(new fromListActions.DeleteItem(id));
  }
  
}