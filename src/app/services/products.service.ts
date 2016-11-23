import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from "../interfaces/product.interface";

@Injectable()
export class ProductsService {

  constructor(private dataService: DataService ) {
    this.getProducts()
  }

  getProducts(){
    return this.dataService.getData('products.json').map(
      response=>response as Product[]
    );
  }

}
