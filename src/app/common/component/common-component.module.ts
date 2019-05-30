import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormValidationNgComponent} from './form-validation-ng/form-validation-ng.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../module/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    FormValidationNgComponent,
    HeaderComponent
  ],
  exports: [
    FormValidationNgComponent,
    HeaderComponent
  ]
})
export class CommonComponentModule { }
