import {Component, OnInit} from '@angular/core';
import {GridDefs} from '../../../../common/constants';
import {Functions} from '../../../../common/utils';
import {IGridData} from '../../../../common/interfaces';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public currentHeaderList;
  public currentDataList: Array<Array<IGridData>>;
  private selectedGridList: Array<IGridData>;

  constructor() {
  }

  ngOnInit() {
    this.currentHeaderList = Functions.deepCopy(GridDefs.TABLE_HEADER);
    this.currentDataList = Functions.deepCopy(GridDefs.TABLE_DATA);
    this.selectedGridList = [];
  }

  /**
   * セルクリック判定
   * @param target クリックしたセル
   */
  public clickCell(target: IGridData) {
    if (target.data === '') {
      return;
    }
    target.isClicked = !target.isClicked;
    if (target.isClicked) {
      Functions.addList(this.selectedGridList, target);
    } else {
      Functions.listDeleteByKey(this.selectedGridList, 'data', target.data);
    }
    console.log(this.selectedGridList);
  }
}
