import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../components/categories/categories.service';
import {Category} from '../components/categories/category';
import {ErrorService} from '../shared/ErrorService';
@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
  providers: [CategoriesService, ErrorService]
})
export class NavigationComponent implements OnInit {
  private categories: Category[];
  constructor(private categoryService: CategoriesService) {
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories
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
