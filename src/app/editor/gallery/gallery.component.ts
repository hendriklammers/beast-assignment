import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'iw-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private images = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getImageData()
      .subscribe(data => {
        this.images = data;
      });
  }
}
