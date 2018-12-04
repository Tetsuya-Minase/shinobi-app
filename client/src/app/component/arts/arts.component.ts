import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from '../../service/db.service';
import * as ifs from '../../common/interfaces';
import * as func from '../../common/functions';
import * as cons from '../../common/constant';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  @Input() public selectArtsArray: Array<ifs.ArtsData>;
  @Output() public regist = new EventEmitter<Array<ifs.ArtsData>>();
  public artsArray: Array<ifs.ArtsData>;
  private artsNameList: Array<string> = [];

  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.dbService.getArtsData().subscribe(
      res => {
        this.artsArray = res;
      }
    );
  }

  public dataClick(arts: ifs.ArtsData) {
    arts.clickFlg = !arts.clickFlg;

    if (this.artsNameList.includes(arts.name)) {
      this.selectArtsArray = func.listDeleteByKey(this.selectArtsArray, 'name', arts.name);
    } else {
      this.selectArtsArray.push(arts);
    }
    this.createArtsNameList();
    this.regist.emit(this.selectArtsArray);
  }

  public createArtsNameList() {
    const tempArray = [];
    this.selectArtsArray.forEach(artsObj => {
      tempArray.push(artsObj.name);
    });
    this.artsNameList = tempArray.concat();
  }

}
