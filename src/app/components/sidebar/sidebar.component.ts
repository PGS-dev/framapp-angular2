import { Component, OnInit } from '@angular/core';
// import { SidebarListComponent } from '../sidebar-list/sidebar-list.component';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
  providers: [ DataService]
})
export class SidebarComponent implements OnInit {
  categories = {
    title: 'Categories',
    list: []
  };
  admin = {
    title: 'Admin',
    list: ['Products', 'Categories'],
    isAdminActive: false
  };

  constructor(private dataService: DataService ) {
  }
  getCategoriesList(){
    this.dataService.getData('categories.json')
      .subscribe(
        (categoryList) => {
          console.log(categoryList);
          this.categories.list = Object.keys(categoryList);
        }
      );
  }
  ngOnInit() {
    this.getCategoriesList();
  }

}
