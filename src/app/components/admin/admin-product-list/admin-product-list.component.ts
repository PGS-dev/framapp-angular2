import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-product-list',
  templateUrl: 'admin-product-list.component.html',
  styleUrls: ['admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  @Input('products') products: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
