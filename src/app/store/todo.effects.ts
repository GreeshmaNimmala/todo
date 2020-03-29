import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as ListActions from './todo.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { of } from 'rxjs';

@Injectable()
export class TodoListEffects{
    @Effect()
    loadingList=this.action$.pipe(ofType(ListActions.LOADING_LIST),
    mergeMap(()=>
        this.listService.getTodoListItems().pipe(map(data=>{
            return new ListActions.LoadingListSuccess(data)
        }),
        catchError(error=>
            of(new ListActions.LoadingListFail(error)))
    )
    ),
    );

    @Effect() addShoppingItem = this.action$
    .pipe(
      ofType(ListActions.ADD_ITEM),
      mergeMap(
        (data) => this.listService.addTodoListItems(data)
          .pipe(
            map(() => new ListActions.AddItemSuccess(data)),
            catchError(error => of(new ListActions.AddItemFailure(error)))
          )
      )
  )

  @Effect() 
  deleteItem = this.action$
    .pipe(
      ofType(ListActions.DELETE_ITEM),
      mergeMap(
        (data) => this.listService.deleteTodoListItems(data)
          .pipe(
            map(() => new ListActions.DeleteItemSuccess(data)),
            catchError(error => of(new ListActions.DeleteItemFailure(error)))
          )
      )
    )







    constructor(public action$:Actions,private listService:TodoService){}
}