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
    return this.FirebaseService.getResource(`products/${productId}`);
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
    productsObj.forEach((item)=>{
      result.dataRows.push({
        rowId: item.$key,
        title: item.title,
        rowColumns: [item.$key, item.title]
      })
    });
    return result;
  }
}
