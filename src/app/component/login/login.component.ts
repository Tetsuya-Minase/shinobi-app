import {DataShareService} from '../../service/data-share.service';
import {DbService} from '../../service/db.service';
import {URL_LIST} from '../../common/constants';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WebStorage} from '../../common/utils';
import {Enums} from '../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private dbService: DbService,
    private dataSharaService: DataShareService
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
    this.dbService.postLogin(id, password).subscribe(
      res => {
        console.log(res);
        WebStorage.setSessionStorage(Enums.STORAGE_KEYS.userId, id);
        this.dataSharaService.loginInfoNext(true);
        this.router.navigate([URL_LIST.myPage]);
      },
      err => {
        if (err.status === 404) {
          alert('IDかパスワードが違います。');
        }
      }
    );
  }
}
