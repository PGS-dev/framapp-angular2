import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

const btnStates = {
  signIn: 'Sing in',
  signOut: 'Sign out'
};

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})

export class LoginBtnComponent implements OnInit {
  btnText: string;

  constructor(private authService: AuthService) {
  }

  private setBtnText(): void {
    this.btnText = this.authService.isAtuhenticated() ? btnStates.signOut : btnStates.signIn;
  }

  userAuth(): void {
    if (this.authService.isAtuhenticated()) {
      this.authService.logout();
    } else {
      this.authService.login();
    }

    this.setBtnText();
  }

  ngOnInit() {
    this.setBtnText();
  }

}
