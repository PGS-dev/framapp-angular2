import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {AngularFire} from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {
  fallbackUrl: string = '/sign-in';
  authState: Observable<boolean>;

  constructor(private firebase: AngularFire, private authService: AuthService, private router: Router) {
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
