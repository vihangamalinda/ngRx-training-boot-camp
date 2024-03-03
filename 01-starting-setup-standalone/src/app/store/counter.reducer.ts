import { createReducer,on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

const initialState =0;

// New version of declaring a reducers in ngRx
export const counterReducer = createReducer(
initialState,
on(increment,(state,action)=>state+action.value),
on(decrement,(state,action)=>state-action.value)
);

// Older way(version) of declaring a reducers in ngRx
// export function counterReducer(state=initialState){
//     return initialState;
// }