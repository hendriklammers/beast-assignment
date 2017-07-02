import { Component, OnInit } from '@angular/core';

import { GridBlock } from './grid-block.model';

@Component({
  selector: 'iw-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  blocks: GridBlock[] = [];

  ngOnInit() {
    this.blocks = this.createGrid(3, 3);
  }

  private createGrid(columns: number, rows: number): GridBlock[] {
    const grid: GridBlock[] = [];

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        grid.push(new GridBlock(x, y));
      }
    }

    return grid;
  }
}
