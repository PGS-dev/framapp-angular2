import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category,tableData} from "../../interfaces/";


@Component({
  selector: 'app-categories-admin',
  templateUrl: 'categories-admin.component.html',
  styleUrls: ['categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
  public categoryList: Category = {};
  public tableData: tableData = {
    hasRmEditBtns: true,
    headers : [],
    dataRows : []
  };

  constructor(
    private categoriesService: CategoriesService
  ){}

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(
        categoryList => {
          this.categoryList = this.categoriesService.fillCategoriesData(categoryList);
          this.tableData = this.categoriesService.toTableData(categoryList);
        }
      );
  }
}
