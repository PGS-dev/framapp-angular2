import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from "../interfaces/product.interface";
import { Category } from "../interfaces/categories.interface";

@Injectable()
export class ProductsService {

  constructor(private dataService: DataService) {
    this.getProducts()
  }

  getProducts() {
    return this.dataService.getDataAsArray('products.json').map(
      response=>response as Product[]
    );
  }

  getProductsByCategory(category: Category) {
    return this.getProducts().filter(product=>product.category === category);
  }

}
