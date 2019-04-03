import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as ifs from '../../common/interfaces';

@Component({
  selector: 'app-arts-modal',
  templateUrl: './arts-modal.component.html',
  styleUrls: ['./arts-modal.component.scss']
})
export class ArtsModalComponent implements OnInit {
  public returnList: Array<ifs.IArtsData> = new Array<ifs.IArtsData>();
  public selectArtsArray: Array<ifs.IArtsData> = new Array<ifs.IArtsData>();

  constructor(
    public dialogRef: MatDialogRef<ArtsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.selectArtsArray = this.data.selectArtsList;
  }

  /**
   * クリックしたデータ反映
   * @param event クリックしたデータ
   */
  public registData(event: Array<ifs.IArtsData>) {
    this.returnList = JSON.parse(JSON.stringify(event));
  }

  /**
   * ダイアログキャンセル
   */
  public returnData() {
    this.dialogRef.close(this.returnList);
  }
}
