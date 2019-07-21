import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DbService} from '../../../service/db.service';
import * as ifs from '../../../common/types';
import {Functions} from '../../../common/utils';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
  @Input() public selectArtsList: Array<ifs.ArtsData>;
  @Output() public regist = new EventEmitter<Array<ifs.ArtsData>>();
  public artsArray: Array<ifs.ArtsData>;
  private artsNameList: Array<string> = [];
  private deleteSelectArtsList: Function;
  private addSelectArtsList: Function;

  constructor(
    private dbService: DbService
  ) {
  }

  ngOnInit() {
    this.deleteSelectArtsList = Functions.listDeleteByKey(this.selectArtsList);
    this.addSelectArtsList = Functions.addList(this.selectArtsList);
  }

  /**
   * クリックデータを親コンポーネントに通知する
   * @param arts クリックしたデータ
   */
  public dataClick(arts: ifs.ArtsData) {
    arts.clickFlg = !arts.clickFlg;

    if (this.artsNameList.includes(arts.name)) {
      this.selectArtsList = this.deleteSelectArtsList('name', arts.name);
    } else {
      this.selectArtsList = this.addSelectArtsList(arts);
    }
    this.artsNameList = this.selectArtsList.map(s => s.name);
    this.regist.emit(this.selectArtsList);
  }
}
