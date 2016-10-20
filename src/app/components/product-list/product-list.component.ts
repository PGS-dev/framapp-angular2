import {Component, ViewEncapsulation} from "@angular/core";
import {ProductService, Products } from "../../services/product.service";
import {UtilsService} from "../../services/utils.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-list.component.html',
  inputs: ['products'],
  styleUrls: ['./product-list.scss'],
  providers: []
})
export class ProductList {
  private  subscription: Subscription;
  selectedCategory: string = '';
  productListFiltered: Products = {};
  productsList: Products = {};

  constructor(
    private productService: ProductService,
    private UtilsService: UtilsService,
    private activatedRoute: ActivatedRoute
  ){
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.selectedCategory = param['categoryId'] || '';
        this.filterProducts();
      });
  };

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        productsList => {
          this.productsList = productsList;
          this.filterProducts();
        }
      );
  }
  filterProducts(){
    this.productListFiltered = this.UtilsService.filterObject(this.productsList,this.selectedCategory!=='' ? {
      category: this.selectedCategory
    } : {});
  }
}
