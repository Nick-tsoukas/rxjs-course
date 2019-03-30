import { Component, OnInit, ɵConsole } from '@angular/core';
import { Course } from "../model/course";
import { interval, Observable, of, timer } from 'rxjs';
import { catchError, delayWhen, map, retryWhen, shareReplay, tap } from 'rxjs/operators';
import { createObservable } from '../common/util';
import { noop } from 'rxjs';

interface Name  {
    first: string;
    last: string;
}


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    
    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;



    ngOnInit() {

        const http$ = createObservable('/api/courses');
        const courses$: Observable<Course[]> = http$
            .pipe(
                map(res => Object.values(res["payload"])),
                tap((res) => console.log(res)),
                shareReplay()
            );
        
        this.advancedCourses$ = courses$
                .pipe(
                    map(courses => courses
                        .filter(course => course.category == "ADVANCED"))
                )
        this.beginnerCourses$ = courses$
                .pipe(
                    map(courses => courses
                        .filter(course => course.category == "BEGINNER"))
                )
        
    
            
        
        
       
    } 

}
