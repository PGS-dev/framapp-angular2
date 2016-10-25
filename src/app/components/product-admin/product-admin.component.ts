import {Component, OnInit, ViewChild} from '@angular/core';
import {Category, tableData} from "../../interfaces/";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-admin',
  templateUrl: 'product-admin.component.html',
  styleUrls: ['product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  @ViewChild('removeModal') removeModal;
  public deleteProductName: string = '';
  public deleteProductId: string = '';
  private subscriptions: Array<Subscription> = [];
  public productsList: Category = {};
  public tableData: tableData = {
    actions: [
      'edit',
      'remove'
    ],
    headers: [],
    dataRows: []
  };

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getProducts() {
    this.subscriptions.push(this.productService.getProducts()
      .subscribe(
        productsList => {
          this.productsList = productsList;
          this.tableData = this.productService.toTableData(productsList);
        }
      ));
  }

  actionItemClick(data) {
    if (this[data.action + 'Product']) {
      this[data.action + 'Product'](data.id,data.title);
    }
  }

  removeProduct(productId,productName) {
    this.deleteProductName = productName;
    this.deleteProductId = productId;
    this.removeModal.open();
  }
  modalCloseEE(result){
    if(result===true && this.deleteProductId!==''){
      this.productService.deleteProduct(this.deleteProductId);
      this.deleteProductId='';
      this.deleteProductName='';
    }
  }
  editProduct(productId) {
    this.router.navigateByUrl(`products/${productId}/edit`);
  }

  addProduct() {
    this.router.navigateByUrl('productsAdmin/add');
  }
}
