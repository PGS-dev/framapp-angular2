/**
 * Created by rkubisiak on 10/12/2016.
 */

import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category  } from '../../services/categories.service';

@Component({
  selector: 'cats',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers:  [ CategoriesService ]
})
export class Categories implements OnInit {
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

  constructor(private categoriesService: CategoriesService){};

  ngOnInit(){
    this.getCategories();
  }
  getCategories(){
    this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = categoryList
      );
  }
}
