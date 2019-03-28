import {Observable } from 'rxjs';

export function createObservable(url: string) {
    return Observable.create(observer => {
     fetch(url)
       .then(data => {
         return data.json();
       })
       .then( response => {
         observer.next(response);
         observer.complete()
       })
       .catch(err => {
         observer.error(err);
       })
   });

 }