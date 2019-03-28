import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { createObservable} from '../common/util';
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
import { delayWhen, filter, map, take, timeout } from 'rxjs/operators';
import { json } from 'body-parser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const http$ = createObservable('/api/courses');
    // pipes the http observable into the map function rxjs to call a method on all its values returning and array of the response objects property payload
    const courses$ = http$
      .pipe(
        map(res =>  Object.values(res["payload"]) )
      );

    // now subscribe to the courses observable
    courses$.subscribe(
      courses => console.log(courses),
      noop,
      () => console.log('completed')
    )
    


    // ========= end of ngOnInit
  }

}




// ======== Note 1 ====
// The dollar sign = type rxjs Observable the observable functions are blueprints for streams stored in the variables 
// We assign the interval subscribe method to const sub and the call setTimeout on it ...

//  const interval$ = timer(1000,1000);
//  const sub = interval$.subscribe((val) => console.log(val));
//  setTimeout(() => sub.unsubscribe(), 5000);
// =========== end of note 1 ======

//========================== note 2 ====
// Object.create() method to create custom observable  rxjs lib
//  will create a http$ service to hit the api end point api/courses 
//  Observable.create(observer => {
//   three methods abailable 
//   1. observer.complete()
//   2. oberver.next(); can call multiple times 
//   3. observer.error()

// })

// ======= code below shows how to hit an api creating you own observable  ==== console.logs data from endpoint

// const http$ = Observable.create(observer => {
//   fetch('api/courses')
//     .then(data => {
//       return data.json();
//     })
//     .then( response => {
//       observer.next(response);
//       observer.complete()
//     })
//     .catch(err => {
//       observer.error(err);
//     })
// });

// http$.subscribe(data => {
//  console.log(data.payload.forEach(val => {
//    console.log(val)
//  }))
// })
// }

// ========================= note on creating an observable to another format by piping the result into the map method of rxjs lib

// const http$ = createObservable('/api/courses');
//     // pipes the http observable into the map function rxjs to call a method on all its values returning and array of the response objects property payload
//     const courses$ = http$.pipe(
//       map(res => {
//         Object.values(res["payload"])
//       })
//     )
    