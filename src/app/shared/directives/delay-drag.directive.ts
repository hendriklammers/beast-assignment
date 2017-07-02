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
  onMove(e: Event) {
    if (!this.draggable) {
      e.stopPropagation();
      clearTimeout(this.touchTimeout);
    }
  }

  @HostListener('touchstart', ['$event'])
  onDown(e: Event) {
    this.touchTimeout = setTimeout(() => {
      this.draggable = true;
    }, this.dragDelay);
  }

  @HostListener('touchend', ['$event'])
  onUp(e: Event) {
    clearTimeout(this.touchTimeout);
    this.draggable = false;
  }
}
