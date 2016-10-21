import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {AngularFire} from 'angularfire2';

@Injectable()
export class AuthService {
  private adminLogin: string = 'admin';
  private adminPass: string = 'pass';

  private authState: AuthState = {
    isAuthenticated: false,
    authUser: ''
  };
  private _authSource = new Subject<AuthState>();
  // private firebase = new AngularFire();
  constructor(private firebase: AngularFire) {
  }

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
    console.log('logging in...');
    this.firebase.auth.login({email: user, password: pass});
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
