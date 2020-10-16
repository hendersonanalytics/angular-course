import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  // square brackets denote that this is an attribute selector
  selector: '[highlighted]'
})
export class HighlightedDirective {
  @Input('highlighted') isHighlighted: boolean = false;

  @Output() toggleHighlight = new EventEmitter<boolean>();

  constructor() { }

  // using host listeners to effect highlighted behavior
  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;

    // host listener can also be used to emit custom events
    this.toggleHighlight.emit(this.isHighlighted);
  }

  // it can also pass along event data
  @HostListener('mouseleave', ['$event'])
  mouseLeave(event) {
    console.log(event);
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  // host binding can modify html element attributes
  @HostBinding('attr.disabled')
  get disabled() {
    return "true";
  }

  // it can also modify dom properties
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  // alternate ways of applying classes/styling

  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return true;
  // }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  // @HostBinding('style.border')
  // get cssClasses() {
  //   return '1px solid red'
  // }
}
