import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  private item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    // this.item = af.database.object('categories').subscribe(
    //   categoryList => console.log("angularfire", categoryList)
    // );

  }
  ngOnInit(){
  }
}
