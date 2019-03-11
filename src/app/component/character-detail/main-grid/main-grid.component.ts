import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { GridDefs } from '../../../common/constants';
import { Functions } from '../../../common/utils';
import * as ifs from '../../../common/interfaces';

@Component({
    selector: 'app-main-grid',
    templateUrl: './main-grid.component.html',
    styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() ryuha: string = '';
    public gridOptions: GridOptions;
    public buttonString: string = '';
    public decisionFlg: boolean = false;
    public selectList: Array<string> = ['流派を選択', '斜歯忍軍', '鞍馬神流', 'ハグレモノ', '比良坂機関', '私立御斎学園', '隠忍の血統'];
    public selectedSkillList: Array<ifs.IClickIndex> = [];
    public decisionResult: Array<any> = new Array<any>();
    public decisionTarget: string;

    constructor() {
    }

    ngOnInit() {
        // this.buttonString = '流派を選択'
        this.gridOptions = <GridOptions>{};

        // Gridの設定を記述
        this.gridOptions.columnDefs = GridDefs.columnDefs;
        this.gridOptions.rowData = GridDefs.gridData;
        this.gridOptions.rowSelection = 'multiple'; // 複数選択が出来るように指定
        this.gridOptions.suppressRowClickSelection = true;  // チェックボックス以外クリックで反応するか
        this.gridOptions.suppressDragLeaveHidesColumns = true;
        this.gridOptions.suppressMovableColumns = true;
    }

    ngAfterViewInit() {
        // Gridサイズ自動調整
        this.gridOptions.api.sizeColumnsToFit();
    }

    public ngOnChanges() {
        if (this.ryuha) {
            this.pulldownSelect(this.ryuha);
        }
    }

    public pulldownSelect(event: any) {
        this.allVisible();
        switch (event) {
            case GridDefs.ryuha.hasuba:
                // this.gridOptions.columnApi.setColumnVisible('A', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('B', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('B', false, );
                this.gridOptions.columnApi.setColumnVisible('A', false, );
                break;
            case GridDefs.ryuha.kurama:
                this.gridOptions.columnApi.setColumnVisible('B', false);
                this.gridOptions.columnApi.setColumnVisible('C', false);
                // this.gridOptions.columnApi.setColumnVisible('B', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('C', false, 'gridOptionsChanged');
                this.gridOptions.api.sizeColumnsToFit();
                break;
            case GridDefs.ryuha.hagure:
                // this.gridOptions.columnApi.setColumnVisible('C', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('D', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('C', false);
                this.gridOptions.columnApi.setColumnVisible('D', false);
                break;
            case GridDefs.ryuha.hirasaka:
                // this.gridOptions.columnApi.setColumnVisible('D', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('E', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('D', false);
                this.gridOptions.columnApi.setColumnVisible('E', false);

                break;
            case GridDefs.ryuha.otogi:
                // this.gridOptions.columnApi.setColumnVisible('E', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('F', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('E', false);
                this.gridOptions.columnApi.setColumnVisible('F', false);

                break;
            case GridDefs.ryuha.oni:
                // this.gridOptions.columnApi.setColumnVisible('F', false, 'gridOptionsChanged');
                // this.gridOptions.columnApi.setColumnVisible('G', false, 'gridOptionsChanged');
                this.gridOptions.columnApi.setColumnVisible('F', false);
                this.gridOptions.columnApi.setColumnVisible('G', false);
                break;
            default:
        }
    }

    public allVisible(): void {
        this.gridOptions.columnApi.setColumnVisible('A', true);
        this.gridOptions.columnApi.setColumnVisible('B', true);
        this.gridOptions.columnApi.setColumnVisible('C', true);
        this.gridOptions.columnApi.setColumnVisible('D', true);
        this.gridOptions.columnApi.setColumnVisible('E', true);
        this.gridOptions.columnApi.setColumnVisible('F', true);
        this.gridOptions.columnApi.setColumnVisible('G', true);

        this.gridOptions.api.refreshCells({ force: true });
        setTimeout(() => {
            this.gridOptions.api.sizeColumnsToFit();
        }, 100);
    }

    public selectedSkill(clickCell: any) {
        // 行間は値を持たないため即リターン
        if (!clickCell.value) {
            return;
        }
        clickCell.value.clickFlg = !clickCell.value.clickFlg;
        if (clickCell.event.path.length === 22) {
            if (clickCell.value.clickFlg) {
                clickCell.event.target.style.backgroundColor = 'black';
                clickCell.event.target.style.color = 'white';
                this.selectedSkillList.push(this.getIndex(clickCell));
            } else {
                clickCell.event.target.style.backgroundColor = '';
                clickCell.event.target.style.color = 'black';
                this.selectedSkillList = Functions.listDeleteByKey(this.selectedSkillList, 'name', clickCell.value.data);

            }
        } else if (clickCell.event.path.length === 23) {
            if (clickCell.value.clickFlg) {
                clickCell.event.target.parentNode.style.backgroundColor = 'black';
                clickCell.event.target.parentNode.style.color = 'white';
                this.selectedSkillList.push(this.getIndex(clickCell));
            } else {
                clickCell.event.target.parentNode.style.backgroundColor = '';
                clickCell.event.target.parentNode.style.color = 'black';
                this.selectedSkillList = Functions.listDeleteByKey(this.selectedSkillList, 'name', clickCell.value.data);
            }
        }
    }

    public decisionClick(clickCell: any) {
        // 行間は値を持たないため即リターン
        if (!clickCell.value) {
            return;
        }
        this.decisionTarget = clickCell.value.data;
        // 判定初期化
        this.decisionResult = [];
        const click: ifs.IClickIndex = this.getColIndex([this.getIndex(clickCell)]).pop();
        this.selectedSkillList = this.getColIndex(this.selectedSkillList);

        this.selectedSkillList.forEach(skill => {
            const row = Math.abs(skill.rowIndex - click.rowIndex);
            const col = Math.abs(skill.colIndex - click.colIndex);
            const result = { name: skill.name, desisonRes: '2D6>=' + (row + col + 5) }
            this.decisionResult.push(result);
        });
    }

    public getIndex(clickCell: any): ifs.IClickIndex {
        const rowIndex = clickCell.rowIndex + 1;
        const clickIdx: ifs.IClickIndex = { name: '', colId: '', colIndex: null, rowIndex: null };
        clickIdx['name'] = clickCell.value.data;
        clickIdx['colId'] = clickCell.column.colId;
        clickIdx['rowIndex'] = rowIndex;
        return clickIdx;
    }

    public getColIndex(clickItems: Array<ifs.IClickIndex>): Array<ifs.IClickIndex> {
        const allColumns: Array<any> = this.gridOptions.columnApi.getAllColumns();
        const originItems: Array<ifs.IClickIndex> = Functions.deepCopy(clickItems);
        let colIndex: number;
        originItems.forEach((item, idx) => {
            let skipCount: number = 0;
            for (let i = 0; i < allColumns.length; i++) {
                // 非表示カラムはスキップ(カウントを1減らす)
                if (!allColumns[i].visible) {
                    skipCount++;
                    continue;
                }
                if (allColumns[i].colId === item.colId) {
                    colIndex = i + 1 - skipCount;
                    break;
                }
            }
            originItems[idx].colIndex = colIndex;
        });
        return originItems;
    }


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
