import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import * as _ from 'lodash';

@Injectable()
export class AccessService {
  private accessList = {
    all: ['products', 'products/category'],
    admin: ['categoriesAdmin', 'productsAdmin']
  };

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  hasAccess(route) {
  }

  tryAccess(route, fallbackUrl = '/sign-in') {
    console.log("Route:", route);
    if (_.find(this.accessList.admin, o => route.includes(o)) && !this.authService.isAdmin()) {
      this.router.navigateByUrl(fallbackUrl);
    } else {
      return true;
    }
  }
}
