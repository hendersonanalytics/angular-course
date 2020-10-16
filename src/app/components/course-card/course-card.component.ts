import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // this query only covers the projected content
  @ContentChild('imageContent') image: ElementRef;

  // content child queries can also target a component instance
  @ContentChild(CourseImageComponent) courseImageComponent: CourseImageComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onClickViewCourse(courseId: number) {
    this.viewCourseClicked.emit(courseId);
  }

  ngAfterContentInit() {
    console.log(this.image);
    console.log(this.courseImageComponent);
  }

}
