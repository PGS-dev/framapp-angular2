/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {tableData} from "../interfaces/";
import {FirebaseService} from '../services/firebase.service';

@Injectable()
export class CategoriesService{
  constructor(
    private FirebaseService:FirebaseService
  ){}

  getCategories(){
      return this.FirebaseService.getResources('categories');
  }
  fillCategoriesData(categoriesObj){
    categoriesObj.forEach((item)=>{
      item.link = ['/products/category/',item.$key];
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
        title: categoriesObj[key].title,
        rowColumns : [key,categoriesObj[key].title]
      })
    });
    return result;
  }
}
