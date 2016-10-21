/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

export interface Category {
  [key: string] : {
    title: string
    id: string;
    description: string,
    link?: Array<any>,
    isActive? : boolean
  }
}

@Injectable()
export class CategoriesService{
  constructor(
    private HttpService: HttpService
  ){}

  getCategories(){
    return this.HttpService.getResources('categories.json');
  }
  fillCategoriesData(categoriesObj){
    let keys = Object.keys(categoriesObj);

    keys.forEach((key) => {
      categoriesObj[key].link = ['/products/category/',key];
    });
    return categoriesObj;
  }
}
