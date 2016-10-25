import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {
  fallbackUrl: string = '/sign-in';

  constructor(
    private firebase: AngularFire,
    private router: Router
  ) {
    let obj = false;
    if (obj) {
      Observable.throw('asdfasdf');
    }
  }

  canActivate() {
    return this.firebase.auth.first().map((auth) => {
      if (auth !== null) {
        return true;
      } else {
        this.router.navigate([this.fallbackUrl]);
        return false;
      }
    });
  }
}
