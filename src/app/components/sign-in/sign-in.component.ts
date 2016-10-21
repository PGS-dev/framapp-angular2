import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private user: string;
  private pass: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.user, this.pass);
  }

}
