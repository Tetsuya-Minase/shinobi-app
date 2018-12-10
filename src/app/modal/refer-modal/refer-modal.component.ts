import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-refer-modal',
  templateUrl: './refer-modal.component.html',
  styleUrls: ['./refer-modal.component.scss']
})
export class ReferModalComponent implements OnInit {
  @Input() charactorData;

  constructor() { }

  ngOnInit() {
  }

}
