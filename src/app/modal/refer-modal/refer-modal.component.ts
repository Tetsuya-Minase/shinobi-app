import {Component, Inject, OnInit} from '@angular/core';
import {CharacterData} from '../../common/types';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Functions} from '../../common/utils';

@Component({
  selector: 'app-refer-modal',
  templateUrl: './refer-modal.component.html',
  styleUrls: ['./refer-modal.component.scss']
})
export class ReferModalComponent implements OnInit {
  characterData: CharacterData;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: CharacterData) {
    this.characterData = Functions.deepCopy(data);
    console.log('characterData:', this.characterData);
  }

  ngOnInit() {
  }

}
