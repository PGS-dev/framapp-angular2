import {Component, ViewEncapsulation} from "@angular/core";
import {ProductService, Products, Product} from "../../services/product.service";
import {Subscription} from "rxjs";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'product-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-list.component.html',
  inputs: ['products'],
  styleUrls: ['./product-list.scss'],
  providers: []
})
export class ProductList {
  selectedCategory: string = '';
  productListFiltered: Products = {};
  subscription: Subscription;
  productsList: Products = {};

  constructor(private productService: ProductService, private UtilsService: UtilsService) {
    this.subscription = this.productService.selectedCategory$.subscribe(
      selectedCategory => {
        this.selectedCategory = selectedCategory;
        this.filterProducts();
      }
    );
  };

  ngOnInit() {
    this.getProducts();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
    this.productListFiltered = this.UtilsService.filterObject(this.productsList,{
      category: this.selectedCategory
    });
  }
}
