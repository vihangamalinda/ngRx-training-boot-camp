import { createAction,props,Action} from "@ngrx/store";

// Exporting and maintaing types of Actions
export const COUNTER_INIT = '[Counter] Init';
export const COUNTER_SET = '[Counter] Set';
export const COUNTER_INCREMENT = '[Counter] Increment';
export const COUNTER_DECREMENT ='[Counter] Decrement';

// Create Actions with help of ngrx createAction()
export const init =createAction(COUNTER_INIT);
export const set = createAction(COUNTER_SET,props<{value:number}>());
export const increment =createAction(COUNTER_INCREMENT,props<{value:number}>());
export const decrement =createAction(COUNTER_DECREMENT,props<{value:number}>());

// Creating Actions without ngRx createAction()
// export class IncrementAction implements Action {
//     readonly type:string= COUNTER_INCREMENT;

//     constructor(public value:number){}
// }
// export class DecrementAction implements Action{
//     readonly  type: string= COUNTER_DECREMENT;
//     constructor(public value:number){}
// }

// Defining Action types
// export type CounterActions = IncrementAction;