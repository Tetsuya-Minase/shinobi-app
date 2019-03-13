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
  @Input() public selectArtsArray: Array<ifs.IArtsData>;
  @Output() public regist = new EventEmitter<Array<ifs.IArtsData>>();
  public artsArray: Array<ifs.IArtsData>;
  private artsNameList: Array<string> = [];

  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    // this.dbService.getArtsData().subscribe(
    //   res => {
    //     this.artsArray = res.artsinfo;
    //   }
    // );
  }

  /**
   * クリックデータを親コンポーネントに通知する
   * @param arts クリックしたデータ
   */
  public dataClick(arts: ifs.IArtsData) {
    arts.clickFlg = !arts.clickFlg;

    if (this.artsNameList.includes(arts.name)) {
      this.selectArtsArray = Functions.listDeleteByKey(this.selectArtsArray, 'name', arts.name);
    } else {
      this.selectArtsArray = [...this.selectArtsArray, arts];
    }
    this.artsNameList = this.selectArtsArray.map(s => s.name);
    this.regist.emit(this.selectArtsArray);
  }
}
