/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
export interface Products {
  [key: string] : Product;
}

@Injectable()
export class ProductService {
  /* BehaviorSubject - needed for filtering purposes, connected with components/categories.component.ts (subscriber) */
    private _selectedCategory = new BehaviorSubject<string>('');
    selectedCategory$ = this._selectedCategory.asObservable();

    changeCategory(categoryId) {
      this._selectedCategory.next(categoryId);
    }
  /* end of BehaviorSubject */

  constructor(private HttpService: HttpService){}

  getProducts(){
    return this.HttpService.getResources('products.json');
  }
  getProduct(productId: number){
    return this.HttpService.getResources(`products/${productId}.json`);
  }
}
