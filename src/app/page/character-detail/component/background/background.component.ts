import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {BackGround} from '../../../../common/types';
import {select, Store} from '@ngrx/store';
import {BackgroundAdd, BackgroundUpdate} from '../../../../action/background.action';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  public backgroundList: Array<BackGround>;
  public backgroud$: Observable<Array<BackGround>>;


  constructor(
    private store: Store<Array<BackGround>>
  ) {
    this.backgroud$ = store.pipe(select('background'));
    this.backgroud$.subscribe((bl: Array<BackGround>) => {
      this.backgroundList = bl;
    });
  }

  ngOnInit() {
  }

  /**
   * 入力内容更新
   */
  public update() {
    this.store.dispatch(new BackgroundUpdate(this.backgroundList));
  }

  /**
   * 行追加
   */
  public addRow() {
    const background = {
      name: '',
      type: '',
      point: 0,
      effect: ''
    };
    this.store.dispatch(new BackgroundAdd(background));
  }
}
