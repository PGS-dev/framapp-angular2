import { Component, OnInit } from '@angular/core';
import { SidebarListComponent } from '../sidebar-list/sidebar-list.component';


@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
  providers: [SidebarListComponent]
})
export class SidebarComponent implements OnInit {
  categories = {
    'title': 'Categories',
    'list': ['Category #1', 'Category #2', 'Category #3']
  };
  admin = {
    'title': 'Admin',
    'list': ['Products', 'Categories'],
    'isAdminActive': true
  };

  constructor() { }

  ngOnInit() {
  }

}
