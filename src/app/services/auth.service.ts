import {Injectable, OnDestroy} from '@angular/core';
import {AngularFire, FirebaseAuthState} from 'angularfire2';
import {Subject, Subscription} from 'rxjs';

@Injectable()
export class AuthService implements OnDestroy {
  private subscriptions: Array<Subscription> = [];
  private _authSource = new Subject<AuthState>();
  private authState: AuthState = {
    isAuthenticated: false,
    authUser: '',
    firebaseState: null
  };

  constructor(private firebase: AngularFire) {
    this.subscriptions.push(this.firebase.auth.subscribe(auth => this.setAuthenticated(auth)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get authentication$() {
    return this._authSource.asObservable();
  }

  private setAuthenticated(auth: FirebaseAuthState) {
    const username = auth ? auth.auth.email : '';

    this.authState = {
      isAuthenticated: auth !== null,
      authUser: username,
      firebaseState: auth || null
    };
    this._authSource.next(this.authState);
  }

  login(user, pass) {
    return this.firebase.auth.login({email: user, password: pass}).catch(
      err => console.log(err.message)
    ).then((state) => {
      if (state) {
        return true;
      }
      return false;
    });
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
