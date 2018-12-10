import { URL_LIST } from '../../common/constant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { toBase64String } from '@angular/compiler/src/output/source_map';
import { WebStorage, Base64 } from '../../common/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login(id: string, password: string){
    if(!id && !password){
      return;
    }

    const info = Base64.encode(id + password);
    WebStorage.setSessionStorage('loginInfo',info);
    this.router.navigate([URL_LIST.myPage]);
  }
}
