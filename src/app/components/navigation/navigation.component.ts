import {Component, OnInit} from '@angular/core';
// import {Http, Response} from '@angular/http';
// import {Observable}     from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import {CategoriesService} from '../categories/categories.service';
import {Category} from "../categories/category";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [CategoriesService]
})
export class NavigationComponent implements OnInit {

  private categories: Category[];

  constructor(private categoryService: CategoriesService) {
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .then(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }
  //
  // ngOnInit() {
  //   var categoriesObservable = this.getCategories().subscribe(
  //     categories => {
  //       console.log(categories);
  //       this.categories = categories;
  //     }
  //     //  error =>  this.errorMessage = <any>error
  //   );
  // }


}
