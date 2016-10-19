import {Component, ViewEncapsulation} from "@angular/core";
import {ProductsService, Products} from "../../services/products.service";

@Component({
    selector: 'product-list',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './product-list.component.html',
    inputs: ['products'],
    styleUrls: ['./product-list.scss'],
    providers: [ProductsService]
})
export class ProductList {

    productsList: Products = {};

    constructor(private productsService: ProductsService) {
    };

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productsService.getProducts()
            .subscribe(
                productsList => this.productsList = productsList
            );
    }
}
