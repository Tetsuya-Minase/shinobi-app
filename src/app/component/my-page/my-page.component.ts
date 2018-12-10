import { DbService } from './../../service/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  public myCharacterList: Array<object> = new Array<object>();
  public modalCharacter = {};

  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.dbService.getCharactorData('my-account').subscribe(
      res => {
        this.myCharacterList = res.filter(data => data['playerName'] === 'Guest');
      }, err => {
        console.log(err);
      }
    );
  }

  public modalOpen(character: object) {
    this.modalCharacter = Object.assign({}, character);
  }

}
