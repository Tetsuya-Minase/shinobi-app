import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {URL_LIST} from '../../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  /**
   * ログイン処理
   * @param id ユーザID
   * @param password password
   */
  public login(id: string, password: string) {
    this.loginService.doLogin(id, password).subscribe(
      (res: boolean) => {
        if (res) {
          this.router.navigate([URL_LIST.myPage]);
        } else {
          alert('IDかパスワードが違います。');
        }
      });
  }
}
