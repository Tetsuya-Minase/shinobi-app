import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ReferModalComponent} from '../../../modal/refer-modal/refer-modal.component';
import {CharacterListService} from '../service/character-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public characterList = this.characterListService.characterList$;

  constructor(
    private dialog: MatDialog,
    private characterListService: CharacterListService
  ) {
    this.characterListService.fetchCharacterData();
  }

  /**
   * 初期化処理
   */
  ngOnInit() {

  }

  /**
   * モーダル画面オープン
   * @param character 表示するキャラクタ情報
   */
  public modalOpen(character: any) {
    this.dialog.open(ReferModalComponent, {
      width: '70%',
      data: character
    });
  }
}
