import { Component, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnInit } from '@angular/core';
import { DbService } from '../../service/db.service';
import * as cons from '../../common/constant';
import { BasicInformationComponent } from '../basic-information/basic-information.component';
import { MainGridComponent } from '../main-grid/main-grid.component';
import { ArtssettingComponent } from '../artssetting/artssetting.component';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public ryuha = '';
  public charactorData = {};
  // public charactorNameList = [];
  // public modalCharactor = {};
  // public charactorList = [];
  @ViewChildren(BasicInformationComponent) basicInformationQuery:QueryList<string>;
  @ViewChildren(MainGridComponent) mainGridQuery:QueryList<any>;
  @ViewChildren(ArtssettingComponent) artsSettingQuery:QueryList<any>;

  constructor(private dbService:DbService){}

  public changeRyuha(target: string) {
    this.ryuha = target;
  }

  public ngOnInit(){
    // this.dbService.getCharactorData().subscribe(
    //   ret => {
    //     this.charactorList = ret;
    //   }
    // );
    // if(!this.charactorList){
    //   return;
    // }
    // this.charactorList.forEach(item => {
    //   this.charactorNameList.push(item['charactorName']);
    // });
  }

  public ngAfterViewChecked(){
    Object.keys(this.basicInformationQuery.last).forEach(item => {
      if(cons.ObjectFilter.charactorDataFillter.includes(item)){
        this.charactorData[item] = this.basicInformationQuery.last[item];
      }
    });
    this.charactorData['selectedSkillList'] = this.mainGridQuery.last.selectedSkillList;
    this.charactorData['dispArtsArray'] = this.artsSettingQuery.last.dispArtsArray;
    this.charactorData['ryuha'] = this.ryuha;
  }

  public registCharactor(){
    this.dbService.insertData(this.charactorData).subscribe(
      res => {
        // this.charactorNameList = [];
        this.ngOnInit();
      }
    );
  }

  // public modalOpen(charactorName:string) {
  //   this.modalCharactor = this.charactorList.find(value => value.charactorName === charactorName);
  // }
}
