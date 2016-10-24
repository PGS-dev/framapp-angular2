import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {NavService} from '../../services/nav.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isAuthenticated: boolean = false;
  private subscription: Subscription;
  private loggedUser: string;

  constructor(private _NavService: NavService, private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.authentication$
      .subscribe(authState => {
        this.isAuthenticated = authState.isAuthenticated;
        this.loggedUser = authState.authUser;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleMenu() {
    this._NavService.changeVisible();
  }
}
