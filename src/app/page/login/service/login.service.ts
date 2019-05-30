import {Injectable} from '@angular/core';
import {LoginModule} from '../login.module';
import {DbService} from '../../../service/db.service';
import {DataShareService} from '../../../service/data-share.service';
import {catchError, map} from 'rxjs/operators';
import {WebStorage} from '../../../common/utils';
import {Enums} from '../../../common/constants';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: LoginModule
})
export class LoginService {

  constructor(
    private dbService: DbService,
    private dataShareService: DataShareService
  ) {
  }

  /**
   * ログイン処理
   * @param id ログインID
   * @param password ログインパスワード
   */
  public doLogin(id: string, password: string): Observable<boolean> {
    return this.dbService.postLogin(id, password).pipe(
      map(res => {
        WebStorage.setSessionStorage(Enums.STORAGE_KEYS.userId, id);
        this.dataShareService.loginInfoNext(true);
        return true;
      }),
      catchError(err => {
        if (err.status === '404') {
          console.error(err);
        }
        return of(false);
      })
    );
  }
}
