/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {SignInComponent} from './sign-in.component';
import {AuthService} from "../../services/auth.service";

describe('Component: SignIn', () => {
  it('should create an instance', () => {
    let component = new SignInComponent(AuthService);
    expect(component).toBeTruthy();
  });
});
