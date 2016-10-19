import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  private objects: FirebaseObjectObservable<any>;
  private lists: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.objects = af.database.object('/api/v1/categories');
    this.objects.subscribe(
      categoryList => console.log("angularfire", categoryList)
    );

    this.lists = af.database.list('/api/v1/categories');
    this.lists.subscribe(
      categoryList => console.log("angularfire", categoryList)
    );

  }
  ngOnInit(){
  }
}
