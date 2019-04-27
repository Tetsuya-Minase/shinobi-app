import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyPageComponent} from './component/my-page.component';
import {MyPageService} from './service/my-page.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyPageComponent],
  exports: [MyPageComponent],
  providers: [MyPageService]
})
export class MyPageModule {
}
