import {Injectable} from '@angular/core';
import {UserRegisterModule} from '../user-register.module';
import {DbService} from '../../../service/db.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: UserRegisterModule
})
export class UserRegisterService {

  private _isDuplicate = new BehaviorSubject<boolean>(false);

  constructor(private dbService: DbService) {
  }

  /**
   * ユーザ重複チェック
   * @param id ユーザID
   */
  public duplicateUserCheck(id: string) {
    this.dbService.duplicateUserCheck(id).subscribe(
      res => {
        if (typeof res === 'boolean') {
          this._isDuplicate.next(res);
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
  public userRegister(id: string, password: string): Observable<boolean> {
    return this.dbService.userRegister(id, password).pipe(
      map(() => {
        return true;
      }),
      catchError(err => {
        console.log(err);
        return of(false);
      })
    );
  }

  public get isDuplicate() {
    return this._isDuplicate.asObservable();
  }
}
