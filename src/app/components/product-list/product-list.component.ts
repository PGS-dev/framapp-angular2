import {Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';
import {ProductService } from '../../services/product.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../interfaces/';

@Component({
  selector: 'app-product-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  selectedCategory: string = '';
  productListFiltered: Array<Product> = [];
  productsList: Array<Product> = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscriptions.push(this.activatedRoute.params.subscribe(
      (param: any) => {
        this.selectedCategory = param['categoryId'] || '';
        this.filterProducts();
      }));
  };

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getProducts() {
    this.subscriptions.push(this.productService.getProducts()
      .subscribe(
        productsList => {
          this.productsList = productsList;
          this.filterProducts();
        }
      ));
  }
  filterProducts() {
    this.productListFiltered = this.productService.filterProductsByCategory(this.productsList, this.selectedCategory);
  }
}
