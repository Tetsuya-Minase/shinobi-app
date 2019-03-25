import { Component, OnInit } from '@angular/core';
import { DbService } from '../../service/db.service';
import { MatDialog } from '@angular/material';
import { ReferModalComponent } from '../../modal/refer-modal/refer-modal.component';
import {Functions} from '../../common/utils';

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
        if (!Functions.isListDefined(ret)) {
          return;
        }
        this.characterList = ret;
      }, err => {
        console.error('error in character list', err);
      }
    );
  }

  public modalOpen(character: any) {
    console.log(character);
    this.dialog.open(ReferModalComponent, {
      width: '70%',
      data: character
    });
  }
}
