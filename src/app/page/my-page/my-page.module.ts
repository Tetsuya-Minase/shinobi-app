import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyPageComponent} from './component/my-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyPageComponent],
  exports: [MyPageComponent]
})
export class MyPageModule { }
