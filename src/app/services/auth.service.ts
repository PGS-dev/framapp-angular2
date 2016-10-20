import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private atuhenticated: boolean = false;

  private setAuthenticated(authorized): void {
    this.atuhenticated = authorized;
  }

  login(): void {
    this.setAuthenticated(true);
  }

  logout(): void {
    this.setAuthenticated(false);
  }

  isAtuhenticated(): boolean {
    return this.atuhenticated;
  }
}
