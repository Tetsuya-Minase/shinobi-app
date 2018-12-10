import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import * as ifs from '../../common/interfaces';

@Component({
  selector: 'app-arts-modal',
  templateUrl: './arts-modal.component.html',
  styleUrls: ['./arts-modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public modalId: string;
  @Input() public selectArtsArray: Array<ifs.ArtsData>;
  @Output() public regist = new EventEmitter<Array<ifs.ArtsData>>();
  public returnList: Array<ifs.ArtsData>

  constructor(
  ) { }

  ngOnInit() {
  }

  public registData(event: Array<ifs.ArtsData>) {
    this.returnList = event.concat();
  }

  public returnData() {
    this.regist.emit(this.returnList);
  }
}
