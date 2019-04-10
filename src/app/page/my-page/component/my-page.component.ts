import { MatDialog } from '@angular/material';
import { DbService } from '../../../service/db.service';
import { Component, OnInit } from '@angular/core';
import { ReferModalComponent } from '../../../modal/refer-modal/refer-modal.component';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  public myCharacterList: Array<object> = new Array<object>();
  public myCharacterNameList: Array<object> = new Array<object>();
  public modalCharacter = {};

  constructor(
    private dbService: DbService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    const userId = window.sessionStorage.getItem('userId');
    this.dbService.getCharacterData(userId).subscribe(
      res => {
        this.myCharacterList = res;
        console.log(this.myCharacterList);
        if (!this.myCharacterList) {
          return;
        }
        this.myCharacterList.forEach(item => {
          this.myCharacterNameList.push(item['characterName']);
        });
      }, err => {
        console.log(err);
      }
    );
  }

  public modalOpen(character: object) {
    this.dialog.open(ReferModalComponent, {
      width: '70%',
      data: character
    });
  }

}
