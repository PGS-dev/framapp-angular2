/**
 * Created by tlaskowski on 10/12/2016.
 */
import {Subscription} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/";
import { Location } from '@angular/common';

@Component({
  selector: 'product-details',
  styleUrls: ['product-details.component.scss'],
  templateUrl: 'product-details.component.html',
  providers: [ProductService]
})

export class ProductDetailsComponent implements OnInit {
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

  private subscription: Subscription;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
  };

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        let productId = param['productId'];
        this.getProduct(productId);
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  getProduct(productId: number) {
    this.productService.getProduct(productId)
      .subscribe(
        productDetails => this.productDetails = productDetails
      );
  }

  goBack(): void {
    this.location.back();
  }
}
