import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../interfaces/";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-admin-add',
  templateUrl: 'product-admin-add.component.html',
  styleUrls: ['product-admin-add.component.css'],
  providers: [ProductService, CategoriesService]
})
export class ProductAdminAddComponent implements OnInit {
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

  private productId: number;
  private product: FormGroup;
  public categoryList: Category = {};


  constructor(private productService: ProductService,
              private location: Location,
              private categoriesService: CategoriesService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getCategories();

    this.product = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      category: ['', [Validators.required]]
    });
  }

  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    console.log(value, valid);
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(
        categoryList => this.categoryList = categoryList
      );
  }

  // addProduct() {
  //   this.productService.addProduct()
  //     .subscribe(
  //       productDetails => {
  //         this.productDetails = productDetails;
  //       }
  //     );
  // }

  goBack(): void {
    this.location.back();
  }

}
