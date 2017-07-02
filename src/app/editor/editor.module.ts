import { NgModule } from '@angular/core';

import { EditorComponent } from './editor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../shared/services/data.service';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditorComponent,
    GalleryComponent,
    GridComponent
  ],
  exports: [
    EditorComponent
  ],
  providers: [
    DataService
  ]
})
export class EditorModule { }
