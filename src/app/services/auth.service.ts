import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private adminLogin: string = 'admin';
  private adminPass: string = 'pass';

  private authState: AuthState = {
    isAuthenticated: false,
    authUser: ''
  };
  private _authSource = new Subject<AuthState>();

  get authentication$() {
    return this._authSource.asObservable();
  }

  private setAuthenticated(auth: boolean, user?: string) {
    this.authState = {
      isAuthenticated: auth,
      authUser: user || ''
    };
    this._authSource.next(this.authState);
  }

  login(user, pass) {
    if (user === this.adminLogin && pass === this.adminPass) {
      this.setAuthenticated(true, user);
    }
  }

  logout() {
    this.setAuthenticated(false);
  }

}

export type AuthState = {
  isAuthenticated: boolean,
  authUser: string
}
