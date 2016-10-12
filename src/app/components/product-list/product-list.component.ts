import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'product-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-list.component.html',
  inputs: ['products'],
  styleUrls: ['./product-list.scss']
})
export class ProductList {
  constructor() {

  }
}
