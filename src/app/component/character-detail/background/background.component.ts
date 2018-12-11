import { Component, OnInit, Input } from '@angular/core';
import { IBackGround } from '../../../common/interfaces';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Input() backgroundList: Array<IBackGround>;

  constructor() { }

  ngOnInit() {
    if (this.backgroundList == null) {
      this.backgroundList = [];
      this.addRow();
    }
  }

  public addRow() {
    this.backgroundList.push({
      name: '',
      type: '',
      point: 0,
      effect: ''
    });
  }
}
