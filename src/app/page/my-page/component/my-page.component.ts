import {MatDialog} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {ReferModalComponent} from '../../../modal/refer-modal/refer-modal.component';
import {MyPageService} from '../service/my-page.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  public myCharacterList = this.myPageService.myCharacterList;
  public myCharacterNameList = this.myPageService.myCharacterNameList;

  constructor(
    private myPageService: MyPageService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.myPageService.fetchCharacterList();
  }

  public modalOpen(character: object) {
    this.dialog.open(ReferModalComponent, {
      width: '70%',
      data: character
    });
  }

}
