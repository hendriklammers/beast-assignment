import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { HeaderComponent } from './header/header.component';
import { DelayDragDirective } from './directives/delay-drag.directive';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule
  ],
  declarations: [
    HeaderComponent,
    DelayDragDirective
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    DragulaModule,
    DelayDragDirective
  ]
})
export class SharedModule { }
