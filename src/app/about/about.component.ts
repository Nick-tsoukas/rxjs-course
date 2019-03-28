import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   const interval$ = timer(1000,1000);
   const sub = interval$.subscribe((val) => console.log(val));

   setTimeout(() => sub.unsubscribe(), 5000);
  }

}

//  the dollar sign = type rxjs Observable the observable functions are blueprints for streams stored in the variables 
// We assign the interval subscribe method to const sub and the call setTimeout on it ...
  //  const interval$ = timer(1000,1000);
  //  const sub = interval$.subscribe((val) => console.log(val));

  //  setTimeout(() => sub.unsubscribe(), 5000);