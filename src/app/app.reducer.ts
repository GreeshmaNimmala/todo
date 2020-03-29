import * as fromTodoActions from './store/todo.actions';
import * as fromTodoReducer from './store/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{

    list:fromTodoReducer.State

}

/*export const appReducer:ActionReducerMap<AppState>={
    list:fromTodoReducer.todoItem
}*/