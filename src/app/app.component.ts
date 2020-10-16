import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './components/course-card/course-card.component';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // returns first matching element
  // view child can have a component class or a template reference as its param
  @ViewChild(CourseCardComponent) card: CourseCardComponent;
  @ViewChild('cardRef1') cardRef1: CourseCardComponent;
  // pass read: ElementRef in as an option if you want to get an instance of ElementRef, rather
  // than the component instance
  @ViewChild('cardRef2', {read: ElementRef}) cardRef2: ElementRef;

  // it also works for plain old HTML elements
  @ViewChild('container') tempRef: ElementRef;

  public courses: Course[];

  ngOnInit() {
    this.courses = COURSES;
  }

  ngAfterViewInit() {
    console.log(this.card);
    console.log(this.cardRef1);
    console.log(this.cardRef2);
    console.log(this.tempRef);
    // we get errors if we try to change the data affecting the component in these AfterView lifecycle hooks
    // this.courses[1].description = 'blah';
  }

  onViewCourseClicked(courseId: number) {
    console.log('courseId', courseId);
  }

}
