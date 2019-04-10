import {IUrlList} from '../../interfaces';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {URL_LIST} from '../../constants';
import {WebStorage} from '../../utils';
import {DataShareService} from '../../../service/data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // HTMLから参照するため仮置き
  public urlList: IUrlList;
  public isLogin = false;

  constructor(
    private router: Router,
    private dataShareService: DataShareService
  ) {
  }

  ngOnInit() {
    this.urlList = Object.assign({}, URL_LIST);
    this.isLogin = this.getStorage();
    // ログイン情報取得
    this.dataShareService.loginInfo$.subscribe(
      res => {
        console.log('header:', res);
        setTimeout(() => {
          this.isLogin = res;
        }, 300);
      },
      err => {
        console.error(err);
      }
    );
  }

  public routing(target: string) {
    this.router.navigate([target]);
  }

  private getStorage() {
    const loginInfo = WebStorage.getSessionStorage('loginInfo');
    if (loginInfo && loginInfo.length) {
      return true;
    } else {
      return false;
    }
  }
}
