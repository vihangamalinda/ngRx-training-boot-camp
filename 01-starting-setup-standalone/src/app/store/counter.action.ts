import { createAction,props,Action} from "@ngrx/store";

// Create Actions with help of ngrx createAction()
export const increment =createAction('[Counter] Increment',props<{value:number}>());
export const decrement =createAction('[Counter] Decrement',props<{value:number}>());

// Creating Actions without ngRx createAction()
export class IncrementAction implements Action {
    readonly type:string='[Counter] Increment';

    constructor(public value:number){}
}
export class DecrementAction implements Action{
    readonly  type: string='[Counter] Decrement';
    constructor(public value:number){}
}