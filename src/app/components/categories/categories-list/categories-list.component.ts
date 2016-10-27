/**
 * Created by rkubisiak on 10/12/2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Category} from '../../../interfaces/';
import {CategoriesService, NavService, AuthService} from '../../../services/';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories-list.component.html',
  styleUrls: ['categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  private isMenuVisible: boolean = false;
  private isAdmin: boolean = false;
  private subscriptions: Array<Subscription> = [];
  public categoryList: Array<Category> = [];
  public adminMenu: Array<Category> = [
  {
    'title': 'Products',
    'id': '',
    'description': '',
    link: [
      '/productsAdmin'
    ]
  }, {
    'title': 'Categories',
    'id': '',
    'description': '',
    link: [
      '/categoriesAdmin'
    ]
  }];

  constructor(
    private categoriesService: CategoriesService,
    private _NavService: NavService,
    private authService: AuthService
  ) {};

  ngOnInit() {
    this.getCategories();
    this.subscriptions.push(this._NavService.isVisible$.subscribe(
      isVisible => this.isMenuVisible = isVisible
    ));
    this.subscriptions.push(this.authService.authentication$.subscribe(
      authState => {
        this.isAdmin = authState.isAuthenticated;
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getCategories() {
    this.subscriptions.push(this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = this.categoriesService.fillCategoriesData(categoryList)
      ));
  }
}
