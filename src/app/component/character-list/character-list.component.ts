import { Component, OnInit } from '@angular/core';
import { DbService } from '../../service/db.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public charactorNameList = [];
  public charactorList = [];
  public modalCharactor = {};

  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.dbService.getCharactorData().subscribe(
      ret => {
        this.charactorList = ret;
        console.log(ret);
      }, err => {
        console.error(err);
      }, () => {
        if (!this.charactorList) {
          return;
        }
        this.charactorList.forEach(item => {
          this.charactorNameList.push(item['charactorName']);
        });
      }
    );
  }

  public modalOpen(charactorName: string) {
    this.modalCharactor = this.charactorList.find(value => value.charactorName === charactorName);
  }
}
