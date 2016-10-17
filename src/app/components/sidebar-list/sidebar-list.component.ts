import { Component, OnInit, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'sidebar-list',
  templateUrl: 'sidebar-list.component.html',
  styleUrls: ['sidebar-list.component.scss'],
})
export class SidebarListComponent implements OnInit {
  @Input('title') title: string;
  @Input('list') list: string[];

  constructor() {

  }

  ngOnInit() {
  }

}
