import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../categories/categories.service';
import {Category} from '../categories/category';
import {ErrorService} from '../../shared/ErrorService';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [CategoriesService, ErrorService]
})
export class NavigationComponent implements OnInit {
  private categories: Category[];
  constructor(private categoryService: CategoriesService) {
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = Object.keys(response).map((key) =>
          new Category(
            key,
            response[key].title,
            response[key].description
          )
        )
      },
      error => {
        console.error(error)
      }
    );
  }
  ngOnInit(): void {
    this.getCategories();
  }
}
