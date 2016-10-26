import {Component, OnInit, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {CategoriesService} from '../../services/categories.service';
import {Category} from '../../interfaces/';
import {ProductService} from '../../services/product.service';
import {Product} from '../../interfaces/';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {routeObject} from '../../interfaces/';

@Component({
  selector: 'app-product-admin-add',
  templateUrl: 'product-admin-add.component.html',
  styleUrls: ['product-admin-add.component.scss'],
  providers: [ProductService, CategoriesService]
})
export class ProductAdminAddComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  private product: FormGroup;
  private productId: number;
  private isNew: boolean;
  public categoryList: Array<Category> = [];
  public productDetails: Product = {
    amount: 0,
    category: '',
    description: '',
    edit: '',
    id: '',
    imageUrl: '',
    price: 0,
    promoted: false,
    title: ''
  };

  constructor(
    private location: Location,
    private categoriesService: CategoriesService,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getCategories();
    this.product = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      category: ['', [Validators.required]]
    });

    this.subscriptions.push(
      this.router
      .data
      .subscribe((routeObject: routeObject) => this.isNew = routeObject.isNew));
  }

  onSubmitNew({value, valid}: { value: Product, valid: boolean }) {
    this.add();
  }

  onSubmit({value, valid}: {value: Product, valid: boolean}) {
    this.save();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getCategories() {
    this.subscriptions.push(this.categoriesService.getCategories()
      .subscribe(
          categoryList => this.categoryList = categoryList
      ));
  }

  add() {
    this.productService.addProduct(this.productDetails);
    this.location.back();
  }

  save() {
    this.productService.updateProduct(this.productId, this.productDetails);
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
