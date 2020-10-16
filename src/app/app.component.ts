import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  // it also works for plain old HTML elements
  @ViewChild('container') tempRef: ElementRef;

  public courses: Course[];
  private _changesSub: Subscription;

  ngOnInit() {
    this.courses = COURSES;
  }

  ngOnDestroy() {
    this._changesSub.unsubscribe();
  }

  ngAfterViewInit() {
    console.log(this.tempRef);
  }

  onViewCourseClicked(courseId: number) {
    console.log('courseId', courseId);
  }

}
