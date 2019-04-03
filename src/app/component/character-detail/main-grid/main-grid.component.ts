import {Component, OnInit, Input} from '@angular/core';
import {IClickIndex} from '../../../common/interfaces';
import {DataShareService} from '../../../service/data-share.service';
import {Functions} from '../../../common/utils';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {
  @Input() ryuha = '';
  public isDecision = false;
  public selectedSkillList: Array<IClickIndex> = [];
  public decisionResult = [];
  public decisionTarget: string;

  constructor(
    private dataShareService: DataShareService
  ) {}

  ngOnInit() {

  }

  /**
   * クリップボードコピー
   * @param idx
   */
  public clipCopy(idx: number) {
    const tempArea = document.createElement('textarea');
    tempArea.textContent = this.decisionResult[idx].desisonRes;
    const bodyElm = document.getElementsByTagName('body')[0];
    bodyElm.appendChild(tempArea);
    tempArea.select();
    document.execCommand('copy');
    bodyElm.removeChild(tempArea);
  }

  /**
   * 判定結果取得
   * @param result
   */
  public fetchDecisionResult(result: Array<any>) {
    if (Functions.isEmptyList(result)) {
      return;
    }
    this.decisionResult = result;
    this.decisionTarget = result[0]['target'];
  }

  public decisionShare() {
    this.isDecision = !this.isDecision;
    this.dataShareService.decisionNext(this.isDecision);
  }
}
