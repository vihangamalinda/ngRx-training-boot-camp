import { createReducer } from "@ngrx/store";

const initialState =0;

// New version of declaring a reducers in ngRx
export const counterReducer = createReducer(
initialState,
);

// Older way(version) of declaring a reducers in ngRx
// export function counterReducer(state=initialState){
//     return initialState;
// }