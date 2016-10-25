/**
 * Created by rkubisiak on 10/13/2016.
 */
import {Injectable} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {tableData} from "../interfaces/";
import {Http} from '@angular/http';

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

  public productsList: Products = {};

  constructor(private FirebaseService: FirebaseService,
              private http: Http) {
  }

  getProducts() {
    return this.FirebaseService.getResources('products');
  }

  getProduct(productId: number) {
    return this.FirebaseService.getResources(`products/${productId}`);
  }

  updateProduct(productId, data) {
    return this.FirebaseService.putResources(`products/${productId}`, JSON.stringify(data));
  }

  addProduct() {
    //add product
  }

  deleteProduct(productId){
    // delete product
  }

  toTableData(productsObj) {
    let keys = Object.keys(productsObj);
    let result: tableData = {
      actions: [
        'edit',
        'remove'
      ],
      headers: [
        'ID',
        'Product name'
      ],
      dataRows: []
    };
    keys.forEach((key)=> {
      result.dataRows.push({
        rowId: key,
        rowId2: productsObj[key].id,
        title: productsObj[key].title,
        rowColumns: [key, productsObj[key].title]
      })
    });
    return result;
  }
}
