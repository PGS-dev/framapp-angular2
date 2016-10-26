import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private user: string;
  private pass: string;

  constructor(private authService: AuthService) {}

  signIn() {
    this.authService.login(this.user, this.pass);
  }
}
