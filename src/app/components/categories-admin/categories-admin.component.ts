import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category,tableData} from "../../interfaces/";
import {Router} from "@angular/router";


@Component({
  selector: 'app-categories-admin',
  templateUrl: 'categories-admin.component.html',
  styleUrls: ['categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
  public categoryList: Category = {};
  public tableData: tableData = {
    actions: [
      'edit',
      'remove'
    ],
    headers : [],
    dataRows : []
  };

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
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

  actionItemClick(data){
    if(this[data.action+'Category']){
      this[data.action+'Category'](data.id);
    }
  }

  removeCategory(categoryId){
    console.log('Remove product:'+categoryId);
  }

  editCategory(categoryId){
    this.router.navigateByUrl(`categories/${categoryId}/edit`);
  }

  addCategory(){
    this.router.navigateByUrl('categoriesAdmin/add');
  }
}
