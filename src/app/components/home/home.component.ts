import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { FirebaseListObservable } from 'angularfire2';
import { AngularFire} from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private productsList: FirebaseListObservable<any>;
  private categoryId: string;
  products: {}[];
  constructor(private route: ActivatedRoute, af: AngularFire) {
    this.categoryId = this.route.snapshot.params['id'] || "";
    this.productsList = af.database.list('/api/v1/products/');

    this.productsList.subscribe(
      productsList => {
        console.log("angularfire", productsList, productsList.filter((e)=> e.category === this.categoryId));
        this.products = productsList.filter((e)=> e.category === this.categoryId);
      }
    );
    //musi sie ID odswiezac
    //todo: cleanup, sort by category, display.
  }

  ngOnInit() {

  }

}
