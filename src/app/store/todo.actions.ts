import {Action} from '@ngrx/store';
import { TodoList } from '../todo/todo.model';


export const LOADING_LIST='[TodoItem]Loading List';
export const LOADING_LIST_SUCCESS='[TodoItem]Loading List Success';
export const LOADING_LIST_FAIL='[TodoItem]Loading List Fail';
export const ADD_ITEM='[TodoItem] Add Item';
export const ADD_ITEM_SUCCESS = '[TodoItem] Add Item Success';
export const ADD_ITEM_FAILURE = '[TodoItem] Add Item Failure';
export const DELETE_ITEM='[TodoItem]Delete Item';
export const DELETE_ITEM_SUCCESS = '[TodoItem] Delete Item Success';
export const DELETE_ITEM_FAILURE = '[TodoItem] Delete Item Failure'

//export const ADD_ITEM_SUCCESS='[TodoItem] Add Item Success';
//export const ADD_ITEM_FAIL='[TodoItem] Add Item Fail';

export class AddItem implements Action{
    readonly type=ADD_ITEM;
    constructor(public payload:TodoList){}
}

export class DeleteItem implements Action{
    readonly type=DELETE_ITEM;
    constructor(public payload:number){}
}

export class LoadingList implements Action{

    readonly type=LOADING_LIST;

}
export class LoadingListSuccess implements Action{
readonly type=LOADING_LIST_SUCCESS;
constructor(public payload:TodoList){}

}
export class LoadingListFail implements Action{
    readonly type=LOADING_LIST_FAIL;
    constructor(public payload:string){}

}
export class AddItemSuccess implements Action{
    readonly type=ADD_ITEM_SUCCESS;
    constructor(public payload:TodoList){}

}
export class AddItemFailure implements Action{
    readonly type=ADD_ITEM_FAILURE;
    constructor(public payload:string){}

}
export class DeleteItemSuccess implements Action{
    readonly type=DELETE_ITEM_SUCCESS;
    constructor(public payload:number){}

}
export class DeleteItemFailure implements Action{
    readonly type=DELETE_ITEM_FAILURE;
    constructor(public payload:number){}

}

export type TodoActions=AddItem|DeleteItem
|LoadingList
|LoadingListSuccess
|LoadingListFail
|AddItemSuccess
|AddItemFailure
|DeleteItemSuccess
|DeleteItemFailure;

