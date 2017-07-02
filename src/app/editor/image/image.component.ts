import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'iw-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ImageComponent {
  @Input() src: string;
  @Input() id: string;
}
