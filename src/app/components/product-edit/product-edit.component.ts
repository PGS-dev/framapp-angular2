import {Subscription} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CategoriesService} from '../../services/categories.service';
import {Category} from '../../interfaces/';
import {Product} from '../../interfaces/';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: 'product-edit.component.html',
  styleUrls: ['product-edit.component.css'],
  inputs: ['list:list'],
  providers: [ProductService, CategoriesService]
})
export class ProductEditComponent implements OnInit {
  private subscriptions: Array<Subscription> = [];
  private productId: number;
  private list: Array<Category> = [];
  public categoryList: Array<Category> = [];
  private product: FormGroup;
  public productDetails: Product = {
    amount: 0,
    category: "",
    description: "",
    edit: "",
    id: "",
    imageUrl: "",
    price: 0,
    promoted: false,
    title: ""
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

  onSubmit({value, valid}: {value: Product, valid: boolean}) {
    this.save();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
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
  }

  goBack(): void {
    this.location.back();
  }
}
