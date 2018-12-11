import { Component, OnInit } from '@angular/core';
import { DbService } from '../../service/db.service';
import { MatDialog } from '@angular/material';
import { ReferModalComponent } from '../../modal/refer-modal/refer-modal.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public characterNameList = [];
  public characterList = [];
  public modalCharacter = {
    selectedSkillList: { skill: []},
    dispArtsArray: { arts: []}
  };

  constructor(
    private dbService: DbService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dbService.getCharacterData().subscribe(
      ret => {
        this.characterList = ret;
        console.log(ret);
        if (!this.characterList) {
          return;
        }
        // this.characterList.forEach(item => {
        //   this.characterNameList.push(item['characterName']);
        // });
        // console.log('characterNameList:', this.characterNameList);
      }, err => {
        console.error(err);
      }
    );
  }

  public modalOpen(character: any) {
    this.dialog.open(ReferModalComponent, {
      width: '70%',
      data: character
    });
  }
}
