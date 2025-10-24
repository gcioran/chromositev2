import { NgModule } from '@angular/core';
import { SwipeDirective } from './detailed-project/swipe.directive';

@NgModule({
  declarations: [SwipeDirective],
  exports: [SwipeDirective]
})
export class SharedModule {}
