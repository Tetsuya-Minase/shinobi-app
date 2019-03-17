import {DbService} from './../../service/db.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public isDuplicate = false;

  constructor(
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
    this.dbService.duplicateUserCheck(id).subscribe(
      res => {
        if (typeof res === 'boolean') {
          this.isDuplicate = res;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  /**
   * ユーザ登録
   * @param id
   * @param password
   */
  public userRegister(id: string, password: string) {
    this.dbService.userRegister(id, password).subscribe(
      res => {
        window.alert('登録しました。');
        this.router.navigateByUrl('/my-page');
      },
      error => {
        console.error(error);
      }
    );
  }
}
