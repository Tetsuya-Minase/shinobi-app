import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private loginInfoSource = new Subject<boolean>();
  private decisionSource = new Subject<boolean>();

  private loginInfo = this.loginInfoSource.asObservable();
  private decision = this.decisionSource.asObservable();

  constructor() { }

  public loginInfoNext(next: boolean) {
    this.loginInfoSource.next(next);
  }

  public decisionNext(next: boolean) {
    this.decisionSource.next(next);
  }

  get loginInfo$() {
    return this.loginInfo;
  }

  get decision$() {
    return this.decision;
  }
}
