import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'iw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    // dragula configuration
    dragulaService.setOptions('images', {
      copy: (el, source: HTMLElement) => {
        // Only copy image when dragging from gallery
        return source.classList.contains('gallery__item');
      },
      copySortSource: false,
      removeOnSpill: true,
      accepts: (el, target: HTMLElement, source, sibling) => {
        // User first has to remove, before dropping a new image
        if (target.classList.contains('grid__item--dropped')) {
          return false;
        }
        // Only allow dropping inside grid
        return target.classList.contains('grid__item');
      }
    });
  }

  ngOnInit() {
    // Listen for drag and remove events to add classes that can be used
    // for css animation
    this.dragulaService.drop.subscribe(args => {
      const target = args[2];
      target.classList.add('grid__item--dropped');

      const source = args[3];
      source.classList.remove('grid__item--dropped');
    });

    this.dragulaService.remove.subscribe(args => {
      const container = args[2];
      container.classList.remove('grid__item--dropped');
    })
  }
}
