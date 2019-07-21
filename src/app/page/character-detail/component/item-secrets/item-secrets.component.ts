import {Component, Input, OnInit} from '@angular/core';
import {ItemList, SecretsData} from '../../../../common/types';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SecretAdd, SecretUpdate} from 'app/action/secrets.action';

@Component({
  selector: 'app-item-secrets',
  templateUrl: './item-secrets.component.html',
  styleUrls: ['./item-secrets.component.scss']
})
export class ItemSecretsComponent implements OnInit {
  @Input() itemList: ItemList;

  public secretList: Array<SecretsData>;
  public secrets$: Observable<Array<SecretsData>>;


  constructor(
    private store: Store<Array<SecretsData>>
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
    const secret: SecretsData = {
      name: '',
      targetSkill: '',
      effect: '',
      staging: ''
    };

    this.store.dispatch(new SecretAdd(secret));
  }
}
