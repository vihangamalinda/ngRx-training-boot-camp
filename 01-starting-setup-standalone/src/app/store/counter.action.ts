import { createAction,props,Action} from "@ngrx/store";

// Create Actions with help of ngrx createAction()
export const increment =createAction('[Counter] Increment',props<{value:number}>());
export const decrement =createAction('[Counter] Decrement',props<{value:number}>());

// Exporting and maintaing types of Actions
export const COUNTER_INCREMENT = '[Counter] Increment';
export const COUNTER_DECREMENT ='[Counter] Decrement';


// Creating Actions without ngRx createAction()
export class IncrementAction implements Action {
    readonly type:string= COUNTER_INCREMENT;

    constructor(public value:number){}
}
export class DecrementAction implements Action{
    readonly  type: string= COUNTER_DECREMENT;
    constructor(public value:number){}
}

// Defining Action types
export type CounterActions = IncrementAction;