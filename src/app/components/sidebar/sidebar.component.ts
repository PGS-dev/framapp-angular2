import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private categoriesList: FirebaseListObservable<any>;
  categories = {
    title: 'Categories',
    list: []
  };
  admin = {
    title: 'Admin',
    list: [{title: 'Products'}, {title: 'Categories'}],
    isAdminActive: this.authService.isAuthenticated()
  };

  constructor(private authService: AuthService, af: AngularFire) {
    this.getCategoriesList(af);

  }

  getCategoriesList(af) {
    this.categoriesList = af.database.list('/api/v1/categories');
    this.categoriesList.subscribe(
      categoryList => {
        // console.log("angularfire", categoryList);
        this.categories.list = categoryList;
      }
    );
  }

  ngOnInit() {
  }

}
