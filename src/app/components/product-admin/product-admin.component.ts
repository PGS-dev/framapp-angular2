import { Component, OnInit } from '@angular/core';
import {Category,tableData} from "../../interfaces/";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-admin',
  templateUrl: 'product-admin.component.html',
  styleUrls: ['product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  public productsList: Category = {};
  public tableData: tableData = {
    actions: [
      'edit',
      'remove'
    ],
    headers : [],
    dataRows : []
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ){}

  ngOnInit() {
    this.getProducts();
  }
  actionItemClick(data){
    if(this[data.action+'Product']){
      this[data.action+'Product'](data.id);
    }
  }
  getProducts() {
    this.productService.getProducts()
      .subscribe(
        productsList => {
          this.productsList = productsList;
          this.tableData = this.productService.toTableData(productsList);
        }
      );
  }
  removeProduct(productId){
    console.log('Remove product:'+productId);
  }
  editProduct(productId){
    this.router.navigateByUrl(`products/${productId}/edit`);
  }
}
