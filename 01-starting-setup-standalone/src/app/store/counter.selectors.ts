import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";

export const selectCount =(state:{counter:number})=> state.counter;
export const selectThripleCount =createSelector(selectCount,(state:number)=>state*3);