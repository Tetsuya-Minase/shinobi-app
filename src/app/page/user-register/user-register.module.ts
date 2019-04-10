import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRegisterComponent} from './component/user-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserRegisterComponent],
  exports: [UserRegisterComponent]
})
export class UserRegisterModule {
}
