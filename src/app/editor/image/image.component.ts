import { Component, Input } from '@angular/core';

@Component({
  selector: 'iw-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src: string;
  @Input() id: string;
}
