import { createReducer,on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

const initialState =0;

// New version of declaring a reducers in ngRx
export const counterReducer = createReducer(
initialState,
on(increment,(state)=>state+1),
on(decrement,(state)=>state-1)
);

// Older way(version) of declaring a reducers in ngRx
// export function counterReducer(state=initialState){
//     return initialState;
// }