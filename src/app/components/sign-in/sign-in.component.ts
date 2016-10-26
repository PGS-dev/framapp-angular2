import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private user: string;
  private pass: string;
  private signInErr: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  signIn() {
    this.authService.login(this.user, this.pass).then((success) => {
      if (success) {
        this.signInErr = false;
        this.router.navigate(['/productsAdmin']);
      } else {
        this.signInErr = true;
      }
    });
  }
}
