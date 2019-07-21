import {Component, Input, OnInit} from '@angular/core';
import {CharacterData} from '../../common/types';

@Component({
  selector: 'app-refer-modal',
  templateUrl: './refer-modal.component.html',
  styleUrls: ['./refer-modal.component.scss']
})
export class ReferModalComponent implements OnInit {
  @Input() characterData: CharacterData;

  constructor() {
  }

  ngOnInit() {
  }

}
