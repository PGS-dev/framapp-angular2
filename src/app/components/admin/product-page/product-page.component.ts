import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: 'product-page.component.html',
  styleUrls: ['product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  productMock = [
    {id: 1, name: 'Product #1'},
    {id: 2, name: 'Product #2'},
    {id: 3, name: 'Product #3'},
    {id: 4, name: 'Product #4'},
    {id: 5, name: 'Product #5'},
    {id: 6, name: 'Product #6'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
