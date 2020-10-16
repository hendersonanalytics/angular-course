import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // it also works for plain old HTML elements
  @ViewChild('container') tempRef: ElementRef;

  public courses: Course[];

  ngOnInit() {
    this.courses = COURSES;
  }

  ngAfterViewInit() {
    console.log(this.tempRef);
  }

  onViewCourseClicked(courseId: number) {
    console.log('courseId', courseId);
  }

}
