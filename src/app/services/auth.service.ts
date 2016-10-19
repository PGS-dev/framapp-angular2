import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  private adminLogin: string = 'admin';
  private adminPass: string = 'pass';

  private isAuthenticated: boolean = false;
  private _isAuthSource = new BehaviorSubject<boolean>(false);

  get authentication$() {
    return this._isAuthSource.asObservable();
  }

  private setAuthenticated(auth) {
    this.isAuthenticated = auth;
    this._isAuthSource.next(this.isAuthenticated);
  }

  login(user, pass) {
    this.setAuthenticated(true);
  }

  logout() {
    this.setAuthenticated(false);
  }

}
