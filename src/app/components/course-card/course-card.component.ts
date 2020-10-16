import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { CourseImageComponent } from 'src/app/course-image/course-image.component';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterContentInit {
  @Input() course: Course;
  @Input() cardIndex: number;
  @Output() viewCourseClicked = new EventEmitter<number>();

  // content child queries can also target a component instance
  @ContentChild(CourseImageComponent) courseImageComponent: CourseImageComponent;

  // @ContentChildren gets you a query list of all elements matching a selector
  @ContentChildren(CourseImageComponent) courseImageComponents: QueryList<CourseImageComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  onClickViewCourse(courseId: number) {
    this.viewCourseClicked.emit(courseId);
  }

  ngAfterContentInit() {
    console.log(this.courseImageComponent);
    console.log(this.courseImageComponents);
  }

}
