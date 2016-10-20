import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {NavService} from "../../services/nav.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  private isAuthenticated: boolean = false;
  private subscription: Subscription;

  constructor(private _NavService: NavService, private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.authentication$
      .subscribe(authenticated => this.isAuthenticated = authenticated);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleMenu() {
    this._NavService.changeVisible();
  }

}
