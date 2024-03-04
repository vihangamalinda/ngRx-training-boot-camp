import { Action, createReducer,on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";
// import { COUNTER_DECREMENT, COUNTER_INCREMENT, CounterActions, DecrementAction, IncrementAction } from "./counter.action";


const initialState =0;

// New version of declaring a reducers in ngRx
export const counterReducer = createReducer(
initialState,
on(increment,(state,action)=>state+action.value),
on(decrement,(state,action)=>state-action.value)
);

// Older way(version) of declaring a reducers in ngRx
// export function counterReducer(state=initialState,action:CounterActions | Action){
//     if(action.type === COUNTER_INCREMENT){
//         return state+(action as IncrementAction).value;
//     }else if(action.type === COUNTER_DECREMENT){
//         return state-(action as DecrementAction).value;
//     }
//     return state;
// }