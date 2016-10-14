/**
 * Created by rkubisiak on 10/12/2016.
 */

import { Component } from '@angular/core';
import { CategoriesService, Category  } from '../../services/categories.service';

@Component({
  selector: 'cats',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers:  [ CategoriesService ]
})
export class Categories {
  private categoryList : Category = {};

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
