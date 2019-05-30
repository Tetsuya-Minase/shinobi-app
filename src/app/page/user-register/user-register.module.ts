import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRegisterComponent} from './component/user-register.component';
import {UserRegisterService} from './service/user-register.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserRegisterComponent],
  exports: [UserRegisterComponent],
  providers: [UserRegisterService]
})
export class UserRegisterModule {
}
