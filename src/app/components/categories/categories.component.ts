/**
 * Created by rkubisiak on 10/12/2016.
 */

import {Component, OnInit, OnDestroy} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {NavService} from "../../services/nav.service";
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from "../../services/auth.service";
import {Category} from "../../interfaces/";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private authSubscription: Subscription;
  private isMenuVisible: boolean = false;
  public categoryList: Category = {};
  private isAdmin: boolean = false;
  public adminMenu: Category = {
    'products': {
      'title': 'Products',
      'id': '',
      'description': '',
      link:[
        '/productsAdmin'
      ]
    },
    'categories': {
      'title': 'Categories',
      'id': '',
      'description': '',
      link:[
        '/categoriesAdmin'
      ]
    }
  };

  constructor(private categoriesService: CategoriesService,
              private _NavService: NavService,
              private authService: AuthService) {
  };

  ngOnInit() {
    this.getCategories();
    this.subscription = this._NavService.isVisible$.subscribe(
      isVisible => this.isMenuVisible = isVisible
    );
    this.authSubscription = this.authService.authentication$.subscribe(
      authState => {
        this.isAdmin = authState.isAuthenticated;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = this.categoriesService.fillCategoriesData(categoryList)
      );
  }
}
