import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './components/course-card/course-card.component';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  // returns first matching element
  // view child can have a component class or a template reference as its param
  @ViewChild(CourseCardComponent) card: CourseCardComponent;
  @ViewChild('cardRef1') cardRef1: CourseCardComponent;
  // pass read: ElementRef in as an option if you want to get an instance of ElementRef, rather
  // than the component instance
  @ViewChild('cardRef2', {read: ElementRef}) cardRef2: ElementRef;

  // it also works for plain old HTML elements
  @ViewChild('container') tempRef: ElementRef;

  // we can also query all elements of a given type
  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;

  // you can also pass read: ElementRef in as an option with ViewChildren
  @ViewChildren(CourseCardComponent, { read: ElementRef }) cardRefs: QueryList<ElementRef>;

  public courses: Course[];
  private _changesSub: Subscription;

  ngOnInit() {
    this.courses = COURSES;
  }

  ngOnDestroy() {
    this._changesSub.unsubscribe();
  }

  ngAfterViewInit() {
    console.log(this.card);
    console.log(this.cardRef1);
    console.log(this.cardRef2);
    console.log(this.tempRef);
    console.log(this.cards);
    console.log(this.cardRefs);

    // I don't get the same subscription as him
    this._changesSub = this.cards.changes.subscribe(cards => {
      console.log(cards);
    });
  }

  onEditCoursesClicked() {
    this.courses = this.courses.slice().reverse();
  }

  onViewCourseClicked(courseId: number) {
    console.log('courseId', courseId);
  }

}
