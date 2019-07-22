import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ReferModalComponent} from '../../../modal/refer-modal/refer-modal.component';
import {CharacterListService} from '../service/character-list.service';
import {CharacterData} from '../../../common/types';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterList = this.characterListService.characterList$;

  constructor(
    private readonly dialog: MatDialog,
    private readonly characterListService: CharacterListService
  ) {
  }

  /**
   * 初期化処理
   */
  ngOnInit() {
    this.characterListService.fetchCharacterData();
  }

  /**
   * モーダル画面オープン
   * @param character 表示するキャラクタ情報
   */
  modalOpen(character: CharacterData) {
    console.log('character:', character);

    this.dialog.open(ReferModalComponent, {
      width: '70%',
      data: character
    });
  }
}
