import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe} from '@angular/common';
import { selectCount,selectThripleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[AsyncPipe]
})
export class CounterOutputComponent {

  count$:Observable<number>;
  thripleCount$:Observable<number>;

  constructor(private store:Store<{counter:number}>) {
    // this.count$ =store.select('counter');
    this.count$ =store.select(selectCount); // passing the selector funtion as a value
    this.thripleCount$=store.select(selectThripleCount);
  }

}
