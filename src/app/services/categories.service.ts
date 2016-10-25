/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {tableData} from "../interfaces/";


@Injectable()
export class CategoriesService{
  constructor(
    private HttpService: HttpService
  ){}

  getCategories(){
      return this.HttpService.getResources('categories');
  }
  fillCategoriesData(categoriesObj){
    let keys = Object.keys(categoriesObj);

    keys.forEach((key) => {
      categoriesObj[key].link = ['/products/category/',key];
    });
    return categoriesObj;
  }
  toTableData(categoriesObj){
    let keys = Object.keys(categoriesObj);
    let result:tableData = {
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
    keys.forEach((key)=>{
      result.dataRows.push({
        rowId: key,
        rowId2: categoriesObj[key].id,
        rowColumns : [key,categoriesObj[key].title]
      })
    });
    return result;
  }
}
