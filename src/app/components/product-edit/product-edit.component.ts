import {Subscription} from 'rxjs';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService, Product} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {CategoriesService, Category} from "../../services/categories.service";


@Component({
    selector: 'app-product-edit',
    templateUrl: 'product-edit.component.html',
    styleUrls: ['product-edit.component.css'],
    inputs: ['list:list'],
    providers: [ProductService, CategoriesService]

})
export class ProductEditComponent implements OnInit {
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

    private productId: number;
    public categoryList: Category = {};
    private subscription: Subscription;
    private list: Category = {};

    constructor(private productService: ProductService,
                private activatedRoute: ActivatedRoute,
                private location: Location,
                private categoriesService: CategoriesService ) {
    };

    ngOnInit() {
        this.getCategories();
        // subscribe to router event
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                this.productId = param['productId'];
                this.getProduct(this.productId);
                });
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }

    getCategories() {
        this.categoriesService.getCategories()
            .subscribe(
                categoryList => this.categoryList = categoryList
            );
    }

    getProduct(productId: number) {
        this.productService.getProduct(productId)
            .subscribe(
                productDetails => this.productDetails = productDetails
            );
    }

    save() {
        this.productService.updateProduct(this.productId, this.productDetails)
            .subscribe(
                productDetails => {
                    this.productDetails = productDetails;
                }
            );
    }

    goBack(): void {
        this.location.back();
    }

}
