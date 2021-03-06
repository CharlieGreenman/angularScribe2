import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-grid-illustrator',
  templateUrl: './grid-illustrator.component.html',
  styleUrls: ['./grid-illustrator.component.scss']
})
export class GridIllustratorComponent implements OnInit {
  gridSettings;
  colors;

  constructor(store: Store<any>) {
    this.gridSettings = store.select('gridSettings');
    this.colors = store.select('colors');
  }

  ngOnInit() {
  }

}
