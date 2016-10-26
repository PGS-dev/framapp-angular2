/**
 * Created by rkubisiak on 10/13/2016.
 */
import {Injectable} from '@angular/core';
import {TableData} from '../interfaces/';
import {FirebaseService} from '../services/firebase.service';

@Injectable()
export class CategoriesService {
  constructor(
    private FirebaseService: FirebaseService
  ) {}

  getCategories() {
    return this.FirebaseService.getResources('categories');
  }

  getCategory(categoryId: string) {
    return this.FirebaseService.getResource(`categories/${categoryId}`);
  }

  updateCategory(categoryId, data) {
    return this.FirebaseService.updateResource(`categories/${categoryId}`, data);
  }

  removeCategory(categoryId) {
    return this.FirebaseService.removeResource(`categories/${categoryId}`);
  }

  fillCategoriesData(categoriesObj) {
    categoriesObj.forEach((item) => {
      item.link = ['/products/category/', item.$key];
    });
    return categoriesObj;
  }

  toTableData(categoriesObj) {
    let result: TableData = {
      actions: [
        'edit',
        'remove'
      ],
      headers: [
        'ID',
        'Category name'
      ],
      dataRows: []
    };
    categoriesObj.forEach((listItem) => {
      result.dataRows.push({
        rowId: listItem.$key,
        title: listItem.title,
        rowColumns : [listItem.$key, listItem.title]
      });
    });
    return result;
  }
}
