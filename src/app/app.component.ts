import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    courses = COURSES;
    @ViewChildren(CourseCardComponent, {read: ElementRef}) cards : QueryList<ElementRef>;

    // one way of querying the directive instance
    @ViewChild(HighlightedDirective) highlighted: HighlightedDirective;

    // alternate way - read the directive instance off the element the directive is in
    @ViewChild(CourseCardComponent, { read: HighlightedDirective }) highlightedAlt: HighlightedDirective;

    constructor() { }

    ngAfterViewInit() {
      console.log(this.highlighted);
      console.log(this.highlightedAlt);
    }

    onCourseSelected(course: Course) {

    }

    // capture the toggleHighlight custom event from the highlighted directive
    onToggleHighlight(isHighlighted: boolean) {
      console.log(isHighlighted);
    }

}
