import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {NavService, AuthService} from '../../../services/';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isAuthenticated: boolean = false;
  private loggedUser: string;
  private subscriptions: Array<Subscription> = [];

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
    this.router.navigate(['/']);
  }

  toggleMenu() {
    this._NavService.changeVisible();
  }
}
