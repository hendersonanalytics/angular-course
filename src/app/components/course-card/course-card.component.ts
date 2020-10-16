import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/model/course';



@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() cardIndex: number;
  @Output() viewCourseClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickViewCourse(courseId: number) {
    this.viewCourseClicked.emit(courseId);
  }

}
