import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private af: AngularFire) {
    
  }

  ngOnInit() {
  }

  logIn() {
    this.af.auth.login({ email: 'framapp@pgs-soft.com', password: 'password' });
  }

}
