import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Category, TableData} from '../../../interfaces/';
import {ProductService} from '../../../services/';

@Component({
  selector: 'app-product-admin',
  templateUrl: 'product-admin.component.html',
  styleUrls: ['product-admin.component.scss']
})
export class ProductAdminComponent {
  @ViewChild('removeModal') removeModal;
  public deleteProductName: string = '';
  public deleteProductId: string = '';
  public productsList: Array<Category> = [];
  public tableData: TableData = {
    actions: [
      'edit',
      'remove'
    ],
    headers: [],
    dataRows: []
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  updateProductList(productsList) {
    this.productsList = productsList;
    this.tableData = this.productService.toTableData(this.productsList);
  }

  actionItemClick(data) {
    if (this[data.action + 'Product']) {
      this[data.action + 'Product'](data.id, data.title);
    }
  }

  removeProduct(productId, productName) {
    this.deleteProductName = productName;
    this.deleteProductId = productId;
    this.removeModal.open();
  }

  modalCloseEE(result) {
    if (result === true && this.deleteProductId !== '') {
      this.productService.deleteProduct(this.deleteProductId);
      this.deleteProductId = '';
      this.deleteProductName = '';
    }
  }

  editProduct(productId) {
    this.router.navigateByUrl(`productsAdmin/${productId}/edit`);
  }

  addProduct() {
    this.router.navigateByUrl('productsAdmin/add');
  }
}
