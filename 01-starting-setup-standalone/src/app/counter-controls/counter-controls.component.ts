import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import {  decrement, increment } from '../store/counter.actions';
// import { DecrementAction, IncrementAction } from '../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store:Store) {}
  increment() {
    this.store.dispatch(increment({value:8}))
  }

  decrement() {
    this.store.dispatch(decrement({value:8}))
  }
  // Calling the actions defined without using createActions()
  // increment() {
  //   this.store.dispatch(new IncrementAction(8))
  // }

  // decrement() {
  //   this.store.dispatch(new DecrementAction(8))
  // }
}
