/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

export interface Products {
  [key: string] : {
    amount: number
    category: string
    description: string
    edit: string
    id: string;
    imageUrl: string;
    price: number;
    promoted: boolean
    title: string;
  };
}

@Injectable()
export class ProductsService {
  constructor(private HttpService: HttpService){}

  getProducts(){
    return this.HttpService.getResources('products.json');
  }
}
