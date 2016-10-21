/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {tableData} from "../interfaces/";
import {Http, Response} from '@angular/http';

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
    [key: string]: Product;
}

@Injectable()
export class ProductService {
    constructor(private HttpService: HttpService,
                private http: Http) {
    }

  getProducts(){
    return this.HttpService.getResources('products.json');
  }
  getProduct(productId: number){
    return this.HttpService.getResources(`products/${productId}.json`);
  }

    updateProduct (productId, data) {
        return this.HttpService.putResources(`products/${productId}.json`, JSON.stringify(data));
    }

  toTableData(productsObj){
    let keys = Object.keys(productsObj);
    let result:tableData = {
      hasRmEditBtns : true,
      headers: [
        'ID',
        'Product name'
      ],
      dataRows: []
    };
    keys.forEach((key)=>{
      result.dataRows.push({
        rowId: productsObj[key].id,
        rowColumns : [key,productsObj[key].title]
      })
    });
    return result;
  }
}
