import { Directive, ElementRef, HostListener } from '@angular/core';

// Used to add some delay before drag event gets triggered on touch devices
@Directive(
  { selector: '[iwDelayDrag]' }
)
export class DelayDragDirective {
  dragDelay = 200;
  draggable = false;
  touchTimeout: any;

  @HostListener('touchmove', ['$event'])
  onMove(event: Event) {
    if (!this.draggable) {
      event.stopPropagation();
      clearTimeout(this.touchTimeout);
    }
  }

  @HostListener('touchstart', ['$event'])
  onDown(event: Event) {
    this.touchTimeout = setTimeout(() => {
      this.draggable = true;
    }, this.dragDelay);
  }

  @HostListener('touchend', ['$event'])
  onUp(event: Event) {
    clearTimeout(this.touchTimeout);
    this.draggable = false;
  }
}
