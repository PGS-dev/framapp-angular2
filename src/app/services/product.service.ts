/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

export interface Product {
    amount: number
    category: string;
    description: string;
    edit: string;
    id: string;
    imageUrl: string;
    price: number;
    promoted: boolean;
    title: string;
}

@Injectable()
export class ProductService {
  constructor(private HttpService: HttpService){}

  getProduct(){
    return this.HttpService.getResources('products/22.json');
  }
}
