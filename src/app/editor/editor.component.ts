import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'iw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    DragulaService
  ]
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
