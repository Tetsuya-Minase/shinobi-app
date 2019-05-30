import {DbService} from '../../../service/db.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserRegisterService} from '../service/user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public isDuplicate = this.userRegisterService.isDuplicate;

  constructor(
    private userRegisterService: UserRegisterService,
    private dbService: DbService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  /**
   * ユーザ重複チェック
   * @param id ユーザID
   */
  public duplicateUserCheck(id: string) {
    this.userRegisterService.duplicateUserCheck(id);
  }

  /**
   * ユーザ登録
   * @param id
   * @param password
   */
  public userRegister(id: string, password: string) {
    this.userRegisterService.userRegister(id, password).subscribe(
      (res: boolean) => {
        if (res) {
          window.alert('登録しました。');
          this.router.navigateByUrl('/my-page');
        }
      }
    );
  }
}
