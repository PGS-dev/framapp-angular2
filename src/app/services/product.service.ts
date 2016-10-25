/**
 * Created by rkubisiak on 10/13/2016.
 */
import {Injectable} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {TableData} from '../interfaces/';

@Injectable()
export class ProductService {
  constructor(private FirebaseService: FirebaseService) {}

  getProducts() {
    return this.FirebaseService.getResources('products');
  }

  getProduct(productId: number) {
    return this.FirebaseService.getResource(`products/${productId}`);
  }

  updateProduct(productId, data) {
    return this.FirebaseService.updateResource(`products/${productId}`, data);
  }

  addProduct() {
  }

  deleteProduct(productId) {
    return this.FirebaseService.removeResource(`products/${productId}`);
  }

  toTableData(productsObj) {
    let result: TableData = {
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
    productsObj.forEach((item) => {
      result.dataRows.push({
        rowId: item.$key,
        title: item.title,
        rowColumns: [item.$key, item.title]
      });
    });
    return result;
  }
}
