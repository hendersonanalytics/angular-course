import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // square brackets denote that this is an attribute selector
  selector: '[highlighted]'
})
export class HighlightedDirective {
  @Input('highlighted') isHighlighted: boolean = false;

  constructor() { }

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
