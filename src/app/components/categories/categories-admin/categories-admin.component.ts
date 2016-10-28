/**
 * Created by rkubisiak on 10/12/2016.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Category, TableData} from '../../../interfaces/';
import {CategoriesService} from '../../../services/';

@Component({
  selector: 'app-categories-admin',
  templateUrl: 'categories-admin.component.html',
  styleUrls: ['categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
  @ViewChild('removeModal') removeModal;
  public deleteCategoryName: string = '';
  public deleteCategoryId: string = '';
  public categoryList: Array<Category> = [];
  public tableData: TableData = {
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
  ) {}

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

  actionItemClick(data) {
    // console.log(data, data.action + 'Category');
    if (this[data.action + 'Category']) {
      this[data.action + 'Category'](data.id);
    }
  }

  removeCategory(categoryId, categoryName) {
    this.deleteCategoryName = categoryName;
    this.deleteCategoryId = categoryId;
    this.removeModal.open();
  }

  modalCloseEE(result) {
    if (result === true && this.deleteCategoryId !== '') {
      this.categoriesService.removeCategory(this.deleteCategoryId);
      this.deleteCategoryId = '';
      this.deleteCategoryName = '';
    }
  }

  editCategory(categoryId) {
    this.router.navigateByUrl(`categoriesAdmin/${categoryId}`);
  }

  addCategory() {
    this.router.navigateByUrl('categoriesAdmin/create');
  }
}
