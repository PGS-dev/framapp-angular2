/**
 * Created by rkubisiak on 10/12/2016.
 */

import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '../../services/categories.service';
import { NavService } from "../../services/nav.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cats',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers:  [ CategoriesService, NavService ]
})
export class Categories implements OnInit {
  private subscription:Subscription;
  private isMenuVisible : boolean = false;
  public categoryList : Category = {};
  private isAdmin : boolean = true;
  public adminMenu : Category = {
    'products' : {
      'title': 'Products',
      'id': '',
      'description': ''
    },
    'categories' : {
      'title' : 'Categories',
      'id': '',
      'description': ''
    }
  };

  constructor(private categoriesService: CategoriesService, private NavService:NavService){};

  ngOnInit(){
    this.getCategories();
    this.subscription = this.NavService._isVisible$.subscribe(
      isVisible => this.isMenuVisible = isVisible
    );
  }
  getCategories(){
    this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = categoryList
      );
  }
}
