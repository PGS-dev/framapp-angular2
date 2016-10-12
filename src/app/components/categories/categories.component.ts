/**
 * Created by rkubisiak on 10/12/2016.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'cats',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class Categories {
  list = [
    {
      name : "List 1"
    },{
      name : "List 2"
    },{
      name : "List 3"
    },{
      name : "List 4"
    },{
      name : "List 5"
    },{
      name : "List 6"
    }
  ];
};
