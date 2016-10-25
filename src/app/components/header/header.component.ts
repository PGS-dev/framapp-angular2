import {Component, OnInit, OnDestroy} from '@angular/core';
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
    private authService: AuthService
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

  toggleMenu() {
    this._NavService.changeVisible();
  }
}
