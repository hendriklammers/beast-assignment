import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'iw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('images', {
      copy: (el, source) => {
        // Only copy image when dragging from gallery
        return source.className === 'gallery__item';
      },
      copySortSource: false,
      removeOnSpill: true,
      accepts: (el, target, source, sibling) => {
        // Only allow dropping inside grid
        return target.className === 'grid__item';
      }
    });

    dragulaService.drag.subscribe(args => {
      console.log(args[1]);
    });

    dragulaService.drop.subscribe(args => {
      const target = args[2];
      console.log(target.children.length);
    });
  }

}
