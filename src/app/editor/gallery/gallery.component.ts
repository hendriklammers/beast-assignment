import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'iw-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getImageData()
      .subscribe(data => console.log(data), err => console.log('error', err));
  }
}
