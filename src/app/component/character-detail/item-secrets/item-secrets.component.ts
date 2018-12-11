import { Component, OnInit, Input } from '@angular/core';
import { ISecretsInfo, IItemList } from '../../../common/interfaces';

@Component({
  selector: 'app-item-secrets',
  templateUrl: './item-secrets.component.html',
  styleUrls: ['./item-secrets.component.scss']
})
export class ItemSecretsComponent implements OnInit {
  @Input() secretList: Array<ISecretsInfo>;
  @Input() itemList: IItemList;

  constructor() { }

  ngOnInit() {
    if (this.secretList == null) {
      this.secretList = [];
      this.addRow();
    }

    if (this.itemList == null) {
      this.itemList = {
        hyorogan: 0,
        jintugan: 0,
        tonkohu: 0
      }
    }
  }

  public addRow() {
    this.secretList.push({
      name: '',
      targetSkill: '',
      effect: '',
      effectDetai: ''
    });
  }
}
