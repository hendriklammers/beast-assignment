import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    DragulaModule
  ]
})
export class SharedModule { }
