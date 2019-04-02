import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GridDefs} from '../../../../common/constants';
import {Functions} from '../../../../common/utils';
import {IGridData} from '../../../../common/interfaces';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GridUpdate} from '../../../../action/grid.action';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  @Input() currentRyuha = '';
  public currentHeaderList: Array<any>;
  public currentDataList: Array<Array<IGridData>>;
  private selectedGridList: Array<IGridData>;
  private addSelectedGridList: Function;
  private deleteSelectedGridList: Function;
  private grid$: Observable<Array<IGridData>>;

  constructor(
    private store: Store<Array<IGridData>>
  ) {
    this.grid$ = store.pipe(select('grid'));
    this.grid$.subscribe((gl: Array<IGridData>) => this.selectedGridList = gl);
  }

  ngOnInit() {
    this.currentHeaderList = Functions.deepCopy(GridDefs.TABLE_HEADER);
    this.currentDataList = Functions.deepCopy(GridDefs.TABLE_DATA);
    this.selectedGridList = [];
    this.addSelectedGridList = Functions.addList(this.selectedGridList);
    this.deleteSelectedGridList = Functions.listDeleteByKey(this.selectedGridList);
  }

  ngOnChanges() {
    console.log(this.currentRyuha);
    this.filterGridData(this.currentRyuha);
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
      // this.selectedGridList = this.addSelectedGridList(target);
      this.selectedGridList = Functions.addList(this.selectedGridList)(target);
    } else {
      // this.selectedGridList = this.deleteSelectedGridList('data', target.data);
      this.selectedGridList = Functions.listDeleteByKey(this.selectedGridList)('data', target.data);
    }
    this.store.dispatch(new GridUpdate(this.selectedGridList));
  }

  /**
   * グリッドデータのフィルタリングを行う
   * @param currentRyuha 現在の流派
   */
  private filterGridData(currentRyuha: string) {
    if (currentRyuha === '') {
      return;
    }

    const currentKey = Object.keys(GridDefs.ryuha).filter(k => GridDefs.ryuha[k] === currentRyuha);
    this.currentHeaderList = Functions.deepCopy(GridDefs.TABLE_HEADER).filter(h => !h.category.includes(currentKey[0]));
    const tmpBody: Array<Array<IGridData>> = Functions.deepCopy(GridDefs.TABLE_DATA);
    // TODO: ここの設計終わってるからもう少し考える
    this.currentDataList = [];
    tmpBody.forEach(tdl => {
      const filteredList = tdl.filter(tr => !tr.categories.includes(currentKey[0]));
      this.currentDataList.push(filteredList);
    });
  }
}
