import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../../service/db.service';
import * as ifs from '../../../common/interfaces';
import { Functions } from '../../../common/utils';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
  @Input() public selectArtsList: Array<ifs.IArtsData>;
  @Output() public regist = new EventEmitter<Array<ifs.IArtsData>>();
  public artsArray: Array<ifs.IArtsData>;
  private artsNameList: Array<string> = [];
  private deleteSelectArtsList: Function;
  private addSelectArtsList: Function;

  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.deleteSelectArtsList = Functions.listDeleteByKey(this.selectArtsList);
    this.addSelectArtsList = Functions.addList(this.selectArtsList);
  }

  /**
   * クリックデータを親コンポーネントに通知する
   * @param arts クリックしたデータ
   */
  public dataClick(arts: ifs.IArtsData) {
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
