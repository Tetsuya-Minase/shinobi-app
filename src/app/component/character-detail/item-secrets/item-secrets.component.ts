import { Component, OnInit, Input } from '@angular/core';
import { ISecretsData, IItemList } from '../../../common/interfaces';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {SecretAdd, SecretUpdate} from 'app/action/secrets.action';

@Component({
  selector: 'app-item-secrets',
  templateUrl: './item-secrets.component.html',
  styleUrls: ['./item-secrets.component.scss']
})
export class ItemSecretsComponent implements OnInit {
  @Input() itemList: IItemList;

  public secretList: Array<ISecretsData>;
  public secrets$: Observable<Array<ISecretsData>>;


  constructor(
    private store: Store<Array<ISecretsData>>
  ) {
    this.secrets$ = store.pipe(select('secrets'));
    this.secrets$.subscribe(secret => this.secretList = secret);
  }

  /**
   * アイテムリスト初期化
   */
  ngOnInit() {
    if (this.itemList === undefined) {
      this.itemList = {
        hyorogan: 0,
        jintugan: 0,
        tonkohu: 0
      };
    }
  }

  /**
   * データ更新
   */
  public update() {
    this.store.dispatch(new SecretUpdate(this.secretList));
  }

  /**
   * 行追加
   */
  public addRow() {
    const secret: ISecretsData = {
      name: '',
      targetSkill: '',
      effect: '',
      staging: ''
    };

    this.store.dispatch(new SecretAdd(secret));
  }
}
