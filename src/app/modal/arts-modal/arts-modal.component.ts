import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as ifs from '../../common/types';

@Component({
  selector: 'app-arts-modal',
  templateUrl: './arts-modal.component.html',
  styleUrls: ['./arts-modal.component.scss']
})
export class ArtsModalComponent implements OnInit {
  public returnList: Array<ifs.ArtsData> = new Array<ifs.ArtsData>();
  public selectArtsArray: Array<ifs.ArtsData> = new Array<ifs.ArtsData>();

  constructor(
    public dialogRef: MatDialogRef<ArtsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit() {
    this.selectArtsArray = this.data.selectArtsList;
  }

  /**
   * クリックしたデータ反映
   * @param event クリックしたデータ
   */
  public registData(event: Array<ifs.ArtsData>) {
    this.returnList = JSON.parse(JSON.stringify(event));
  }

  /**
   * ダイアログキャンセル
   */
  public returnData() {
    this.dialogRef.close(this.returnList);
  }
}
