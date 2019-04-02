import {Component, OnInit, AfterViewInit, Input, OnChanges} from '@angular/core';
import {GridOptions} from 'ag-grid';
import {GridDefs} from '../../../common/constants';
import {Functions} from '../../../common/utils';
import * as ifs from '../../../common/interfaces';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {
  @Input() ryuha = '';
  public decisionFlg = false;
  public selectedSkillList: Array<ifs.IClickIndex> = [];
  public decisionResult: Array<any> = new Array<any>();
  public decisionTarget: string;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * クリップボードコピー
   * @param idx
   */
  public clipCopy(idx: number) {
    const tempArea = document.createElement('textarea');
    tempArea.textContent = this.decisionResult[idx].desisonRes;
    const bodyElm = document.getElementsByTagName('body')[0];
    bodyElm.appendChild(tempArea);
    tempArea.select();
    document.execCommand('copy');
    bodyElm.removeChild(tempArea);
  }
}
