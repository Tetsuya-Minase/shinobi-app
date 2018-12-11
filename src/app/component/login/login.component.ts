import { DataShareService } from './../../service/data-share.service';
import { DbService } from './../../service/db.service';
import { URL_LIST } from '../../common/constant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStorage } from '../../common/functions';

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
  ) { }

  ngOnInit() {
  }

  public login(id: string, password: string){
    this.dbService.postLogin(id, password).subscribe(
      res => {
        console.log('res:', res);
        WebStorage.setSessionStorage('userId', id);
        this.dataSharaService.loginInfoNext(true);
        this.router.navigate([URL_LIST.myPage]);
      },
      err => {
        console.error(err);
      }
    );
  }
}
