import { Component, OnInit } from '@angular/core';
import {Category,tableData} from "../../interfaces/";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-admin',
  templateUrl: 'product-admin.component.html',
  styleUrls: ['product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  public productsList: Category = {};
  public tableData: tableData = {
    hasRmEditBtns: true,
    headers : [],
    dataRows : []
  };

  constructor(
    private productService: ProductService
  ){}

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.productService.getProducts()
      .subscribe(
        productsList => {
          this.productsList = productsList;
          this.tableData = this.productService.toTableData(productsList);
        }
      );
  }
}
