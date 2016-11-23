import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './admin-categories-list.component.html',
  styleUrls: ['./admin-categories-list.component.scss']
})
export class AdminCategoriesListComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService
    ) { }

  ngOnInit() {
    this.categoriesService.getCategories();
  }
}
