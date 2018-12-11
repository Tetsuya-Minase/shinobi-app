import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as ifs from '../../common/interfaces';

@Component({
  selector: 'app-arts-modal',
  templateUrl: './arts-modal.component.html',
  styleUrls: ['./arts-modal.component.scss']
})
export class ArtsModalComponent implements OnInit {
  // @Input() public modalId: string;
  // @Input() public selectArtsArray: Array<ifs.ArtsData>;
  // @Output() public regist = new EventEmitter<Array<ifs.ArtsData>>();
  public returnList: Array<ifs.ArtsData> = new Array<ifs.ArtsData>();
  public selectArtsArray: Array<ifs.ArtsData> = new Array<ifs.ArtsData>();

  constructor(
    public dialogRef: MatDialogRef<ArtsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    console.log('★data:', this.data);
    this.selectArtsArray = this.data.selectArtsArray;
    console.log('★selectArtsArray:', this.selectArtsArray);
  }

  public registData(event: Array<ifs.ArtsData>) {
    this.returnList = event.concat();
  }

  public returnData() {
    // this.regist.emit(this.returnList);
  }
}
