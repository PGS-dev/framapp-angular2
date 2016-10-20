/**
 * Created by rkubisiak on 10/12/2016.
 */

import {Component, OnInit, OnDestroy} from '@angular/core';
import {CategoriesService, Category} from '../../services/categories.service';
import {NavService} from "../../services/nav.service";
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})
export class Categories implements OnInit,OnDestroy {
  private subscription: Subscription;
  private isMenuVisible: boolean = false;
  public categoryList: Category = {};
  private isAdmin: boolean = true;
  public adminMenu: Category = {
    'products': {
      'title': 'Products',
      'id': '',
      'description': ''
    },
    'categories': {
      'title': 'Categories',
      'id': '',
      'description': ''
    }
  };

  constructor(
    private categoriesService: CategoriesService,
    private _NavService: NavService,
    private authService: AuthService
  ) {};

  ngOnInit() {
    this.getCategories();
    this.subscription = this._NavService.isVisible$.subscribe(
      isVisible => this.isMenuVisible = isVisible
    );
    this.authService.authentication$.subscribe(
      authenticated => this.isAdmin = authenticated
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = categoryList
      );
  }
}
