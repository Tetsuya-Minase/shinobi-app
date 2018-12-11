import { DbService } from './../../service/db.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  public isDupicate = false;

  constructor(
    private dbDervice: DbService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * ユーザ重複チェック
   * @param id ユーザID
   */
  public duplicateUserCheck(id: string) {
    this.dbDervice.duplicateUserCheck(id).subscribe(
      res => {
        if(typeof res === 'boolean'){
          this.isDupicate = res;
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
    this.dbDervice.userRegister(id, password).subscribe(
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
