import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {AngularFire, FirebaseAuthState} from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: AuthState = {
    isAuthenticated: false,
    authUser: '',
    firebaseState: null
  };

  private _authSource = new Subject<AuthState>();

  constructor(private firebase: AngularFire) {
    this.firebase.auth.subscribe(auth => this.setAuthenticated(auth));
  }

  get authentication$() {
    return this._authSource.asObservable();
  }

  private setAuthenticated(auth: FirebaseAuthState) {
    console.log('Authenticated:', auth !== null);
    const username = auth ? auth.auth.email : '';

    this.authState = {
      isAuthenticated: auth !== null,
      authUser: username,
      firebaseState: auth || null
    };
    this._authSource.next(this.authState);
  }

  login(user, pass) {
    this.firebase.auth.login({email: user, password: pass}).catch(
      err => console.log(err.message)
    );
  }

  logout() {
    this.firebase.auth.logout();
  }

}

export type AuthState = {
  isAuthenticated: boolean,
  authUser: string,
  firebaseState: FirebaseAuthState
}
