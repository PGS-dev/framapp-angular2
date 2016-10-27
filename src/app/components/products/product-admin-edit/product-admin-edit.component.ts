import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {Category, Product} from '../../../interfaces/';
import {ProductService, CategoriesService} from '../../../services/';

@Component({
  selector: 'app-product-admin-edit',
  templateUrl: 'product-admin-edit.component.html',
  styleUrls: ['product-admin-edit.component.scss'],
  providers: [ProductService, CategoriesService]
})
export class ProductAdminEditComponent implements OnInit, OnDestroy {
  @Input('list') list: Array<Category> = [];
  private subscriptions: Array<Subscription> = [];
  private productId: number;
  public categoryList: Array<Category> = [];
  private product: FormGroup;
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
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private categoriesService: CategoriesService,
    private fb: FormBuilder
  ) {};

  ngOnInit() {
    this.getCategories();
    // subscribe to router event
    this.subscriptions.push(this.activatedRoute.params.subscribe(
      (param: any) => {
        this.productId = param['productId'];
        this.getProduct(this.productId);
      }));
    this.product = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      category: ['', [Validators.required]]
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSubmit() {
    this.save();
  }

  getCategories() {
    this.subscriptions.push(this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = categoryList
      ));
  }

  getProduct(productId: number) {
    this.subscriptions.push(this.productService.getProduct(productId)
      .subscribe(
        productDetails => this.productDetails = productDetails
      ));
  }

  save() {
    this.productService.updateProduct(this.productId, this.productDetails);
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
