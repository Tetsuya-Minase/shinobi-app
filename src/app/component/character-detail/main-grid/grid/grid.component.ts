import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {GridDefs} from '../../../../common/constants';
import {Functions} from '../../../../common/utils';
import {IGridData} from '../../../../common/interfaces';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GridUpdate} from '../../../../action/grid.action';
import {DataShareService} from '../../../../service/data-share.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  @Input() currentRyuha = '';
  @Output() calculationResult: EventEmitter<any> = new EventEmitter();
  public currentHeaderList: Array<any>;
  public currentDataList: Array<Array<IGridData>>;
  public isDecision: boolean;
  private selectedGridList: Array<IGridData>;
  private addSelectedGridList: Function;
  private deleteSelectedGridList: Function;
  private grid$: Observable<Array<IGridData>>;
  private decision$: Observable<boolean>;

  constructor(
    private store: Store<Array<IGridData>>,
    private dataShareService: DataShareService
  ) {
    this.grid$ = store.pipe(select('grid'));
    this.grid$.subscribe((gl: Array<IGridData>) => this.selectedGridList = gl);
    this.decision$ = this.dataShareService.decision$;
    this.decision$.subscribe(d => this.isDecision = d);
  }

  ngOnInit() {
    this.currentHeaderList = Functions.deepCopy(GridDefs.TABLE_HEADER);
    this.currentDataList = Functions.deepCopy(GridDefs.TABLE_DATA);
    this.selectedGridList = [];
    this.addSelectedGridList = Functions.addList(this.selectedGridList);
    this.deleteSelectedGridList = Functions.listDeleteByKey(this.selectedGridList);
  }

  ngOnChanges() {
    this.filterGridData(this.currentRyuha);
  }

  /**
   * セルクリック判定
   * @param target クリックしたセル
   */
  public addData(target: IGridData) {
    if (target.data === '') {
      return;
    }
    target.isClicked = !target.isClicked;
    if (target.isClicked) {
      this.selectedGridList = Functions.addList(this.selectedGridList)(target);
    } else {
      this.selectedGridList = Functions.listDeleteByKey(this.selectedGridList)('data', target.data);
    }
    this.store.dispatch(new GridUpdate(this.selectedGridList));
  }

  /**
   * 差分の取得を行う
   * @param clickData
   */
  public decision(clickData: IGridData) {
    const calculationTarget = [];
    let decisionTarget = {};
    const currentSelected: Array<string> = this.selectedGridList.map(sg => sg.data);
    this.currentDataList.forEach((row, rowNum) => {
      row.forEach((col, colNum) => {
        if (currentSelected.includes(col.data)) {
          calculationTarget.push({data: col.data, row: rowNum, col: colNum});
        } else if (clickData.data === col.data) {
          decisionTarget = {data: clickData.data, row: rowNum, col: colNum};
        }
      });
    });

    this.calculationResult.emit(this.calculator(decisionTarget)(calculationTarget));
  }

  /**
   * 差分計算
   * @param decisionTarget
   */
  private calculator(decisionTarget) {
    const result = [];
    return (calculationTarget) => {
      Object.keys(calculationTarget).forEach(key => {
        const row = Math.abs(Number(calculationTarget[key]['row']) - Number(decisionTarget['row']));
        const col = Math.abs(Number(calculationTarget[key]['col']) - Number(decisionTarget['col']));
        result.push({data: calculationTarget[key]['data'], sub: `2D6>=${row + col}`, target: decisionTarget.data});
      });
      return result;
    };
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
