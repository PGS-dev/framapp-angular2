import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {NavService} from '../../services/nav.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isAuthenticated: boolean = false;
  private subscriptions: Array<Subscription> = [];
  private loggedUser: string;

  constructor(
    private _NavService: NavService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscriptions.push(this.authService.authentication$
      .subscribe(authState => {
        this.isAuthenticated = authState.isAuthenticated;
        this.loggedUser = authState.authUser;
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  signOut(): void {
    this.authService.logout();
    this.router.navigate(['/sign-in']);

  }

  toggleMenu() {
    this._NavService.changeVisible();
  }
}
