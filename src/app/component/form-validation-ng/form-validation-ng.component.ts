import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validation-ng',
  templateUrl: './form-validation-ng.component.html',
  styleUrls: ['./form-validation-ng.component.scss']
})
export class FormValidationNgComponent implements OnInit {
  @Input() targetForm: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
