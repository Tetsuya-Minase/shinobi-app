import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './component/login.component';
import {LoginService} from './service/login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {
}
