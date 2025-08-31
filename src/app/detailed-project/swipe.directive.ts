import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[swipe]'
})
export class SwipeDirective {
  @Output() leftSwipe = new EventEmitter<number>();
  @Output() rightSwipe = new EventEmitter<number>();

  private touchEvent: TouchEvent | null;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: any) {
  this.touchEvent = event;
    this.touchEvent = event;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: any) {
    if (this.touchEvent) {
      const downX: number = this.touchEvent.changedTouches[0].pageX;
      const upX: number = event.changedTouches[0].pageX;

      const difference = downX - upX;
      if (difference >= 10) {
        this.leftSwipe.emit(difference);
      } else if (difference <= -10) {
        this.rightSwipe.emit(difference);
      }
      this.touchEvent = null;
    }
  }
}
