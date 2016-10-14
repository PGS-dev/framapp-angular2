/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

export interface Category {
  [key: string] : {
    title: string
    id: string;
    description: string;
  };
}

@Injectable()
export class CategoriesService {
  constructor(private HttpService: HttpService){}

  getCategories(){
    return this.HttpService.getResources('categories.json');
  }
}
