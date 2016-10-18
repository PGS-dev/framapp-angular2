/**
 * Created by tlaskowski on 10/12/2016.
 */
import {Component, OnInit} from '@angular/core';
import {ProductService, Product} from "../../services/product.service";

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

  constructor(private productService: ProductService) {
  };

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct()
      .subscribe(
        productDetails => this.productDetails = productDetails
      );
  }
}
