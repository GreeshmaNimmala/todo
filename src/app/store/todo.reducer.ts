import { TodoList } from '../todo/todo.model';

import * as TodoActions from './todo.actions';

export interface State{
    items:TodoList[],
    loading:boolean,
    error:Error
}

const initialState:State={
    items:[
    ],
    loading:false,
    error:undefined
    
}

export function todoItem(state=initialState,action:TodoActions.TodoActions){

    switch(action.type){

        case TodoActions.ADD_ITEM:
            return {
                ...state,
                loading:true

            }
        case TodoActions.DELETE_ITEM:
            return {
                ...state,
                loading:true
            }
        case TodoActions.LOADING_LIST:
            return{
                ...state,
                loading:true
            }
        case TodoActions.LOADING_LIST_SUCCESS:
            return{
                ...state,
                loading:false
            }
        case TodoActions.LOADING_LIST_FAIL:
            return {
                ...state,
                loading:false
            }
        case TodoActions.ADD_ITEM_SUCCESS:
            return{
                ...state,
                items:[...state.items,action.payload],
                loading:false
            }
        case TodoActions.ADD_ITEM_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        case TodoActions.DELETE_ITEM_SUCCESS:
            return{
                ...state,
                items:state.items.filter((items)=>{
                    return items.id!==action.payload
                }),
                loading:false

            }
        case TodoActions.DELETE_ITEM_FAILURE:
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        default:
            return state;

    }

}