import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  public selectList: Array<string> = ['流派を選択', '斜歯忍軍', '鞍馬神流', 'ハグレモノ', '比良坂機関', '私立御斎学園', '隠忍の血統'];
  public playerName: string = '';
  public charactorName:string = '';
  public kana: string = '';
  public regulation:string = '';
  public type:string = '';
  public kairyuha:string = '';
  public enemy:string = '';
  public rank:string = '';
  public achievement:string = '';
  public age:string = '';
  public gender:string = '';
  public face:string = '';
  public ryugi:string = '';
  public belief:string = '';


  @Output() select = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public pullDownChange(target: string) {
    this.select.emit(target);
  }
}
