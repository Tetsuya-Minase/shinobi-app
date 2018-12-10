import { IUrlList } from '../../common/interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URL_LIST } from '../../common/constant';
import { WebStorage } from '../../common/functions';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.urlList = Object.assign({}, URL_LIST);
    console.log(this.urlList);
    this.isLogin = this.getStorage();
  }

  public routing(target: string){
      this.router.navigate([target]);
  }

  private getStorage(){
    const loginInfo = WebStorage.getSessionStorage('loginInfo');
    if(loginInfo && loginInfo.length){
      return true;
    } else {
      return false;
    }    
  }
}
