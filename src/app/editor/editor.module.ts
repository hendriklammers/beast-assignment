import { NgModule } from '@angular/core';

import { EditorComponent } from './editor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../shared/services/data.service';
import { GridComponent } from './grid/grid.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditorComponent,
    GalleryComponent,
    GridComponent,
    ImageComponent
  ],
  exports: [
    EditorComponent
  ],
  providers: [
    DataService
  ]
})
export class EditorModule { }
