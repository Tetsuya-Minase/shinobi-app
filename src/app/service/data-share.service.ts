import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private loginInfoSource = new Subject<boolean>();

  public loginInfo$ = this.loginInfoSource.asObservable();

  constructor() { }

  public loginInfoNext(next: boolean) {
    this.loginInfoSource.next(next);
  }
}
