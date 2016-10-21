/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {tableData} from "../interfaces/";

@Injectable()
export class ProductService {
  constructor(private HttpService: HttpService){}

  getProducts(){
    return this.HttpService.getResources('products.json');
  }
  getProduct(productId: number){
    return this.HttpService.getResources(`products/${productId}.json`);
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
