import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { IBackGround } from '../../../common/interfaces';
import { Store, select } from '@ngrx/store';
import { BackgroundAdd } from '../../../action/background.action';
import * as reducers from '../../../reducer/index.reducer';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  public backgroundList: Array<IBackGround>;
  public backgroud$: Observable<Array<IBackGround>>;


  constructor(
    private store: Store<Array<IBackGround>>
  ) {
    this.backgroud$ = store.pipe(select('background'));
    this.backgroud$.subscribe((back: Array<IBackGround>) => {
      this.backgroundList = back
    });
  }

  ngOnInit() { }

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
