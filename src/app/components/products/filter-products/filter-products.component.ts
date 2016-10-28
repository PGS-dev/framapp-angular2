import {Component, OnInit, Output, OnDestroy, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import {Category, Product} from '../../../interfaces/';
import {ProductService, CategoriesService} from '../../../services/';

@Component({
  selector: 'app-filter-products',
  templateUrl: 'filter-products.component.html',
  styleUrls: ['filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit, OnDestroy {
  @Output() ProductListFiltered = new EventEmitter<Array<Product>>();
  private ProductList: Array<Product> = [];
  private subscriptions: Array<Subscription> = [];
  private categoryList: Array<Category> = [];
  private selectedCategoryId: string = '';
  private filterString: string = '';
  private filterByAll: boolean = false;

  constructor(private CategoriesService: CategoriesService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getCategories() {
    this.subscriptions.push(this.CategoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = categoryList
      ));
  }

  getProducts() {
    this.subscriptions.push(this.productService.getProducts()
      .subscribe(
        productList => {
          this.ProductList = productList;
          this.filterProducts();
        }
      ));
  }

  changeCategory(value) {
    this.selectedCategoryId = value;
    this.filterProducts();
  }

  changeFilterString() {
    this.filterProducts();
    this.filterString = '';
  }

  filterProducts() {
    let filteredByString;
    let filteredByCategory = this.productService.filterProductsByCategory(this.ProductList, this.selectedCategoryId);
    if (this.filterByAll) {
      filteredByString = this.productService.filterProductsByString(filteredByCategory, this.filterString);
    } else {
      filteredByString = this.productService.filterProductsByName(filteredByCategory, this.filterString);
    }
    this.ProductListFiltered.next(filteredByString);

    return filteredByString;
  }
}
